
//----------------------------------------Info needed for Readme----------------------------------------


// --------------------------------------install all dependencies - inquire and file system----------------------------

const inquirer = require('inquirer');
//testing fs append working 
console.log("Node Running")
const fs = require("fs");
var badge

//--------------------------------------------- Get input from user using inquirer package--------------------------------


inquirer
  .prompt([
    {
      name: 'title',
      message: 'What is the title of your project?'
    },

    {
        name: 'description',
        message: 'Please provide a description of your project '
    },
    {
        name: 'installation',
        message: 'Please provide a installation instructions for your project '
    },
    {
        name: 'usage',
        message: 'Please explain how to use your project '
    },
    {
        name: 'contribute',
        message: 'Please explain how people can contribute to your project '
    },
    {
        name: 'test',
        message: 'Please explain how the projected is tested '
    },
    // {
    //     name: 'licence',
    //     message: 'what kind of licence does the project have? '
    // },
    {
        name: 'licence',
        type: "list",
        choices:["MIT","GPL","IPL"],
        message: 'what kind of licence does the project have? '
    },
    {
        name: 'gitName',
        message: 'what is your github username? '
    },
    {
        name: 'email',
        message: 'what is your email address? '
    },

// -------------------------------add answers to variables --------------------
  ])
  .then(answers => {
    //console.log('Your fav reptile is ', answers.faveReptile);
    const title = answers.title;
    const description = answers.description;
    const installation = answers.installation;
    const usage = answers.usage;
    const contribute = answers.contribute;
    const test = answers.test;
    const licence = answers.licence;
    const gitName = answers.gitName;
    const email = answers.email;
   
    //----------------------------Create markdown text with answers from user---------------------------------------
    
    
    if (licence ==="MIT") {
        badge = "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      } else if (licence === "GPL") {
        badge = "[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      } else {
        badge = "[License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      }



   
// const badge = "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

  


    const readmeText = 
    `

# [!${badge}

# ${title}
## CONTENTS

- [Description](#description)
- [Installation](#installation)
- [How to Use Use](#how-to-use-use)
- [How to contribute](#how-to-contribute)
- [Testing](#testing)
- [Licence](#licence)
- [Github Name](#github-name)
- [Email](#email)


## Description
${description}
## Installation
${installation}
## How to Use Use
${usage}
## How to contribute
${contribute}
## Testing
${test}
## Licence
${licence}
## Questions
## Github Name
${gitName}
## Email
${email} `
 //--------------------- Create readme markdown file using the fs.writeFile method-----------------------

    fs.writeFile("SampleReadMe.md", readmeText, (err) => {
        if (err) {
        console.log(err);
        }
        // else {
        // // Get the file contents after the append operation
        // console.log("\nFile Contents of file after append:",
        //     fs.readFileSync("example_file.txt", "utf8"));
        // }
    });


  });