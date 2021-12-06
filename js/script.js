const pokemonRepository = (function () {
  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  const modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    const pokemonList = document.querySelector(".pokemon-list");
    const listpokemon = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-danger', 'btn-lg', 'button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        const pokemon = {
          name: item.name.substring(0,1).toUpperCase() + item.name.substring(1),
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    const url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.weight = details.weight;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    const modalBody = $('.modal-body');
    const modalTitle = $('.modal-title');
    // const modalHeader = $('.modal-header');
    //clears existing content when new modal opened
    modalTitle.empty();
    modalBody.empty();

    //element for name in modal
    const nameElement = $('<h1>' + pokemon.name + '</h1>');
    //element for img in modal
    const imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.attr('src', pokemon.imageUrl);

    //element for height in modal
    const heightElement = $('<p>' + 'Height : ' + pokemon.height + ' m' + '</p>');
    //element for weight in modal
    const weightElement = $('<p>' + 'Weight : ' + pokemon.weight + ' kg' + '</p>');


    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);

    $('#exampleModalLive').modal();
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

// ESC-key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
// also triggered when clicking INSIDE the modal - close if the user clicks directly on the overlay
    const target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    showDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
