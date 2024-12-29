 

 const make_album = (artist, title, tracks = null)=>{
    const album = {
      artist: artist,
      title: title,
    }


    if (tracks) {
      album["tracks"] = tracks;
    }

    return album
 }

 const abum1 = make_album('The Beatles', 'Abbey Road', 17)


 console.log(abum1)

 
