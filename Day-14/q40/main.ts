 (()=>{
 const make_album = (artist: string, title: string, tracks?: number ) =>{
const album = {
  artist: artist,
  title: title,
  tracks: tracks
  }

if(tracks){
album["tracks"] = tracks

}
  return album
}


console.log(make_album("eminem", "recovery"))
console.log(make_album("drake", "scorpion"))
console.log(make_album("jay z", "4:44", 10))
   
  
   

 })()