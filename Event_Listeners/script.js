let button = document.getElementById("magic");
// Click on the button with class of "magic" and look at the console.
button.addEventListener("click", (e) => { // e <=> event instance
    // With each event instance, you have access to the event within the callback
    console.log(e);
    // alert("Abracadabra!")
})

// Select the button html elements using the getElementById selector function
const prestoButton = document.getElementById("presto");
const abraButton = document.getElementById("abra");

// Callback function for button
function sayMagicWord(event) {
    if (event.target === prestoButton) {
        alert("Change-o!");
    } else if (event.target === abraButton) {
        alert("Cadabra!")
    } else {
        alert("Shazam!")
    }
    console.log(event);
}

prestoButton.addEventListener("click", (event) => { // event <=> event instance. No need for this here.
    alert("Change-o!");
});
abraButton.addEventListener("click", sayMagicWord); // Attaching our sayMagicWord function as the callback function here

// Declaring three HTML elements gathered by their id
const outerDiv = document.getElementById("outerDiv");
const innerDiv = document.getElementById("innerDiv");
const paragraph = document.getElementById("paragraph");

outerDiv.addEventListener("click", () => {
    alert("outer div");
})

innerDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("inner div");
})

// paragraph is the element inside both innerDiv and outerDiv
// When paragraph is clicked, the event for innerDiv and outerDiv will be triggered
paragraph.addEventListener("click", (event) => {
    // To prevent this, we want to use this stopPropagation() method which will stop the event bubbling effect.
    event.stopPropagation();
    setInterval(timer, 1000);
})

// function to be executed for setInterval
function timer() {
    const date = new Date(); // Make new date using the built in Date class
    // Set innerHTML property of div with id 'timer' to the locale time string.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
    document.getElementById("timer").innerHTML = date.toLocaleTimeString();
}

// Gather form from HTML
let form = document.getElementById("form");
// Forms have a 'submit' event that occurs when the submit button is clicked
form.addEventListener("submit", (event) => {
    // preventDefault() will prevent the natural behavior of forms which is to refresh the page and clear out our inputs
    event.preventDefault();
    console.log(event)
    // Look at values given in our input fields in the console. 
    // firstName is the id of the input field of id 'firstName'
    // lastName is the id of the input field of id 'lastName'
    console.log(event.target.firstName.value);
    console.log(event.target.lastName.value);
})