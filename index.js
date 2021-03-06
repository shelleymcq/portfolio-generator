const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// ASCII art
const figlet = require('figlet');

const generateHTML = require('./utils/generateHTML');

const questions = [
    {
      type: 'confirm',
      name: 'imagesAdded',
      message: 'Have you added a headshot and project image to the assets folder?'
    },
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
      name: 'devHeadshot',
      message: 'Enter the file name of your headshot (ex: headshot.png).'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github url.',
      validate(answer) {
        if(answer.includes(' ')) {
          return "Please provide a valid url."
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'linkedIn',
      message: 'Enter your LinkedIn url.',
      validate(answer) {
        if(answer.includes(' ')) {
          return "Please provide a valid url."
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
      validate(answer) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(answer)) {
          return "Please provide a valid email address."
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
      message: 'Enter the file name of your project thumbnail (ex: project.jpg).'
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

  ]

  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  // Function to initialize app
  function init() {
    console.log(figlet.textSync('welcome', {horizontalLayout: 'full'}));
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating HTML...');
      writeToFile('index.html', generateHTML({ ...inquirerResponses }));
    });
  }
  
  init();