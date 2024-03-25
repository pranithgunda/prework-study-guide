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

// Functions are reusable blocks of code that contain instructions to perform a specific task
// To create a function, we use function keyword, similar to how we used const or let keyword and give our function a unique name.
// A functions name is followed by parantheses(). 



const topics = ['HTML','CSS','Git','JavaScript'];

const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){

    for(let i=0; i<topics.length;i++){
        console.log(topics[i]);
    }

}

function selectTopic(){

    if (randomTopic === 'HTML') {
        console.log("Lets study HTML!")
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!")
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!")
    } else {
        console.log('Please try again');
    }

}
console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();
