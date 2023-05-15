
let languages = ["JavaScript", "Python", "Java", "C#", "C++", "Ruby", "Go", "Swift", "PHP", "Rust"];


let accumulator = [];
for (let i = 0; i < languages.length; i++) {
    if (languages[i].length > 3) {
        accumulator.push(languages[i]);
    }
}

console.log(accumulator);
