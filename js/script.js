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
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write('<p>' + pokemon.name + " (height: " + pokemon.height +" ft)" + '</p>');
});

//for loop used to lists the name and height of each pokemon in array
// for (let i = 0; i < pokemonList.length; i++){
//   if (pokemonList[i].height < 5) {
//   document.write('<p>' + pokemonList[i].name + " (height: " + pokemonList[i].height +" ft)" + '</p>');
// }
//   //conditional within loop to determine tallest pokemon
//   if (pokemonList[i].height > 5) {
//     document.write('<p>' + pokemonList[i].name + " (height: " + pokemonList[i].height +" ft)" + " - Wow, that's huge!" + '</p>');
//   }
// }
//
// let pokemonList2 = [
//   // different set of pokemon objects
// ];
//
// function printArrayDetails(pokemonList){
//   for (let i = 0; i < pokemonList.length; i++){
//     // document.write('<p>' + PokemonList[i].name + '</p>');
//     // console.log(pokemonList[i].name);
//   }
// }
//
// function printArrayDetails(pokemonList2){
//   for (let i = 0; i < pokemonList2.length; i++){
//     // document.write("<p>" + pokemonList2[i].name + "</p>");
//     // console.log(pokemonList2[i].name);
//   }
// }
//
// // printArrayDetails(pokemonList); // executes the function using 'pokemonList' as its input - argument
