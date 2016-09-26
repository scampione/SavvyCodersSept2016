var targetDiv
var targetHtml
var filterType
var theName
var theIndex
var computerChoice
var userWins
var actionType = "Go"
var randomMax = 3

// document.styleSheets[1].addRule('div[class^="output"]:before', 'content: attr(data-before);');
var game = {

  //possible choices for each player
  choices: {
    1: {
      name: "Rock",
      index: 1,
      beatsIndex: 3
    },
    2: {
      name: "Paper",
      index: 2,
      beatsIndex: 1
    },
    3: {
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
//Radio buttons for choice of R/P/S and 'Go/Reset' button
//
var loadButtons = function() {
  targetDiv = document.querySelector('.app-controls')
  targetDiv.innerHTML = ""
  targetHtml = '<form class="rps-radio-set">'


  for (i = 1; i < numberOfOptions + 1; i++) {
    // theIndex = Object.keys(game.choices)[i]
    // theName=Object.keys(game.choices)[i]
    theIndex = game.choices[i].index
    theName = game.choices[i].name
    targetHtml += '<input class="rps-buttons" ' +
      ' type="radio"' +
      ' name="rpsTypes"' +
      ' onClick="userOption(this.value)"' +
      ' value="' + theIndex + '">' + theName + "<br>"
  }


  targetHtml += '</form>'
  targetHtml += '<input ' +
    ' type="button" ' +
    ' class="goButton" ' +
    ' onClick="gameAction(actionType)" ' +
    ' value="' + actionType + '">'
  targetDiv.innerHTML += targetHtml


}

var loadActionButton = function() {

}

var userOption = function(optionNumber) {
  //
  // user made a selection, so start a new round (i.e. clear the 'computer' selection)
  //
  setComputerDiv("")
  targetDiv = document.querySelector('.output-user')
  targetHtml = optionNumber
  game.players.user.currentOptionName = game.choices[optionNumber].name
  game.players.user.currentOptionIndex = game.choices[optionNumber].index
  targetDiv.innerHTML = game.players.user.currentOptionName

  $('.output-computer, .output-user').removeClass('Before')
 
  $('.tie').css({
    'display': 'none'
  })


}

var setComputerDiv = function(theText) {
  targetDiv = document.querySelector('.output-computer')
  targetDiv.innerHTML = theText

}

var getComputerOption = function() {
  //
  // force a new choice for the computer
  //
  while (!computerChoice || (computerChoice === game.players.computer.currentOptionIndex)) {
    computerChoice = Math.floor(Math.random() * randomMax + 1)
  }

  game.players.computer.currentOptionIndex = computerChoice
  game.players.computer.currentOptionName = game.choices[computerChoice].name

  // show the computer's choice
  setComputerDiv(game.choices[computerChoice].name)

}

var gameAction = function(action) {
  if (action = "Go") {
    getComputerOption()
      // actionType = "Reset"

    userWins = game.choices[game.players.user.currentOptionIndex].beatsIndex === game.players.computer.currentOptionIndex
    userTies = game.players.user.currentOptionIndex === game.players.computer.currentOptionIndex

    // switch (true) {
    //   case userTies:
    //     $('.output-tie').css({
    //       'display': 'inline'
    //     })
    //     $('.win-computer, .win-user').css({
    //       'display': 'none'
    //     })
    //     break;
    //   case userWins:
    //     $('.win-computer, .output-tie').css({
    //       'display': 'none'
    //     })
    //     $('.win-user').css({
    //       'display': 'inline'
    //     })
    //     break;
    //
    //   default:
    //     $('.win-user, .output-tie').css({
    //       'display': 'none'
    //     })
    //     $('.win-computer').css({
    //       'display': 'inline'
    //     })
    // }
    switch (true) {
      case userTies:
        $('.tie').css({
            'display': 'inline'
          })
          // $('.output-computer:before, .output-user:before').attr({
          //   'data-before': ''
          // })
        $('.output-user').removeClass('Before')
        $('.output-computer').removeClass('Before')
        break;

      case userWins:
        // $('.output-computer:before').attr({
        //   'data-before': ''
        // })
        $('.output-computer').removeClass('Before')
        $('.tie').css({
          'display': 'none'
        })
        $('.output-user').addClass('Before')


        // $('.output-user:before').attr({
        //   'data-before': '\f00c'
        // })

        break;

      default:
        // (i.e. "computer wins")
        $('.output-user').removeClass('Before')
        $('.tie').css({
          'display': 'none'
        })
        $('.output-computer').addClass('Before')
    }


  } else {

    actionType = "Go"

  }
  // loadButtons()


}



loadButtons()
