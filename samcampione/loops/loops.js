var targetDiv
var targetHtml
var filterType
var displayTypes = ["Fizz", "Buzz", "FizzBuzz", "All"]
var i


var evenOdd = function() {
  targetDiv = document.querySelector('#outputDiv1')
  targetHtml = "<ul>"
  i = 15

  while (i > 0) {
    if (i % 2 === 0) {
      targetHtml += '<li>The number ' + i + ' is Even</li>'
    } else {
      targetHtml += '<li>The number ' + i + ' is Odd</li>'
    }
    i--
  }

  targetHtml += '</ul>'
  targetDiv.innerHTML = targetHtml

}




//
//Load the FizzBuzz list.  filterType="All" on page load.
//
var fizzBuzzNew = function(filterType) {
  targetDiv = document.querySelector('#outputDiv2')
  targetHtml = "<ul>"
  var stop = 100
  i = 1


  while (i < stop) {
    switch (true) {
      case (i % 3 === 0 && i % 5 === 0) && (filterType === "FizzBuzz" || filterType === "All"):
        targetHtml += '<li class="fizz-buzz">' + i + ' FizzBuzz</li>'
        break;
      case (i % 3 === 0 && (filterType === "Fizz" || filterType === "All")):
        targetHtml += '<li class="fizz">' + i + ' Fizz</li>'
        break;
      case (i % 5 === 0 && (filterType === "Buzz" || filterType === "All")):
        targetHtml += '<li class="buzz">' + i + ' Buzz</li>'
        break;
      case (filterType != "All"):
        break;
      default:
      targetHtml+='<li>'+i+'</li>'
    }


    i++
  }

  targetHtml += '</ul>'

  targetDiv.innerHTML = targetHtml
}

//
//Radio buttons to filter the FizzBuzz list
//
var loadButtons = function()
{
    targetDiv = document.querySelector('.app-controls')
    targetHtml='<form class="fizz-buttons">'

    for (i = 0; i < displayTypes.length; i++)
    {
        var tmp=displayTypes[i]
        targetHtml+='<input '
        +' type="radio"'
        +' name="filterType"'
        +' onClick="filterFizzBuzz(this.value)"'
        +' value="'+tmp+'">'+tmp+"<br>"
    }
    targetHtml+='</form>'
    targetDiv.innerHTML=targetHtml
}

//
//Filter the FizzBuzz list
//
var filterFizzBuzz = function(filterType) {
  fizzBuzzNew(filterType)
}



loadButtons()

evenOdd()

fizzBuzzNew("All")
