import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, makeVar} from '@apollo/client'
import {setContext} from '@apollo/client/link/context';
import ErrorBoundary from './Error/ErrorBoundary';
import { CartProvider } from "react-use-cart";
import { HelmetProvider } from 'react-helmet-async';


export const make_category = makeVar([1]);
export const make_subcategory = makeVar(5);
export const make_brandfilter = makeVar([]);
export const make_powerfilter = makeVar([]);
export const make_compressorfilter = makeVar([]);
export const make_pagination = makeVar([1]);
export const make_sum = makeVar([0,0]);
export const make_openauth = makeVar();


const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql',
});

const helmetContext = {};

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  uri:'http://localhost:1337/graphql',
  cache
  :new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <BrowserRouter>
  <ErrorBoundary>
  <ApolloProvider client={client}>
  <CartProvider>
  
  <HelmetProvider context={helmetContext}>
    
    <App />
    
    </HelmetProvider>
  
  </CartProvider>
  </ApolloProvider>
  </ErrorBoundary>
  </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
