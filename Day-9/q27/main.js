(function () {
// the version that runs the if block
  var alienColor = "green"

  if(alienColor === "green"){
    console.log("You have just earned 5 points for shooting the alien.")
  }else{
    console.log("You have earned 10 points")
  }

  
// the version that runs the else block
  alienColor = "red"
  if(alienColor === "green"){
    console.log("You have earned 5 points for shooting the alien.")
  }else{
    console.log("You have earned 10 points")
  }
})();
