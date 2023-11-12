// DONE: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'n4663rts0h'
export const apiEndpoint = `https://${apiId}.execute-api.eu-west-2.amazonaws.com/dev`

export const authConfig = {
  // DONE: reate an Auth0 application and copy values from it into this map
  domain: 'dev-jn42im6v3lb6oqqq.us.auth0.com',            // Auth0 domain
  clientId: '4emfwSMwTg8sVJwsF3sl7ThDkKSnBZYM',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
