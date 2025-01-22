const studentIds = new Map();

studentIds.set(1, "rebecca");
studentIds.set(2, "becky");
studentIds.set(3, "prince");

studentIds.forEach((student, id) => {
   console.log(`student ID: ${id} student name: ${student}`);
});



