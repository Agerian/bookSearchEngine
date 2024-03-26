import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

// Import hooks from Apollo Client
import { useQuery, useMutation } from '@apollo/client';
// Import the `GET_ME` query and the `REMOVE_BOOK` mutation
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
  // Use the `useQuery` Hook to execute the `GET_ME` query
  const { loading, data, refetch } = useQuery(GET_ME);
  const userData = data?.me || {};

  // Previously, we fetched user data using a REST API call within useEffect and managed state with useState
  // This has been replaced by the useQuery hook above, which directly fetches and manages the state of user data

  // Use the `useMutation` Hook to execute the `REMOVE_BOOK` mutation
  const [removeBook] = useMutation(REMOVE_BOOK, {
    // When the mutation completes, refetch the `GET_ME` query to update the UI with the current list of saved books
    onCompleted: () => refetch(),
    // Error handling for the mutation
    onError: (error) => console.error(error),
  });
  
  const handleDeleteBook = async (bookId) => {
    // This function now uses the `removeBook` mutation to remove a book from the user's saved books
    try {
      await removeBook({ variables: { bookId } });
      // The refetch in OnCompleted will update userData, so no need to update state or local storage here
    } catch (error) {
      console.error("Error removing book:", error);
    }
  };

  // Loading state is directly managed by the `useQuery` Hook
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.savedBooks.map((book) => {
            return (
              <Col md="4">
                <Card key={book.bookId} border='dark'>
                  {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;
