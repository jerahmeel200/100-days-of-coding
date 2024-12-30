(function () {
    var magicians = [
        "Gandalf",
        "Dumbledore",
        "Merlin",
        "Houdini",
        "Potter",
    ];
    var make_great = function (magicians) {
        var greateMagicians = [];
        magicians.forEach(function (magician) {
            greateMagicians.push("".concat(magician, ", The Great"));
        });
        return greateMagicians;
    };
    var show_magicians = function (magicians) {
        magicians.forEach(function (magician) {
            console.log(magician);
        });
    };
    var modifiedArray = make_great(magicians.slice());
    console.log("Original magicians:");
    show_magicians(magicians);
    console.log("Great magicians:");
    show_magicians(modifiedArray);
})();
