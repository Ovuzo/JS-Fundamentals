// Write a script that prints a message depending of the number of arguments passed:

// If no arguments are passed to the script, print “No argument”
// If only one argument is passed to the script, print “Argument found”
// Otherwise, print “Arguments found”
// You must use console.log(...) to print all output
// You are not allowed to use var
// let request = prompt("Write something:");

// if (request == "") {
//     console.log("No argument found");
// } else {
//     let sentence = request.trim().split(/\s+/);
//     let wordcount = sentence.length;

//     if (wordcount === 1) {
//         console.log("Argument found");
//     } else {
//         console.log("Arguments found");
//     }
// }

// console.log(request);

const args = process.argv.slice(2); // Get command-line arguments (excluding "node" and filename)

if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}