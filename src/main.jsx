import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import * as te from 'tw-elements';
const clientId = "726839815908-gh4t232ds4vvnbv7mmihgfocpq2hjr4g.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)
