import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

// Import required components and hooks
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Create an httpLink to connect to the server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Instantiate ApolloClient
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Wrap the App component in ApolloProvider
function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Navbar />
        <Outlet />
      </>
    </ApolloProvider>
  );
}

export default App;
