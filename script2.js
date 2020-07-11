function deleteValues() {
  var publicResult = document.querySelectorAll(".classResultDiv");
  var i;
  for (i = 0; i < publicResult.length; i++) {
    publicResult[i].innerHTML = "";
  }
}

//20 SIDE DICE FUNCTION
function twentySideDiceRoll() {
    //Get dice result
    var result = Math.floor(20 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#twentySideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  //12 SIDE DICE FUNCTIONS
  function twelveSideDiceRoll() {
    //Get dice result
    var result = Math.floor(12 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#twelveSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }

  
  //10 SIDE DICE FUNCTIONS
  function tenSideDiceRoll() {
    //Get dice result
    var result = Math.floor(10 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#tenSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  //8 SIDE DICE FUNCTIONS
  function eightSideDiceRoll() {
    //Get dice result
    var result = Math.floor(8 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#eightSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  
  //6 SIDE DICE FUNCTIONS
  function sixSideDiceRoll() {
    //Get dice result
    var result = Math.floor(6 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#sixSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }

  
  //4 SIDE DICE FUNCTIONS
  function fourSideDiceRoll() {
    //Get dice result
    var result = Math.floor(4 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#fourSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
