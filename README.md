# The DOM

- DOM stands for Document Object Model
  - Document - HTML page
  - Object - HTML elements and comments that the browser calls **Nodes** (not like node.js)
  - Model - Arranging them to make sense
- The DOM is in the browser
  - Different browsers mean different DOMs.

> We can access the DOM in JavaScript with the built-in `document` object.

---

## The BOM

- BOM stands for Browser Object Model
- the global `window` variable has lots of nice properties
  - `window.location`
  - `window.navigator`
  - `window.history`
  - `window.document` -- The DOM exists in the Window
- And methods
  - `open()`, `close()`
  - `moveTo()`, `sizeTo()`
  - `alert()`, `prompt()`, `confirm()`
  - `setTimeout()`, `setInterval()`

---

## `window` vs. `document`

- `document` is the page
- `window` is the browser itself

---

## The Global `document`

The current page is always available via the _global variable_ named `document`.

In addition to providing many useful _functions_, it also provides some _properties_:

| Property                                         | Description                                                    |
| ------------------------------------------------ | -------------------------------------------------------------- |
| `document.URL`                                   | The URL of the current page, as a String.                      |
| `document.location`                              | The URL of the current page, in the form of a Location object. |
| `document.location = 'http://example.com'`       | Causes the browser to go that web page.                        |
| `document.title`                                 | The _title_ of the document/webpage.                           |
| `document.title = 'Facebook - 1 unread message'` | Changes the _title_ of the document.                           |

<https://developer.mozilla.org/en-US/docs/Web/API/Document>

---

## The Global `window`

All of the global "built-in" functions and variables you've used and made thus far actually exist in the `window` object.

```javascript
window.x = 7;
x === 7; // true
y = 9;
window.y === 9; // works in reverse too

parseInt("123"); // same
window.parseInt("123"); // thing
```

---

## Find Elements within the DOM

```js
let allTheParagraphs = document.getElementsByTagName("p");
let firstParagraph = allTheParagraphs[0];

let article = document.getElementById("article");

let elementsWithButtonClass = document.querySelectorAll(".button");

let firstElementWithButtonClass = document.querySelector(".button");
```
---

## Include JavaScript within HTML

```html
<script>
  var message = "Shazam!";
  alert(message);
</script>

<script src="script.js">
```

The `script` tag may appear in the `head` or in the `body`. Scripts are executed in top-to-bottom order.

> HINT: to be sure that your code executes after the page has been fully loaded, put your `<script>` tags at the _bottom_ of the `<body>` section.

---

## DOM Queries

To access elements on the page from JavaScript, there are special methods on the `document` object called DOM queries

```js
document.getElementsByTagName()
document.getElementsByClassName()
document.getElementById()
document.querySelector()
document.querySelectorAll()
```

---

## Finding an Element by ID

If an element has an `id` attribute, you can get a variable to point to that element with a single line of code:

```js
let element = document.getElementById(id);

console.log(element);
```

