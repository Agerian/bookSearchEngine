import { gql } from '@apollo/client';

export const SAVE_BOOK = gql `
  mutation saveBook($bookData: BookInput!) {
    saveBook(input: $bookData) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql `
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      eamil
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;
