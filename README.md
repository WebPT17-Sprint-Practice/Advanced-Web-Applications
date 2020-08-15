# Sprint Practice: Advanced Web Applications - Animals

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Advanced Web Applications, focusing on testing, client-side authentication, hosting web apps, and PUT and DELETE requests.

## Description

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the animal data array, update the data, and delete data, and watch the fun happen!

## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Clone your OWN version of Repo
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on this Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.
- [x] **RUN** `npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [x] **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [x] **RUN** `npm start` to get your API up and running on `http://localhost:5000`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [x] **LOOK** at your `animal` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [x] **cd** into `animal` and run `npm install` to retrieve the client side dependencies.
- [x] **RUN** `npm start` to fire up your React application.

## Minimum Viable Product

The MVP of this project will be broken up between 3 stages. Follow each step.

### Stage 1 - Authentication

Build a login form to authenticate your users.

- [x] Construct an AXIOS request to retrieve a token from the server after users log in. You'll use this token to interact with the API and access protected/private routes.
- [x] Save the token to localStorage.
- [x] Build a `axiosAuth` module to create an instance of axios with the authentication header.
- [x] Build a `PrivateRoute` component and use it to protect the routes that render the `AnimalDashboard` component and `AddAnimal` component.

### Stage 2 - Consuming the API - CRUD (Create - Read - Update - Delete)

- [ ] When `AnimalDashboard.js` renders, make a GET request to fetch the data for your animals.
- [ ] In `AddAnimal.js`, finish setting up the useState, handleChanges, and handleSubmit functions to make a POST request to create a new animal.
      Hint: Because species lives as a key-value pair inside the classification object, you won't be able to use the handleChanges function on the onChange input field for species.
- [ ] In `AnimalForm.js`, complete the `saveUpdate` and `deleteAnimal` functions to make AJAX requests to the API to edit/delete data
- [ ] Watch and enjoy as your app responds to updates in the data. Pay special attention to how `AnimalDashboard.js`, `AddAnimal.js`, `AnimalForm.js`, and `AnimalList.js`, all interact to make full CRUD functionality possible

### Stage 3 - Testing

- [ ] Write a test using the rerender function after your props have been updated in one of your components.

### Stretch

- [ ] Write a test that mocks an asynchronous function in your app and checks for the data being rendered.
- [ ] Add more styling to the app using a styling/component library.
- [ ] Add images to each of the animals.

### API Documentation

- **[POST]** \* to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'test', password: 'test' }`
- **[GET]** to `/api/animals`: returns the list of animals.
- **[POST]** to `/api/animals`: creates a new animal object. Pass the animal as the `body` of the request (the second argument passed to `axios.post`).
- **[PUT]** to `/api/animals/:id`: updates the animal using the `id` passed as part of the URL. Send the animal object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
- **[DELETE]** to `/api/animals/:id`: removes the animal using the `id` passed as part of the URL.
