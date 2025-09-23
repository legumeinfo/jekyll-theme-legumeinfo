import { query } from './query.js';

// uses the LIS GraphQL API to get data used to construct the search form
export const formDataQuery = `
  query FormDataQuery {
    organisms {
      results {
        genus
        species
      }
    }
  }
`;

export function getGeneFunctionFormDataFunction({abortSignal}) {
  return query(formDataQuery, {}, abortSignal)
    .then(({data}) => {
      // bin the strains by genus then species
      const binnedFormData = {};
      data.organisms.results.forEach(({genus, species}) => {
        if (!(genus in binnedFormData)) {
          binnedFormData[genus] = [];
        }
        console.log(species);
        binnedFormData[genus].push(species);
      });
      // collapse the bins into arrays of objects
      const genuses =
        Object.entries(binnedFormData).map(([genus, binnedSpecies]) => {
          const species = binnedSpecies.map((species) => {
            return {species};
          });
          return {genus, species};
        });
      // return the expected form data object
      return {genuses};
    });
}

const geneFunctionQuery = `
  query GeneFunctions($symbol: String, $trait: String, $gene: String, $genus: String, $species: String, $author: String, $publicationId: String, $page: Int, $pageSize: Int) {
    geneFunctions(symbol: $symbol, trait: $trait, gene: $gene, genus: $genus, species: $species, publicationId: $publicationId, author: $author, page: $page, pageSize: $pageSize) {
      pageInfo {
        currentPage
        pageSize
        numResults
        pageCount
        hasPreviousPage
        hasNextPage
      }
      results {
        genes {
          name
          identifier
          secondaryIdentifier
        }
        symbol
        classicalLocus
        symbolLong
        synopsis
        traits {
          name
          description
        }
        publications {
          title
          firstAuthor
          doi
        }
      }
    }
  }
`;

// search function
export function getGeneFunctions(searchData,{abortSignal}) {
  console.log(`getGeneFunctions`);
  const variables = {
    symbol: null,
    trait: searchData['traits'],
    gene: searchData['geneIdentifier'],
    genus: searchData['genus'],
    species: searchData['species'],
    publicationId: searchData['pubId'],
    author: searchData['author'],
    page: searchData['page'],
    pageSize: 10
  };
  // shim the results for the Web Component
  return query(geneFunctionQuery, variables, abortSignal)
    .then(({data}) => {
      // extract the page info
      const {hasNextPage: hasNext, numResults, pageSize, pageCount: numPages}
        = data.geneFunctions.pageInfo;
      // flatten results
      const results = 
        data.geneFunctions.results.map(({symbol, symbolLong, classicalLocus, genes, synopsis, traits, publications}) => {
          return {
            // Missing: Locus, gene symbols, description, gene model name, citation
            geneSymbols: [symbol],
            geneSymbolDescription: symbolLong,
            classicalLocus,
            geneModelPubName: genes[0]?.name,
            geneModelFullName: genes[0]?.identifier,
            synopsis,
            traits: traits.map(t => t.name).join(', '),
            citation: publications.map(p => p.doi).join(', '),
          };
        });
        
        
        // construct the expected paginated results object
        const paginatedResults = {hasNext, numResults, pageSize, numPages, results};
        return paginatedResults;
    });          
}
