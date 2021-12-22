const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter your first name.',
      validate(answer) {
        if(!answer) {
          return "Please provide your first name."
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter your last name.'
    },
    {
      type: 'input',
      name: 'city',
      message: 'Enter your city, state.'
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Enter a brief bio.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github url'
    },
    {
      type: 'input',
      name: 'linkedIn',
      message: 'Enter your LinkedIn url.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
      // could improve by used  a regex to validate valid email https://pakstech.com/blog/inquirer-js/
      validate(answer) {
        if(!answer) {
          return "Please provide an email address."
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the name of your project.'
    }
    ,
    {
      type: 'input',
      name: 'projectImage',
      message: 'Enter the url for a thumbnail image of the project.'
    },
    {
      type: 'input',
      name: 'projectInfo',
      message: 'Enter a brief 1-2 sentence description of the project.'
    },
    {
      type: 'input',
      name: 'projectLink',
      message: 'Enter a url for the project repo OR the deployed app.',
      validate(answer) {
        if(answer.includes(' ')) {
          return "Please provide only one url."
        }
        return true
      }
    }

  ])
  .then((response) => 
    console.log(response)
  );