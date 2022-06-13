## The App structure and dependency
* This project:
1. is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and typescript.
2. uses tailwind css. (Styled component is installed but not used in this project).
3. uses apollo client instead of aws amplify.
4. all files are unit tested with a 100% unit test coverage. run 'npm run jest::test' to run test and generate the report.
* Folder Structure:
```
my-app
│   README.md
│   jest.config.js
|   postcss.config.js
|   tailwind.config.js    
│
└───src
│   │
│   └───components
│   |    │   errorScreen.test.tsx
│   |    │   errorScreen.tsx
│   |    │   loading.test.tsx
│   |    │   loading.tsx
│   |    │   title.test.tsx
│   |    │   title.tsx
│   |    │   user.test.tsx
│   |    │   user.tsx
│   |    │   
|   |----config
|   |    |   apolloConfig.js
|   |    |   aws-exports.js
|
│   └───errorBoundary
│   |    │   errorBoundary.test.tsx
│   |    │   errorBoundary.tsx
│   └───services
│   |    │   valueDisplayService.test.ts
│   |    │   valueDisplayService.ts
│   └───types
│   |    │   types.ts
```
---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run jest::test`

it will run all unit tests in this project and a report is given in the end. This project's unit test coverage is 100%.

## How to start the app locally?
1) go into the root folder of the app. The root folder is the one with package.json file.
2) run 'npm i ' to install all dependencies. Make sure node is installed in your computer. It is tested to work with node version: 16.13.1. Use nvm if you do not want to install this version globally.
3) after all dependencies are installed, go to your preferred web browser and open "http://localhost:3000" to visit the app in dev environment.

## Others
1. when you open the page, you will see Admin and Manager input options. These two role types are not hardcoded in app.tsx instead they are dynamically created based on the response of the api.
   1. the api currently returns zeller customers with role, ADMIN and MANAGER. If in the future, this api returns more roles like 'Superuser' or 'Regular'. These roles could be automatically shown on the page without any code change.
2. this app has a global error handler (errorBoundary) with unit test. Whenever there is an error, the screen will show the prepared error screen. The error screen is located in src/components/errorScreen.tsx.
3. this app has a service folder where all services are grouped. It currently has only one service called valueDisplayService. This service is injected in User component as a dependency.
4. apollo client related config functions are located in src/config/apolloConfig.js