const grades = [1, 2, 3, 4, 5, 6, 7, 9, 10]

const averageGrade  = grades.reduce((total, grade)=> total + grade, 0)/grades.length


console.log(averageGrade)

 
