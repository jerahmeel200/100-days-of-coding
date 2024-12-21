(function () {
    var guests = ["jerahmeel", "james", "kelly"];
    // the  push method adds larry to the end of the  array list
    guests.push("larry");
    // the unShift() method adds charlse to the start of the  array 
    guests.unshift("charlse");
    // the splice method add joshua to the middle of the array 
    guests.splice(guests.length / 2, 0, "joshua");
    // this prints out the message 
    guests.forEach(function (guest) {
        console.log("hello ".concat(guest, " will you attend my dinner party?"));
    });
})();
