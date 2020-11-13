import{
    strucHave, linkHave,
    strucSimple, linkSimple,
} from "./structure.js";

let targetCell = document.querySelector("#simple");
let initButton = document.querySelector(".btn-init")
let sentence;
let structure = strucSimple;
let link = linkSimple;

initButton.addEventListener("click", init);

function init() {
    sentence = "";
    getRandomWord("init");
}

function getRandomWord(key) {
    let val = Math.floor(Math.random() * structure[key].length);
    let newKey = structure[key][val];
    let database = link[newKey];
    let word = database[Math.floor(Math.random() * database.length)];
    
    word = word.toLowerCase();

    generate(newKey, word);

}

function generate(key, value) {

    if (value == ".") {
        sentence = sentence.concat(`${value}`)
        conclude(sentence);
    }
    else if(value == ",") {
        sentence = sentence.concat(`${value}`)
        getRandomWord(key);
    }
    else if(value == "") {
        sentence = sentence.concat(`${value}`)
        getRandomWord(key);
    }
    else {
        sentence = sentence.concat(` ${value}`)
        getRandomWord(key);
    } 
}

function conclude(sentence) {
    // remove space at index 0
    sentence = sentence.slice(1);

    // capitalize first char
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    console.log(`FINAL SENTENCE: ${sentence}`);
    
    targetCell.textContent = sentence;
}
