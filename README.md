# User Account Management Application

## Project Overview

This project is a React application (V16+) that allows users to create and manage accounts. The application includes a login page, a registration page, and a page where users can view and edit their account information.

## Features

- **User Registration**: New users can create an account.
- **User Login**: Existing users can log in to their accounts.
- **Account Management**: Users can view and edit their account details.
- **Responsive Design**: The application is designed to be mobile-friendly.
- **Error Handling**: Basic error handling for login and registration.

## Pages Overview

1. **Login Page**
   - Users enter their email and password to log in.
   - On successful login, they are redirected to the Account Information page.
   - A “Back to Home” button is present on the top-left corner.

2. **Registration Page**
   - Users can create an account by entering an email and password.
   - The account details are saved in localStorage.
   - A “Back to Home” button is present on the top-left corner.

3. **Account Information Page**
   - Displays the logged-in user’s email and password.
   - Users can update their details, which are saved in localStorage.
   - A “Back to Home” button is present on the top-left corner.

## Tech Stack

- **Frontend**: React (V16+)
- **Styling**: Tailwind
- **State Management**: React's built-in hooks (`useState`, `useEffect`)
- **Routing**: React Router for navigation

## Getting Started

To run the application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>

2. **Install the dependencies**:
   ```bash
   npm install

3. **Start the development server**:
   ```bash
    npm start

4. **Open the application**:
    ```bash
    The application will open in your default browser at `http://localhost:3000`.

## Folder Structure

The project is structured as follows:

- **`public/`**: Contains the HTML template and other static assets.
- **`src/`**: Contains the React application's source code.
  - **`components/`**: Contains all the React components.
  - **`pages/`**: Contains the different pages of the application.
  - **`App.js`**: The root component of the application.
  - **`index.js`**: The entry point of the application.

   