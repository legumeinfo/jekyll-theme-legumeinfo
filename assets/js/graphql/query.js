---
# This YAML front matter ensures Jekyll will pass the site variables in.
---

// hard-code the URI for now; we can update the code to allow URI override
// at run-time if need be.
const uri = "{{ site.graphql_uri }}";


// A function that gets data from a GraphQL server via a POST request.
// Adapted from https://graphql.org/graphql-js/graphql-clients/
export function query(query, variables={}, abortSignal=undefined) {
    return fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        signal: abortSignal,
    })
    .then(r => r.json())
    .then((response) => {
      if (response.errors) {
        response.errors.forEach(console.error);
      }
      return response;
    });
}