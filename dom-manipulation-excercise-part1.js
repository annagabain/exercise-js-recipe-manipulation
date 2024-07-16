// const fs = require('fs');  
//INSTALL IN TERMINAL TO RUN WITH NODE
// const { JSDOM } = require('jsdom');

// // Read the HTML file
// fs.readFile('index.html', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }

//     // Create a JSDOM instance from the file content
//     const dom = new JSDOM(data);

//     // Access the document object
//     const document = dom.window.document;

//     // Get the element by ID and log its inner text
//     const recipeName = document.getElementById('recipe-name');
//     if (recipeName) {
//         console.log('The Recipe Name:', recipeName.textContent); // or recipeName.innerText
//     } else {
//         console.log('Element with ID "recipe-name" not found');
//     }
// });



const recipeName = document.getElementById('recipe-name');
console.log('The Recipe Name:', recipeName.textContent); // or recipeName.innerText

