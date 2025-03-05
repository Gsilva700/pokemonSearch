const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");

const fetchPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await response.json();

    // Clear previous sprite
    spriteContainer.innerHTML = "";

    // Set Pokémon details
    pokemonName.textContent = data.name.toUpperCase();
    pokemonId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    // Set sprite
    const sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.src = data.sprites.front_default;
    spriteContainer.appendChild(sprite);

    // Set stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // Set types
    types.innerHTML = data.types
      .map((obj) => `<span>${obj.type.name.toUpperCase()}</span>`)
      .join("");
  } catch (err) {
    resetUI();
    alert("Pokémon not found");
  }
};

const resetUI = () => {
  const sprite = document.getElementById("sprite");
  if (sprite) sprite.remove();

  pokemonName.textContent = "";
  pokemonId.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  types.innerHTML = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
};

searchButton.addEventListener("click", fetchPokemon);