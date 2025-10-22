const fetch = require('node-fetch');

async function testQuery() {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetTodos {
          todos {
            id
            title
            description
            status
          }
        }
      `
    })
  });
  
  const result = await response.json();
  console.log('GraphQL Response:');
  console.log(JSON.stringify(result, null, 2));
}

testQuery().catch(console.error);
