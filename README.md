# _Fist 2 5

An SPA that allows users to create and respond to custom-made surveys. Surveys are limited to one question with responses ranging from 0-5. Users can view all surveys that have been created. Owners of surveys can view individual survey results, and delete surveys.

CLIENT
* [Deployed User Site](https://dontbin.github.io/project-3-client/)
* [Client Repo](https://github.com/dontbin/project-3-client)

API
* [Deployed API](https://pure-citadel-23065.herokuapp.com/)
* [API Repo](https://github.com/dontbin/project-3-api)


## Technologies Used
1. Node express
2. Javascript
3. MongoDB
4. Mongoose
5. Heroku

## Planning Process
1. De-Scope from a multi-question survey to a single question survey.
2. Use single response in form of 0 to 5 choice.
3. Commited to using non-relational format (sub-documents)
4. Set up schema for DB.
5. Set up basic front end that allows us to create, answer, list, and delete surveys.
6. Change auto generated route methods to give back the proper response.

## Unsolved problems
1. Does not update live when other users are voting on surveys. Must refresh page to get latest data.
2. At times when being the first answer on a survey the graph wont show up.
3. Graphical differences between different browsers coul be ironed out.

## ERD and wireframes
https://imgur.com/a/K26OMgX

## Routes and Methods
* POST method for route '/sign-up'
* POST method for route '/sign-in'
* PATCH method for route '/change-password'
* DELETE method for route '/sign-out'

* GET method for route '/surveys'
* GET method for route '/surveys/:id'
* POST method for route '/survey'
* PATCH method for route '/surveys/:id'
* DELETE method for route '/surveys/:id'