[MDN - getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

---

## Finding an Element by CSS Selector

Select elements from the DOM the same way you would in CSS to apply styles.

```js
let element = document.querySelector("main div.preview > p");
```

This returns the first `<p>` that is a direct child of any `<div class='preview'>` that is in `<main>`.

[MDN - querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

---

## Using an Element

After finding an element using `getElementById`, start attaching behavior, or modifying its attributes.

```js
let header = document.getElementById("header");
let text = header.textContent;
```

There is also a property called `innerText` but it's confusing and implemented differently in different browsers.

[MDN - textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

---

## Adding HTML

```js
document.write("<p id='message'>hi</p>");

var message = document.getElementById("message");
message.innerHTML = "<b>bye</b>!";
```

Preferred:

```js
let target = document.getElementById("someElement");

let paragraph = document.createElement("p");
paragraph.textContent =
  “If you cannot solve a problem, then there is an easier problem you can solve: find it.
  - George Polya” ;

target.appendChild(paragraph);
```

---

## Nodes vs Elements

The Element class inherits from the Node class, but that does not mean they are identical.

- [MDN - Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
- [MDN - Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

For instance, `attributes` is a property of an Element, but `childNodes` is a property of a Node.

---

## Other Node Types

Elements are the most common Nodes; here are some others kinds of Nodes:

- `Document`, `Element`, `Text`, `Comment`, `CDATASection`, `ProcessingInstruction`, `DocumentFragment`, `DocumentType`, `Notation`, `Entity`, `EntityReference`

All of them have their own properties that are specific to them and not part of the general Node class.

---

## Finding many elements

In addition to getting a _single_ element by its `id` or a CSS selector, you can also ask the document to give _all_ elements that match a certain criterion.

by _CSS Class_ name

```js
let elements = document.getElementsByClassName("profile-picture");
```

by _Element_ name

```js
let elements = document.getElementsByTagName("h2");
```

by _CSS Selector_ expression

```js
let elements = document.querySelectorAll("h2.preview > p");
```

---

## HTML Collections

DOM queries that can target multiple elements always return a data structure called an _HTML Collection_. This is an array like object, but it _is not an array_. It will be an ordered list with a `length` property, but has no methods attached to it.

We can turn it into an array to be able to use Array methods with it.

- `Array.from(collection)`
- use the _spread_ operator `[...collection]`

> `collection` is a pretend variable name here used to represent the HTML collection. The word "collection" has no special meaning in JavaScript.

---

# Event Listeners

In the first we discussed, listening for events and handling events that have occurred.

- All HTML elements can listen for certain events that are relevant to the element
  - Buttons listen for `onclick`
  - Forms listen for `onsubmit`
- DOM Nodes also have an `addEventListener` method to extend this feature to handle custom circumstances.

---

## Event Listeners Cont.

[Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
[addEventListener Documentation](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

> Explore the above links. Be prepared to share what you found with the group.

---

## Handling Events

An **event handler** is what you want the computer to do when an event happens.

Before, we discussed kinds of events, like `onclick`.
Now, we are discussing _what to do_ when `onclick` occurs.

```js
// Grab the relevant element from the DOM
let button = document.getElementById("magic");
// Use addEventListener to tell button how to handle being clicked
button.addEventListener("click", () => {
  alert("Abracadabra!");
});
```

> NOTE: Using arrow functions for event handlers is a **good idea**, since they will restore `this` to the same object as when the listener was added.


## Referencing Event Handlers in Event Listeners

If you have already defined an event handler function, you can attach it by reference:

```html
<button type="button" id="magic">Magic</button>
<script>
  function sayMagicWord() {
    alert("Shazam!");
  }
  let button = document.getElementById("magic");
  button.addEventListener("click", sayMagicWord);
</script>
```

> NOTE: Why do we not invoke the function here? What does it mean to pass by reference?

---

## Event Handler Parameters

- The browser will always pass an [Event instance](https://developer.mozilla.org/en-US/docs/Web/API/Event) to your handler function as its first argument.
- To account for this, you'll often see `e` as the parameter
- Within `e` (the Event instance), there is a property called `target` -- `e.target`.
  - `target` represents the node the person interacted with -- where the `Event` occurred within the DOM.
  - Example: If you `click` a `button`, the `button` is the target of the `click` `event`.

---

```html
<button type="button" id="presto">Presto...</button>
<button type="button" id="abra">Abra...</button>
<script>
  var prestoButton = document.getElementById("presto");
  var abraButton = document.getElementById("abra");

  function sayMagicWord(event) {
    if (event.target === prestoButton) {
      alert("Change-o!");
    } else if (event.target === abraButton) {
      alert("Cadabra!");
    } else {
      alert("Shazam!");
    }
    console.log({ event }); // for debugging
  }

  prestoButton.addEventListener("click", sayMagicWord);
  abraButton.addEventListener("click", sayMagicWord);
</script>
```

---

## Event Bubbling & Capture

- Elements make their respective Event instances.
- After the Event instance is made, it moves up the DOM tree by default.
- This behavior can be changed by using `cancel` on the listener

```html
<div onclick="alert('outer div')">
  OUTER DIV
  <div onclick="alert('inner div')">
    INNER DIV
    <p onclick="alert('paragraph')">Paragraph</p>
  </div>
</div>
```
---

<img src ="https://res.cloudinary.com/btvca/image/upload/v1574445173/curriculum/eventflow_nyx1zw.svg" width="700px" alt="event flow diagram referenced in the docs">

---