const pokemonList = [

{ name: 'Weedle',
  height: 1,
  types: ['bug', 'poison'] },

{ name: 'Jigglypuff',
  height: 1.08,
  types: ['normal', 'fairy'] },

{ name: 'Dragonite',
  height: 7.03,
  types: ['dragon', 'flying'] },

{ name: 'Ivysaur',
  height: 3.03,
  types: ['grass', 'poison'] },

{ name: 'Nidoqueen',
  height: 4.03,
  types: ['poison', 'ground'] }
]

console.log(pokemonList);

//for loop used to lists the name and height of each pokemon in array
//using <br> until I figure out how to make it a proper list
for (let i = 0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height +" ft)" + '<br>');
  //conditional within loop to determine tallest pokemon
  if (pokemonList[i].height > 5) {
    document.write(" - Wow, that's huge!" + '<br>');
  }
}
