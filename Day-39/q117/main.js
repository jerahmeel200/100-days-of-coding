const evaluateGrade = (grade) => {
  switch (grade) {
    case "A" :
    console.log(" ")
    break
    case "B" :
    console.log("Good")
    break
    case "C" :
    console.log("Fair")
    break
    case "E" :
    console.log("Poor")
    break
    case "F" :
    console.log("Fail")
    break
    default:
      console.log("invalid grade");
      break;
  }
};

evaluateGrade("Excellent");
