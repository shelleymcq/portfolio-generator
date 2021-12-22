const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter your first name.'
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
      message: 'Enter your email address.'
    }
  ])
  .then((response) => 
    console.log(response)
  );