// Write a script that prints the first argument passed to it:

// If no arguments are passed to the script, print “No argument”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use length

 let input = prompt("Enter your arguments (separated by spaces):");

    if (!input || input.trim() === "") {
        console.log("No argument");
    } else {
        let args = input.trim().split(/\s+/);
        console.log(args[0]);
    }
    print(input)