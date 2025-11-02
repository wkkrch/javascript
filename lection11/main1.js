fetch('https://dummyjson.com/recipes?limit=50')
.then(response => response.json())
.then(({recipes}) => {
    console.log(recipes);
    for (const {caloriesPerServing, cookTimeMinutes, cuisine, difficulty, id, image, ingredients, instructions, mealType,
        name, prepTimeMinutes, rating, reviewCount, servings, tags, userId} of recipes) {
        const blockForRecipe = document.createElement('div');
        blockForRecipe.classList.add('blockForRecipe');
        const info = document.createElement('div');
        info.innerHTML = `
        <div class="id"> id: ${id}
        userId: ${userId}
        </div>
        <h3>${name}</h3>
        <p>caloriesPerServing: ${caloriesPerServing}<br>
        cookTimeMinutes: ${cookTimeMinutes}<br>
        cuisine: ${cuisine}<br>
        difficulty: ${difficulty}<br>
        prepTimeMinutes: ${prepTimeMinutes}<br>
        rating: ${rating}<br>
        reviewCount: ${reviewCount}<br>
        servings: ${servings}
       </p>
        `;
        const img = document.createElement('img');
        img.src = `${image}`;
        img.alt = 'imageProduct';
        const listUl = document.createElement('ul');
        const ingredientss = document.createElement('p');
        ingredientss.innerText = 'Ingredients:';
        for (const ingredient of ingredients) {
            const li = document.createElement('li');
            li.innerText = ingredient;
            listUl.append(li);
        }
        const listOl = document.createElement('ol');
        const instructionss = document.createElement('p');
        instructionss.innerText = 'Instructions:';
        for (const inst of instructions) {
            const li = document.createElement('li');
            li.innerText = inst;
            listOl.appendChild(li);
        }
        const tagss = document.createElement('div');
        tagss.classList.add('tags')
        for (const tag of tags) {
            const p = document.createElement('p');
            p.innerText = `#${tag}`;
            tagss.appendChild(p);
        }
        const meall = document.createElement('div');
        meall.classList.add('mealType');
        for (const meal of mealType) {
            const p = document.createElement('p');
            p.innerText = `${meal} |`;
            meall.appendChild(p);
        }
        blockForRecipe.append(info, img, ingredientss, listUl, instructionss, listOl, tagss, meall);
        document.body.appendChild(blockForRecipe);
    }
})