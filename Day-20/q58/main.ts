(() => {
  const mutipleScores = (...scores: number[])=>{
    
    const averageGrade  = scores.reduce((total, score)=> total + score, 0)/scores.length

    return averageGrade

     }
    
    console.log(mutipleScores(1, 2, 3, 4, 5, 6, 7, 9, 10)
) 
  
   
    
})();
