import {nounsSingular} from "./nounssingular.js";
import {verbsFirstForm} from "./verbsfirstform.js";
import {adjectives} from "./adjectives.js";
import {adverbs} from "./adverbs.js";
import {names, pronouns} from "./names.js";

const buttons = document.querySelectorAll(".btn-init");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        assembleSentence(e.target.getAttribute("data-type"));
    })
}

function assembleSentence(type) {
    let targetCell = document.querySelector(`#${type}`);
    let noun = getRandomWord(nounsSingular);
    let verb = getRandomWord(verbsFirstForm);
    let adjective = getRandomWord(adjectives).toLowerCase();
    let adverb = getRandomWord(adverbs).toLowerCase();
    let person = determineSubject(getRandomWord(names), getRandomWord(pronouns));
    let tpVerb = generateThirdPersonVerb(verb);

    if(type == "FPshort") {
        targetCell.textContent = `I ${verb} ${determineAorAn(noun)} ${noun}`;
    }
    else if(type == "FPmedium") {
        targetCell.textContent = `I ${verb} ${determineAorAn(adjective)} ${adjective} ${noun}`;
    }
    else if(type == "FPlong") {
        targetCell.textContent = `I ${adverb} ${verb} ${determineAorAn(adjective)} ${adjective} ${noun}`;
    }
    else if(type == "TPshort") {
        targetCell.textContent = `${person} ${tpVerb} ${determineAorAn(noun)} ${noun}`;
    }
    else if(type == "TPmedium") {
        targetCell.textContent = `${person} ${tpVerb} ${determineAorAn(adjective)} ${adjective} ${noun}`;
    }
    else if(type == "TPlong") {
        targetCell.textContent = `${person} ${adverb} ${tpVerb} ${determineAorAn(adjective)} ${adjective} ${noun}`;
    }
}

function getRandomWord(database) {
    return database[Math.floor(Math.random() * database.length)];
}

function generateThirdPersonVerb(verb) {
    if(verb.charAt(verb.length -1) ==  "y") {
        return verb.substring(0, verbsFirstForm.length -1).concat("ies");
    }
    else if(verb.charAt(verb.length -1) == "s") {
        return verb.concat("es");
    }
    else {
        return verb.concat("s");
    }
}

function determineAorAn(followingWord) {
    let followingWordUpper = followingWord.toUpperCase();
    if (
        followingWordUpper.charAt(0) == "A"
        || followingWordUpper.charAt(0) == "E"
        || followingWordUpper.charAt(0) == "I"
        || followingWordUpper.charAt(0) == "O"
        || followingWordUpper.charAt(0) == "U"
    ) {
        return "an";
    }
    else {
        return "a";
    }
}

function determineSubject(name, pronoun) {
    if(Math.floor(Math.random() * 2) == 0) {
        return name;
    } 
    else {
        return pronoun;
    }
}
