# **\*\*\*\***\*\*\***\*\*\*\***
# Environment Variables

- Create a .env file at the root of the project, at the same level as the package.json file.
- Add the following environment variables to the .env file:

  - VITE_BACKEND_URL=http://127.0.0.1:8000


# **\*\*\*\***\*\*\***\*\*\*\***
# Start the project

- run the command `npm install` to install the dependencies
- run the command `npm run dev` to start the project

Thats it, now you should set up the backend

# **\*\*\*\***\*\*\***\*\*\*\***
# Notes

- Right now the authentication system works, with a few bugs here and there. Right now you should be able to:
  - Create a new user
  - Login with an existing user
  - Logout
  - View the dashboard only if the user is authenticated

- The signup form needs to be connected to the api still. It doesnt do anything at the moment.