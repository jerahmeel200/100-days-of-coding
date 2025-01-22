(() => {
 function findCanadaCapital(map: Map<string, string>) {
if(map.has("canada")){
  console.log(`${map.get("canada")}`)
}

 }
  
const countriesCapital = new Map<string, string >()

countriesCapital.set("nigeria", "abuja")
  countriesCapital.set("france", "france")
  countriesCapital.set("japan", "tokyo")



findCanadaCapital(countriesCapital)
})();
 
