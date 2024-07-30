import { getRandomPokemon, createASCII } from './services/fetchAsync.service'

(async () => {
  const pokeName = await getRandomPokemon()
  const textASCII = await createASCII(pokeName)
  console.log(textASCII)
})()