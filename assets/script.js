// const keyword allows us to create variables that can't be reassigned a value

// const topics = "HTML, CSS, Git, Javascript";

/* console.log method is used to output a message to the web console by adding an argument

The word console refers to a test environment that developers use to check out their code. The second part the

.log() is a method, which means a set of instructions that can be executed by a computer. The log() method will 

output whatever we add inside the parantheses to the console. */

// console.log(topics);

/* const topic = "HTML";

if (topic === 'HTML') {
    console.log("Lets study HTML!")
} else if (topic === 'CSS') {
    console.log("Let's study CSS!")
} else if (topic === 'Git') {
    console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!")
} else {
    console.log('Please try again');
} */

/* An array is a single variable that is used to hold a group of data. Arrays are typically used to hold
that is related in some way. */

// In JavaScript and many other programming languages, arrays are zero indexed and sequential.

// 

const topics = ["HTML","CSS","Git","JavaScript"];

for(let i=0; i<topics.length;i++){
    console.log(topics[i]);
}
