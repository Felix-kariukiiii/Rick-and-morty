
fetch ("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then(data=>{
    // console.log (data)
    const cards = document.querySelector (".card")
    const cardP = document.querySelector(".card-body")
    const characters = data.results
    console.log (characters)


    characters.map((character) => {
        console.log(character)
    const imagee = document.createElement("img")
    imagee.className = "card-img-top";
    const naame = document.createElement("h5")
    naame.className = "card-text"

    const details= document.createElement("p")
    details.className = "card-text"

    const image = character.image
    const name = character.name
    const gender =character.gender
    const species = character.species
    const status = character.status
    const origin = character.origin.name
 
    cards.appendChild(imagee)
    cardP.appendChild(naame)
    cardP.appendChild(details)
    naame.innerHTML=name
    imagee.src = image
    details.innerHTML=`It is a ${gender} of ${species} species. It is ${status} from ${origin}`


    })



  })

// const cardsContainer = document.querySelector(".cards"); // Assuming you have a container with class "cards" in your HTML

// fetch("https://rickandmortyapi.com/api/character")
//   .then(res => res.json())
//   .then(data => {
//     const characters = data.results;

//     characters.forEach(character => {
//       const card = document.createElement("div");
//       card.className = "card";

//       const image = document.createElement("img");
//       image.className = "card-img-top";
//       image.src = character.image;

//       const cardBody = document.createElement("div");
//       cardBody.className = "card-body";

//       const name = document.createElement("h5");
//       name.className = "card-title";
//       name.innerHTML = character.name;

//       const details = document.createElement("p");
//       details.className = "card-text";
//       details.innerHTML = `It is a ${character.gender} of ${character.species} species. It is ${character.status} from ${character.origin.name}`;

//       cardBody.appendChild(name);
//       cardBody.appendChild(details);

//       card.appendChild(image);
//       card.appendChild(cardBody);

//       if (cardsContainer) {
//         cardsContainer.appendChild(card);
//       } else {
//         console.error("Container with class 'cards' not found");
//       }
//     });
//   })
//   .catch(error => console.error("Error fetching data:", error));

