var targetDiv
var targetHtml
var filterType
var theName
var theIndex

var game = {

  //possible choices for each player
  choices: {
    rock: {
      name: "Rock",
      index: 1,
      beatsIndex: 3
    },
    paper: {
      name: "Paper",
      index: 2,
      beatsIndex: 1
    },
    scissors: {
      name: "Scissors",
      index: 3,
      beatsIndex: 2
    }
  },

  //list of players
  players: {
    user: {
      name: "You",
      currentOptionName: "",
      currentOptionIndex: 0
    },
    computer: {
      name: "Computer",
      currentOptionName: "",
      currentOptionIndex: 0
    }
  }


}

var i

var numberOfOptions = Object.keys(game.choices).length


//
//Radio buttons for choice of R/P/S
//
var loadRadioButtons = function() {
  targetDiv = document.querySelector('.app-controls')
  targetHtml = '<form class="rps-radio-set">'


  for (i = 0; i < numberOfOptions; i++) {
    // theIndex = Object.keys(game.choices)[i]
    // theName = game.choices[theIndex].name
    theName=Object.keys(game.choices)[i]
    targetHtml += '<input class="rps-buttons" ' +
      ' type="radio"' +
      ' name="rpsTypes"' +
      ' onClick="userOption(this.value)"' +
      ' value="' + theName + '">' + theName + "<br>"
  }
  targetHtml += '</form>'
  targetHtml += '<input ' +
    ' type="button" ' +
    ' class="goButton" ' +
    ' onClick="compareOptions()" ' +
    ' value="Go!">'
  targetDiv.innerHTML += targetHtml

}

var userOption = function(optionName) {
  targetDiv = document.querySelector('.output-player')
  targetHtml = optionName
  // targetDiv.innerHTML = optionName + ' ' + game.choices[optionName].index
  game.players.user.currentOptionName=game.choices[optionName].name
  game.players.user.currentOptionIndex=game.choices[optionName].index
  targetDiv.innerHTML=game.players.user.currentOptionName+" "+game.players.user.currentOptionIndex

}

var computerOption = function() {
    var thisNum=Math.floor(Math.random()*3+1)
    game.players.computer.currentOptionIndex=thisNum
    // game.players.computer.currentOptionName=game[]
}
var compareOptions = function() {
    targetDiv=document.querySelector('.output-player')

}

loadRadioButtons()
