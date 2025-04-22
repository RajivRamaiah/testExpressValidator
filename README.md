# Express User Management Application

A simple Express.js application that demonstrates user management functionality with form validation using express-validator.

## Features

- Create new users with first name and last name
- View list of all users
- Update existing user information
- Delete users
- Form validation for user input
- In-memory data storage
- Clean and intuitive user interface

## Project Structure

```
.
├── views/
│   ├── index.ejs           # Main page showing user list
│   ├── createUser.ejs      # Form for creating new users
│   ├── updateUser.ejs      # Form for updating existing users
│   └── partials/
│       └── errors.ejs      # Reusable error display component
├── storages/
│   └── usersStorage.js     # In-memory data storage implementation
├── app.js                  # Main application file
└── package.json           # Project dependencies and scripts
```

## Technologies Used

- Express.js - Web framework
- EJS - Template engine
- express-validator - Form validation
- Node.js - Runtime environment

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`

## Usage

- Click "Create a user" to add a new user
- View all users on the home page
- Use the "Update" link to modify user information
- Use the "Delete" button to remove a user

## Data Storage

This application uses an in-memory storage system (`UsersStorage` class) to simulate a database. Note that data will be reset when the server restarts.

