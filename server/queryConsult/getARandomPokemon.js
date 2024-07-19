export async function getARandomPokemon() {
    // get one random number between 1 to 100
    const randomId = Math.floor(Math.random() * 100) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();

    console.log(data)
 
    return {
        ...data,
        frontImage: data.sprites.front_default
    }; 
}
