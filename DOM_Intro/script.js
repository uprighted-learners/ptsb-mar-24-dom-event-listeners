/*
    Select all the p tags that exist on the HTML document
    using getElementsByTagName
*/
let allTheParagraphs = document.getElementsByTagName("p");
console.log(allTheParagraphs);
// allTheParagraphs will be of HTMLCollection
// HTMLCollection is similar to an array but not identical.
let firstParagraph = allTheParagraphs[0]; // Similarity: Accessing by index
console.log(firstParagraph);

// You can put the value of an id, class, tag, etc into a variable and pass that into your query function
const id = "article"; // set "article" to variable 'id'
let article = document.getElementById(id); // pass 'id' into getElementById
console.log("article", article);

/*
    Another method to gather multiple elements: querySelectorAll
    querySelectorAll returns a NodeList.
    HTMLCollection and NodeList are two different elements
    They are similar to arrays but are not arrays.
*/
// querySelectorAll and querySelector use the identifier. Think css: .class, #id, tag
let elementsWithButtonClass = document.querySelectorAll(".button");
console.log(elementsWithButtonClass);

/*
    Gather HTML elements by their class name: getElementsByClassName
*/
let elementsByClassName = document.getElementsByClassName("button");
console.log(elementsByClassName);

/*
    Gather HTML element using querySelector. If you have multiple elements that are able to be selected,
    this will gather only the first element. The end result is the same as getElementById
*/
let firstElementWithButtonClass = document.querySelector(".button");
console.log(firstElementWithButtonClass);

// Advantage of querySelectorAll is to use selectors (similar to css selectors)
let element = document.querySelectorAll("main div.preview > p");
console.log(element);

// Get header element by id
let header = document.getElementById("header");
header.textContent = "Changed Header"; // Change textContent property to "Changed Header"

// Gather target html element with id 'someElement'
let target = document.getElementById("someElement");
// Create new paragraph tag
let paragraph = document.createElement("p");
// Populate textContent property with text on newly created paragraph tag
paragraph.textContent = "If you cannot solve a problem, then there is an easier problem you can solve: find it. - George Polya";
// Add paragraph as a child of the target div
target.appendChild(paragraph);

/*
    For both HTMLCollection and NodeList, you can convert these
    to your standard Array using:
    - Array.from(HTMLCollection)
    - [...NodeList]
*/
// Method 1: Array.from()
let arrayFromHTMLCollection = Array.from(element);
arrayFromHTMLCollection.push("Hello!");
console.log(arrayFromHTMLCollection);

// Method 2: [...]
let arrayFromHTMLCollection2 = [...element];
arrayFromHTMLCollection2.push("Hey!");
console.log(arrayFromHTMLCollection2);
