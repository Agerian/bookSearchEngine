# Book Search Engine

## Description

The Book Search Engine is a full-stack MERN application that allows users to search for books via the Google Books API and save their favorite books to their account. The application leverages GraphQL API with Apollo Server for efficient data fetching and manipulation, React for the frontend, MongoDB for the database, and Node.js/Express.js server. Unfortunately, the app is not debugged and functional yet.

## Features

- Search for books using the Google Books API
- User authentication (signup/login/logout)
- Save books to a personal account
- View saved books in a personal list
- Remove books from the saved list

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- GraphQL
- Apollo Server
- JWT for authentication

## Installation

To run this application locally, you'll need to have Node.js and MongoDB installed on your machine.

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Agerian/bookSearchEngine
```

2. Install the required dependencies:

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

3. Start the application:

```bash
# Run this command from the project root directory
npm run develop
```

This will start both the backend and frontend servers concurrently. By default, the application will run on http://localhost:3000.

## Usage

Navigate to the application URL in your browser.
Sign up for an account or log in if you already have an account.
Use the search bar to search for books.
Save your favorite books to your account.
View your saved books in the "Saved Books" section.
Remove books from your saved list if desired.

## License

[![MIT License License](https://img.shields.io/badge/license-MIT%20License-green)](https://opensource.org/licenses/MIT%20License)

## Questions

- GitHub: [Agerian](https://github.com/Agerian)
- Email: ezereading@gmail.com    
