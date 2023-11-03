import { query } from './query.js';


export const getGeneLinkoutsQuery = `
  query GeneLinkoutsQuery($identifier: ID!) {
    geneLinkouts(identifier: $identifier) {
      results {
        href
        text
      }
    }
  }
  `;


export function getGeneLinkouts(queryData={}, options={}) { 
  const {identifier} = queryData;
  const variables = {identifier}; 
  const {abortSignal} = options;
  return query(getGeneLinkoutsQuery, variables, abortSignal);
}


export function geneLinkoutsToLinkoutResults(data) {
  const results = data.geneLinkouts.results;
  return {results};
}


export function geneLinkoutsFunction(linkoutData, options) {
    return getGeneLinkouts(linkoutData, options)
      .then(({data}) => geneLinkoutsToLinkoutResults(data)); 
}


export const getLocationLinkoutsQuery = `
  query LocationLinkoutsQuery($identifier: ID!, $start: Int!, $end: Int!) {
    locationLinkouts(identifier: $identifier, start: $start, end: $end) {
      results {
        href
        text
      }
    }
  }
  `;


export function getLocationLinkouts(queryData={}, options={}) {
  const {identifier, start, end} = queryData;
  const variables = {identifier, start: parseInt(start), end: parseInt(end)}; 
  const {abortSignal} = options;
  return query(getLocationLinkoutsQuery, variables, abortSignal);
}


export function locationLinkoutsToLinkoutResults(data) {
  const results = data.locationLinkouts.results;
  return {results};
}


export function locationLinkoutsFunction(linkoutData, options) {
    return getLocationLinkouts(linkoutData, options)
      .then(({data}) => locationLinkoutsToLinkoutResults(data)); 
}


export function allLinkoutsFunction({type, linkoutData}, options) {
  switch (type) {
    case 'gene':
      return geneLinkoutsFunction(linkoutData, options);
    case 'location':
      return locationLinkoutsFunction(linkoutData, options);
  }
  return Promise.reject();
}
