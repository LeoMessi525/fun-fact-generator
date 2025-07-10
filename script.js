const facts = [
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts.",
  "A day on Venus is longer than a year on Venus.",
  "Honey never spoils — archaeologists have eaten 3000-year-old honey.",
  "You can't hum while holding your nose (try it!)."
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factElement = document.getElementById("fact");
  factElement.innerText = facts[randomIndex];
}
