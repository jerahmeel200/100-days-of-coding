const userName = ["admin", "eric", "terry"];

 userName.forEach((name)=>{
    if(name  == "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log("Hello " + name + ", thank you for logging")
    }
 })
 