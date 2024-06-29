import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, makeVar} from '@apollo/client'
import {setContext} from '@apollo/client/link/context';
import ErrorBoundary from './Error/ErrorBoundary';

// let paginationDefault = 1;
export const make_category = makeVar([1]);
export const make_subcategory = makeVar(5);
export const make_brandfilter = makeVar([]);
export const make_powerfilter = makeVar([]);
export const make_compressorfilter = makeVar([]);
export const make_pagination = makeVar([1]);
export const make_productid = makeVar([]);




const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql',
});

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
  <ErrorBoundary>
  <ApolloProvider client={client}>
  {/* <React.StrictMode> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  {/* </React.StrictMode> */}
  </ApolloProvider>
  </ErrorBoundary>
);


reportWebVitals();
