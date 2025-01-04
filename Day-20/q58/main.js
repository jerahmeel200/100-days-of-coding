

const mutipleScores = (...scores)=>{
const averageScore = scores.reduce((total, score)=> total + score, 0) / scores.length
return averageScore
}


console.log(mutipleScores(1,3,4,5,6,7,8,9))
    
   
 


 

 
