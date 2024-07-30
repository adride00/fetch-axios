import axios from 'axios'
import getRandomNumber from '../utils'

const baseURLPokeApi = 'https://pokeapi.co/api/v2/pokemon/'
const baseURLASCII = 'https://asciified.thelicato.io/ap/v2/ascii?text='

export const getRandomPokemon = async () => {
  const pokeID = getRandomNumber(1, 500)
  try {
    const response = await fetch(`${baseURLPokeApi}${pokeID}`)
    if (!response.ok) {
      throw {
        statusCode: response.status,
        message: response.statusText
      }
    } else {
      const data = await response.json()
      return data.name
    }
  } catch (error) {
    console.log(error)
  }
}

export const createASCII = async (name: string) => {
  try {
    const response = await axios(`${baseURLASCII}${name}`)
    return response.data
  } catch (error: any) {
    return {
      statusCode: error.response.status
    }
  }
}