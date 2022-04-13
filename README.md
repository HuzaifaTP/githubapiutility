This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To start the project do the following in VSCode:

### 1. `npm install` 
To install all the project dependencies
### 2. `npm start` 
To start the project on 'http://localhost:3000' in the browser
### USER STORIES
1. As a user I am able to search the top 10 github users with auto-correct function
2. As a user I am able to get the image of the user when I search for him/her
## TECHNOLOGY USED
1. Front-end: React (Javascript library)
2. Back-end: github Search & github Users API
     - End-point 1: https://api.github.com/users
        - GET response: Top 10 Github usernames
     - End-point 2: https://api.github.com/users/{user}/repos:%3E0+followers:%3E0
        - GET response: Repository data corresponding to "user" gotten from end-point 1