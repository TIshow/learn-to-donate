import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { createUploadLink } from 'apollo-upload-client';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import App from './App'

const httpLink = createUploadLink({
  uri: "http://localhost:3306/query",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
