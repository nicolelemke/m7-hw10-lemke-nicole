// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textareaInput = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE


//name
//var nameValue = document.cookie.split('=')
//ameSpan.textContent = nameValue[0]

var nameValue = document.cookie || 'name=Your Name'
nameSpan.textContent = nameValue
  .split('=')[1]


//textarea
var textarea = localStorage.getItem('notes')
textareaInput.textContent = textarea



formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE
  
  //name
  //document.cookie = nameSpan.textContent

  document.cookie = 'name=' + nameSpan.textContent
  //nameSpan.textContent = nameValue


  //textarea
  textarea = textareaInput.value
  localStorage.setItem('notes', textarea)


  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

  textareaInput.value = ""
  localStorage.clear();


  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp