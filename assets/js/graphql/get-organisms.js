import { query } from './query.js';


export const getOrganismsQuery = `
  query OganismsQuery($taxonId: Int, $abbreviation: String, $name: String, $genus: String, $species: String, $page: Int, $pageSize: Int) {
  organisms(taxonId: $taxonId, abbreviation: $abbreviation, name: $name, genus: $genus, species: $species, page: $page, pageSize: $pageSize) {
      results {
        genus
        species
        strains {
          identifier
        }
      }
    }
  }
  `;


export function getOrganisms(queryData={}, pageData={}, options={}) {
  const {taxonId, abbreviation, name, genus, species} = queryData;
  const {page, pageSize} = pageData;
  const variables = {
    taxonId,
    abbreviation,
    name,
    genus,
    species,
    page,
    pageSize,
  };
  const {abortSignal} = options;
  return query(getOrganismsQuery, variables, abortSignal);
}


export function organismsDataToFormData(data) {
  // bin the strains by genus then species
  const binnedFormData = {};
  data.organisms.results.forEach(({genus, species, strains}) => {
    if (!(genus in binnedFormData)) {
      binnedFormData[genus] = {}
    }
    if (!(species in binnedFormData[genus])) {
      binnedFormData[genus][species] = [];
    }
    binnedFormData[genus][species].push(...strains);
  });
  // collapse the bins into arrays of objects
  const genuses =
    Object.entries(binnedFormData).map(([genus, binnedSpecies]) => {
      const species =
        Object.entries(binnedSpecies).map(([species, strainObjects]) => {
          const strains = strainObjects.map(({identifier}) => {
            return {strain: identifier};
          });
          return {species, strains};
        });
      return {genus, species};
    });
  // return the expected form data object
  return {genuses};
}


export function getOrganismsFormDataFunction(queryData={}, pageData={}, options={}) {
  return getOrganisms(queryData, pageData, options)
    .then(({data}) => organismsDataToFormData(data));
}
