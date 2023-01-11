import express from 'express';

const router = express.Router();

router.get('/hello', async (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

const recipes = [
  {
    id: 1,
    title: "Filety z kurczaka w parmezanowej panierce",
    thumbnail: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/filety-w-parmezanowej-panierce.jpg",
    prepTime: 30,
    slug: "filety-w-parmezanowej-panierce",
    type: "obiad",
    tags: ["obiad", "kurczak"],
    ingredients: [
      "1 podwójny filet kurczaka",
      "3 łyżki masła",
      "1 łyżka oliwy extra vergine",
      "2/3 szklanki bułki tartej",
      "1/3 szklanki tartego parmezanu (lub grana padano)",
      "2 większe pomidory",
      "1 mała czerwona cebula",
      "60 g tartego miękkiego sera (np. koziego, mozzarelli, provoletta)",
      "świeże zioła np. estragon, bazylia, tymianek"
    ],
    steps: [
      "Piekarnik nagrzać do 220 stopni C. Rozdzielić filety kurczaka na 2 pojedyncze. Każdy filet przekroić poziomo na 2 cieńsze filety i rozbić tłuczkiem w najgrubszej części na taką samą grubość (ok. 1/2 cm).",
      "Doprawić solą, pieprzem i posmarować roztopionym masłem wymieszanym z oliwą, następnie obtoczyć w mieszance tartej bułki i tartego parmezanu. Ułożyć na blaszce do pieczenia wysmarowanej oliwą. Wstawić do piekarnika i piec przez 15 minut.",
      "Pomidory sparzyć, obrać ze skórki, pokroić w kosteczkę odsączyć z nadmiaru soku, wymieszać z drobno posiekaną czerwoną cebulą.",
      "Piekarnik przełączyć na funkcję grilla (jeśli nie mamy takiej funkcji podnieść temp. do 240 st. C), na filetach położyć salsę pomidorową i tarty ser i wstawić do piekarnika. Grillować/piec jeszcze przez 5 minut. Posypać świeżymi ziołami.",
    ],
    photos: [
      "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kurczak_w_parmezanowej_panierce_01.jpg",
      "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kurczak_w_parmezanowej_panierce_02.jpg",
      "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kurczak_w_parmezanowej_panierce_03.jpg",
      "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kurczak_w_parmezanowej_panierce_04.jpg"
    ]
  },
];

router.get('/recipes', async (_req, res) => {
  const multipliedRecipes = Array(50).fill(recipes[0]).map((recipe, index) => {
    return {
      ...recipe,
      id: index + 1
    };
  });
  res.status(200).json(multipliedRecipes);
});

export default router;
