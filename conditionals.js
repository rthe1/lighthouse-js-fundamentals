//Weather Example

const temperature = 12;
// if the temperature = 16 or more console.log("Short sleeves are fine.");
// if the temperature = -1 or less console.log("Make sure you pick out a scarf!");

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//Citizen Example

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//Freeze OR Boil Example

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}