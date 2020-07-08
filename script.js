//20 SIDE DICE FUNCTION
function twentySideDiceRoll() {
    //Get dice result
    var result = Math.floor(20 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#twentySideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  function twentySideDiceDelete() {
    var publicResult = document.querySelector("#twentySideDiceResult");
    publicResult.innerHTML = "";
  }
  
  //12 SIDE DICE FUNCTIONS
  function twelveSideDiceRoll() {
    //Get dice result
    var result = Math.floor(12 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#twelveSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  function twelveSideDiceDelete() {
    var publicResult = document.querySelector("#twelveSideDiceResult");
    publicResult.innerHTML = "";
  }
  
  //10 SIDE DICE FUNCTIONS
  function tenSideDiceRoll() {
    //Get dice result
    var result = Math.floor(10 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#tenSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  function tenSideDiceDelete() {
    var publicResult = document.querySelector("#tenSideDiceResult");
    publicResult.innerHTML = "";
  }
  
  //8 SIDE DICE FUNCTIONS
  function eightSideDiceRoll() {
    //Get dice result
    var result = Math.floor(8 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#eightSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  function eightSideDiceDelete() {
    var publicResult = document.querySelector("#eightSideDiceResult");
    publicResult.innerHTML = "";
  }
  
  
  //6 SIDE DICE FUNCTIONS
  function sixSideDiceRoll() {
    //Get dice result
    var result = Math.floor(6 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#sixSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  function sixSideDiceDelete() {
    //remove dice value from page
    var publicResult = document.querySelector("#sixSideDiceResult");
    publicResult.innerHTML = "";
  }
  
  //4 SIDE DICE FUNCTIONS
  function fourSideDiceRoll() {
    //Get dice result
    var result = Math.floor(4 * Math.random() + 1);
    
    //Display dice result on screen
    var publicResult = document.querySelector("#fourSideDiceResult");
    publicResult.innerHTML += "<p> " + result + " </p>";
  }
  
  function fourSideDiceDelete() {
    //remove dice value from page
    var publicResult = document.querySelector("#fourSideDiceResult");
    publicResult.innerHTML = "";
  }