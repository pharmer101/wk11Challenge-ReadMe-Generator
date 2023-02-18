
//----------------------------------------Info needed for Readme----------------------------------------


// --------------------------------------install all dependencies - inquire and file system----------------------------

const inquirer = require('inquirer');
//testing fs append working 
console.log("Node Running")
const fs = require("fs");
// console.log("logfile being created")
// fs.appendFile("example_file.txt", "World", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       // Get the file contents after the append operation
//       console.log("\nFile Contents of file after append:",
//         fs.readFileSync("example_file.txt", "utf8"));
//     }
//   });
//--------------------------------------------- set up inputs questions from inquery---------------------------------

//*** TO BE ADDED TO SECTIONS IN DOC */

// Title of project
// Description of project
//installation instructions
//usage instructions
//contribution guidelines
//test instructions
//Licence type (turns into a badge)
//github username
//email address

// const title = process.argv[2];
// const description = process.argv[3];
// const instalInstruct = process.argv[4];
// const contribute = process.argv[5];
// const testInstruct = process.argv[6];
// const licenceType = process.argv[7];
// const gitUser = process.argv[8];
// const email = process.argv[9];



//--------------------------------------------------print out answers to REAMDME-----------------------------------------

inquirer
inquirer
//   .prompt([
//     {
//       name: 'faveReptile',
//       message: 'What is your favorite reptile?'
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.faveReptile);
//   });

  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
  ])
  .then(answers => {
    //console.log('Your fav reptile is ', answers.faveReptile);
    const favReptile = answers.faveReptile;
    console.log(favReptile);

        fs.appendFile("example_file.txt", favReptile, (err) => {
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