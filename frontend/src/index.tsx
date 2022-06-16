import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const httpLink = createUploadLink({
  uri: "http://localhost:3306/query",  // gateway
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
