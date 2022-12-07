const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: "input",
        message: "what is your name",
        name: "username",

    },
    {
        type: 'input',
        message: 'whats your location',
        name: "location",
    },
    {
        type: 'input',
        message: 'write a short bio',
        name: "bio",

    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL',
        name: 'LinkedIn',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL',
        name: 'GitHub',
    }
];

// const [] was next step

function temphtml(Data) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temp</title>
</head>
<body>
    <header>
        <h1>${username}</h1>
    </header>

    <h2>${location}</h2>
    <h2>${bio}</h2>
    <h2>${LinkedIn}</h2>
    <h2>${GitHub}</h2>

</body>
</html>`};

function writeToFile(fileName, Data) {
    fs.writeFile(fileName, Data, function (err) {
        if (err) {
            console.error(err)
            return
        }
        console.log('got here')
    })
};

function init() {
    inquirer.prompt(questions)
        .then(function (Data) {
            console.log(Data)
            writeToFile('index.html', temphtml(Data), function (err) {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('got here2')
            })
        })
}

init();