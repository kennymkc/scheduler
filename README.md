# Interview Scheduler
Interview scheduler is a single-page app built on React that allows users to book, edit or cancel interviews.

## Final Product
!["View all appointments"](https://github.com/kennymkc/scheduler/blob/master/docs/appointments-view.png?raw=true)

!["Create new appointments"](https://github.com/kennymkc/scheduler/blob/master/docs/set-interview.png?raw=true)

!["Confirm before delete"](https://github.com/kennymkc/scheduler/blob/master/docs/confirm-delete.png?raw=true)

!["Error handling"](https://github.com/kennymkc/scheduler/blob/master/docs/error-handling.png?raw=true)

## Setup

Clone both of the following repos via these commands:

git clone git@github.com:kennymkc/scheduler.git
git clone git@github.com:git@github.com:kennymkc/scheduler-api.git

Install dependencies with the command npm install for each of the repositories.

___

In the scheduler repo:

npm start will start the WebPack development server
npm test will start the Jest testing framework
npm run storybook will launch Storybook
npm run cypress will launch Cypress

___

In the scheduler-api repo:

npm start will start the api server
npm run error will start the api server in error mode (used for testing errors).

___

Configuring the database:

Follow the instructions in the scheduler-api's README file

