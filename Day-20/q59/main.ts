(() => {
  const adder = (specialNum: number)   =>{
    return ( number: number)=>{
      return specialNum + number 
    }
  }
  
   const add20 = adder(20)

   console.log(add20(100))
    
})();
