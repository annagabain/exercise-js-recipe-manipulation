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


//---------------------------------------------------------------------------------------------------

//------------------------------   Exercises on DOM Manipulation Part 1   ---------------------------

//---------------------------------------------------------------------------------------------------

const recipeName = document.getElementById("recipe-name");
console.log("1. The Recipe Name is:", recipeName.textContent);


console.log(
  "2. HTML tag used to display the Recipe name is:",
  recipeName.tagName
);


const description = document.querySelector("p.description");
const theFontSize = getComputedStyle(description).fontSize;
console.log(
  '3. the font size of the paragraph tag with the class "description" is:',
  theFontSize
);


const imageAlt = document.querySelector("img");
console.log("4. The value of the alt atrribute on the image is:", imageAlt.alt);


const imageElement = document.querySelector("img");
const imageUrlObject = {
  url: imageElement.src,
  height: imageElement.naturalHeight,
  width: imageElement.naturalWidth,
};
console.log("5. The dimensions and the url of the image are:", imageUrlObject); 
//the output format
// {
//     url: string
//     height: number,
//     width: number,
//   }


const pasteIngredients = document.querySelector('ul.ingredients-list-paste')
const pasteIngredientsCount = pasteIngredients.querySelectorAll('li').length
console.log(`6. The paste has  ${pasteIngredientsCount} ingredients`);



let theFourthIngredient = pasteIngredients.querySelectorAll('li')[3].innerText
console.log(
  "7. The forth element in the list containing the ingredients for the paste is:", theFourthIngredient
);




// "8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this: "
// {
//     order: number;
//     text: instruction;
//   }
const theInstructions = document.querySelector('ol.instructions-list');
console.log('type of theInstructions is an-', typeof theInstructions)
console.log('theInstructions:', theInstructions)
const theInstructionsObject = theInstructions.querySelectorAll('li');

// test to print order and element
// const theInstructionsList = theInstructionsObject.forEach((element, order) => {console.log(`{order: ${order+1}; text: ${element.innerHTML};}`)});

// solution 1
// const theInstructionsList = Array.from(theInstructionsObject).map((element, order) => ({
//     order: order + 1,
//     text: element.innerHTML.trim(),
// }));


// solution 2
const theInstructionsList = [];
theInstructionsObject.forEach((element, order) => {
    theInstructionsList.push({
        order: order + 1,
        text: element.innerHTML.trim(),
    });
});

console.log(
  "8. Instructions array of objects: "
, theInstructionsList);



