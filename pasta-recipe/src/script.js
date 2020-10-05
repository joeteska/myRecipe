let recipe = {
  
  "author": "Josef Teska",
  "cookTime": "PT1H",
  "datePublished": "10/01/2020",
  "description": "An incredible recreation of the Italian kitchen. This simple pasta recipe will leave you speechless.Trust me.",
  "recipeIngredient": [
    "• 5 cherry tomatoes",
    "• 2 chopped onions",
    "• 1 piece of crushed garlic",
    "• 1 cup of nuts (any kind)",
    "• pinch of salt",
  ],
  "name": "A Taste Of Italy",
  "cookTime": "PT15M",
  "recipeInstructions": "Sauce: Turn on your stove. Add ingredients into the pan. Cook for 15 minutes.",
  "recipeYield": "1 loaf",
  
  
  "cookTime": "PT15M",
  "recipeInstructions2": "Pasta: Prepare to your liking. ",
  
  
  "cookTime": "2 Minutes",
  "recipeInstructions3": "Blender: After 15 minutes, blend all of your ingredients together. Combine pasta and sauce.",
  
   "cookTime": "2 Minutes",
  "enjoy": "Enjoy your meal!.",
}

document.getElementById("name").innerText = recipe.name;
document.getElementById("description").innerText = recipe.description;
document.getElementById("author").innerText = recipe.author;
document.getElementById("datePublished").innerText = recipe.datePublished;
document.getElementById("recipeIngredient").innerText = recipe.recipeIngredient;
document.getElementById("recipeInstructions").innerText = recipe.recipeInstructions;
document.getElementById("recipeInstructions2").innerText = recipe.recipeInstructions2;
document.getElementById("recipeInstructions3").innerText = recipe.recipeInstructions3;
document.getElementById("enjoy").innerText = recipe.enjoy;