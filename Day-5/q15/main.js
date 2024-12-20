(function () {
    (function () {
        var guests = ["jerahmeel", "james", "kelly"];
        // single out the guest
        var uneableToAttend = "kelly";
        console.log("".concat(uneableToAttend, " was not able to make it to the dinner party"));
        // replace guest
        var newGuest = "jerry";
        guests[guests.indexOf(uneableToAttend)] = newGuest;
        // new message 
        guests.forEach(function (guest) {
            console.log("hello ".concat(guest, " will you attend my dinner party?"));
        });
    })();
})();
