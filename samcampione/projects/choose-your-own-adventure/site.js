var mainCharacter = {}
var supportingCharacter = {}
var theStory = {}
var theResponse
var promptResult
var storyText
var questionText


// var getInput = function(promptText) {
//     theResponse = prompt(promptText);
// }

var asdf = function () {
    var a=1

}
var updateOutput = function (input) {
  document.querySelector('#output').textContent = input
}

var asdf = function () {
  var a = 1

}

mainCharacter.name = prompt("Main character's name")

supportingCharacter.name = prompt("Supporting character's name")

storyText = "You are walking with " +
  supportingCharacter.name +
  " along a path in the woods." +
  "  You come to a fork in the path. "

console.log(storyText);

updateOutput(storyText);

questionText = "Which direction would you like to go ? ('Left' or 'Right')";

setTimeout(function() {
  promptResult = prompt(questionText)
}, 1000);

if (promptResult.toUpperCase() === "LEFT") {
  updateOutput('You chose to go Left')
} else if (promptResult.toUpperCase() === "RIGHT") {
  updateOutput('You chose to go Right')
}
