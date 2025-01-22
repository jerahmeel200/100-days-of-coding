(() => {
  const ageGrade = (age: number): string =>{
    if(age < 13){
      return "child"
    }else if(age <=19){
      return "teenager"
    }else{
      return "adult"
    }
  }
  
  
  console.log(ageGrade(12))
  console.log(ageGrade(20))
  console.log(ageGrade(13))
  
})();
 
