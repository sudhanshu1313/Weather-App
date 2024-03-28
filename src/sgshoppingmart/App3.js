import React from 'react'
import App2 from './App2'
import { Auth0Provider } from '@auth0/auth0-react';
function App3() {
  return (
    <>

    <Auth0Provider
    domain="dev-odu2dzn708lldehf.us.auth0.com"
    clientId="sfcXSHMxK2PrY70fqSYzi3Lfezd3jkPT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}> 
    
    <App2/>

    </Auth0Provider>
    
    
    </>
  )
}

export default App3