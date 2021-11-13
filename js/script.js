let pokemonRepository = (function () {
  let pokemonList = [
      {
        name: 'Weedle',
        height: 1,
        types: ['bug', 'poison']
      },
      {
        name: 'Jigglypuff',
        height: 1.08,
        types: ['normal', 'fairy']
      },
      {
        name: 'Dragonite',
        height: 7.03,
        types: ['dragon', 'flying']
       },
      {
        name: 'Ivysaur',
        height: 3.03,
        types: ['grass', 'poison']
      },
      {
        name: 'Nidoqueen',
        height: 4.03,
        types: ['poison', 'ground']
      }
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails (pokemon) {
    console.log(pokemon.name);
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    showDetails: shoeDetails
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
