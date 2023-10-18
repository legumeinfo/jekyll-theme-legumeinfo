import { query } from './query.js';


export const getGenesQuery = `
  query GenesQuery($identifier: String, $name: String, $description: String, $genus: String, $species: String, $strain: String, $family: String, $page: Int, $pageSize: Int) {
    genes(genus: $genus, species: $species, strain: $strain, identifier: $identifier, name: $name, description: $description, geneFamilyIdentifier: $family, page: $page, pageSize: $pageSize) {
      results {
        name
        identifier
        description
        organism { genus species }
        strain { identifier }
        geneFamilyAssignments { geneFamily { identifier } }
        locations { chromosome { identifier } supercontig { identifier } start end strand }
      }
      pageInfo {
        hasNextPage
        numResults
        pageSize
        pageCount
      }
    }
  }
  `;
      

export function getGenes(queryData={}, pageData={}, options={}) {
  const {genus, species, strain, identifier, description, family} = queryData;
  const {page, pageSize} = pageData;
  const variables = {
    genus,
    species,
    strain,
    identifier,
    description,
    family,
    page,
    pageSize,
  };
  const {abortSignal} = options;
  return query(getGenesQuery, variables, abortSignal);
}


export function genesDataToSearchResults(data) {
  // extract the page info
  const {hasNextPage: hasNext, numResults, pageSize, pageCount: numPages}
    = data.genes.pageInfo;
  // flatten results
  const results =
    data.genes.results.map(({organism: {genus, species}, strain, ...gene}) => {
      const geneFamilyAssignments =
        gene.geneFamilyAssignments
          .map(({geneFamily: {identifier}}) => identifier);
      const locations =
        gene.locations.map(({chromosome, supercontig, start, end, strand}) => {
          const interval = `${start}-${end} (${strand})`;
          if (chromosome?.identifier) {
            return `${chromosome?.identifier}:${interval} (chromosome)`;
          } else if (supercontig?.identifier) {
            return `${supercontig?.identifier}:${interval} (supercontig)`;
          }
          return `unknown:${interval}`;
        });
      return {
        genus,
        species,
        strain: strain.identifier,
        ...gene,
        geneFamilyAssignments,
        locations,
      };
    });
  // return the expected paginated results object
  return {hasNext, numResults, pageSize, numPages, results};
}
      

export function geneSearch(queryData, page, options={}) {
  return getGenes(queryData, {page, pageSize: 10}, options)
    .then(({data}) => genesDataToSearchResults(data));
}
