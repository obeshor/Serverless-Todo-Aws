// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'lvoraivrrf'
export const apiEndpoint = `https://${apiId}.execute-api.eu-west-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-6y08m7uy.auth0.com',            // Auth0 domain
  clientId: '1ryaG6qLL0DLjvE61neK5n7pajAd44Wn',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
