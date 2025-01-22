

const findCanadaCapital =(map)=>{
 if(map.has("canada")){
    console.log(`${map.get("canada")}`)
 }
 
  
}

const countriesCapital = new Map()

countriesCapital.set("canada", "ottawa")
countriesCapital.set("nigeria", "abuja")
countriesCapital.set("france", "paris")





findCanadaCapital(countriesCapital)