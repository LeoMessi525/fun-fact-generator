const facts = [
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts.",
  "A day on Venus is longer than a year on Venus.",
  "Honey never spoils — archaeologists have eaten 3000-year-old honey.",
  "You can't hum while holding your nose (try it!).",
  "Wombat poop is cube-shaped.",
  "Sharks existed before trees.",
  "A group of flamingos is called a 'flamboyance'.",
  "The Eiffel Tower can grow over 6 inches in summer.",
  "Some cats are allergic to humans.",
  "Sloths can hold their breath longer than dolphins.",
  "There's a basketball court on the top floor of the US Supreme Court building — it's called the 'Highest Court in the Land'.",
  "Pineapples take about 2 years to grow.",
  "The unicorn is the national animal of Scotland.",
  "A bolt of lightning is five times hotter than the surface of the sun.",
  "Koalas sleep up to 22 hours a day.",
  "Humans share about 60% of their DNA with bananas.",
  "The inventor of the frisbee was turned into a frisbee after he died.",
  "Cows have best friends and get stressed when separated.",
  "An octopus can taste with its arms.",
  "Tomatoes were once considered poisonous in Europe.",
  "The world's smallest reptile was discovered in 2021 — it’s the size of a seed!",
  "Banging your head against a wall burns 150 calories an hour (not recommended)."
];


function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factElement = document.getElementById("fact");
  factElement.innerText = facts[randomIndex];
}
