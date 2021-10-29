const pokemonList = [

{ name: 'Weedle',
  height: 1,
  types: ['bug', 'poison'] },

{ name: 'Jigglypuff',
  height: 1.08,
  types: ['normal', 'fairy'] },

{ name: 'Dragonite',
  height: 7.03,
  types: ['dragon', 'flying'] }

{ name: 'Ivysaur',
  height: 3.03,
  types: ['grass', 'poison'] }

{ name: 'Nidoqueen',
  height: 4.03,
  types: ['poison', 'ground'] }
]
console.log(pokemonList);

for (let i = 0; i < document.write; i++){
  if (pokemonList[i].height < 2){
    console.log(pokemonList[i].height + "Tiny!");
  }else (pokemonList[i].height > 4.99){
    console.log(pokemonList[i].height + "Huge!");
  }
}
