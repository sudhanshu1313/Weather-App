import React from 'react'
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';
function App2() {
  return (
    <>
        
        <Auth0Provider
        domain="dev-odu2dzn708lldehf.us.auth0.com"
        clientId="sfcXSHMxK2PrY70fqSYzi3Lfezd3jkPT"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}> 

            <App/>
        
        </Auth0Provider>
        
    </>
  )
}

export default App2