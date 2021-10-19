# Getting Started with Ottonova Chat Bot codename Thomas

This project was built with React Js, ExpressJs and Socket IO websocket client library.

## Version Control

Latest features to this project are added to the main branch of this repository.

## Set up Project Locally

Clone this project (main branch).
Run 'npm install' first in the project's root directory to install concurrently to start both front and server ends.
cd to the client and server directories respectively and run 'npm install' to install the dependencies.
yarn install could also be used if the user prefers yarn as package manager

## Project Structure

the project houses the server and the client folders.
The server folder contains the server.js file(as the project entry point). A router folder consisting of route files(non functional), A helper folder containing files that aid in computing command responses(commands.js, dates.js), user management storage for a socketIO connection(users.js).
The client folder is bootsrapped from the create-react-app command. A self styled component style is used here. The src folder contains the commands folder that houses the dates.js file( for day calculations for the date type command). Also a components folder that contains the components. The component folders are so named corresponding to either their command type or chat function.

## Available Scripts

In the project root directory, you can run:

### `yarn/npm run startserver`

Runs the app in the development mode. Run command from project's root directory\
React Frontend will be accessibleat [http://localhost:7006], while server end will be at [http://localhost:7007].

## `Login Functionality`

On the Login Page, 2 login buttons can be seen; A main 'Login' Button and another with a 'Test Login' text. The main Login button has no functionality as user authentication is not enabled. The 'Test Login' Button works by supplying a username and(or without) password. A No username situation will prompt an error and possibly crash the development server.

## `Command and Message Functionality`

On the Top right of the header, A toggle element exists to switch the functionality mode from command to message and vice versa.
The command mode is a random command generator that only allows a user to interact with a command widget only once (Bonus Challenge).
When a client connects with the server, this user is stored in the user list on the server. Alongside the user detail is a randomized command list to store the command information for that user.
Message mode only reflect the user's sent message.

## `Client side Code Philosophy`

Functional components and Hooks are extensively used in this project. The Chat.jsx houses the lifecycle methods(useEffect hooks) and each's functionality is documented in the codes.

## `Google Map API`

Due to the sensitive nature of exposing an API key. I urge any one using this project to obtain an API key from their google cloud settings and create a .env file in the client directory and insert an entry, REACT_APP_API = obtained_API_key
