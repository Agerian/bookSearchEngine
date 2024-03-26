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