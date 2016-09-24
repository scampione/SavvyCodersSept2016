// var fName = prompt('First Name')
// var lName = prompt('Last Name')

var outputElement = document.querySelector('#greeting')
  // var userName
  //
  // if (!userName) {
  //     alert('Please enter a name')
  //     userName = prompt('Enter something')
  // }
  // output.innerHTML = '<h1> Hello ' + userName + '.</h1>'

var a = 2

if (a === 1) {
  outputElement.innerHTML = '<h1>a is "1"</h1> '
} else {
  if (a === 2) {
    outputElement.innerHTML = '<h1>a is "2"</h1> '
  } else {
    outputElement.innerHTML = '<h1>a is "other"</h1> '
  }
}
