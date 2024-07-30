# Pokémon ASCII Name Generator


This project is a fun and interactive way to explore API interactions in Node.js using both fetch and Axios. It not only showcases how to use TypeScript for type safety but also demonstrates handling asynchronous data fetching and response manipulation


## Description

This Node.js console application demonstrates a simple integration with external APIs to fetch and manipulate data. The project utilizes TypeScript for better type safety and clarity.

### Functionality

The application includes two main functionalities:

1. **Random Pokémon Fetcher**: This feature uses the [PokéAPI](https://pokeapi.co) to fetch a random Pokémon. It generates a random number between 1 and 500 and retrieves the corresponding Pokémon's name based on its ID. This demonstrates basic usage of RESTful API calls and handling asynchronous operations in Node.js.

2. **ASCII Art Creator**: [asciified](https://asciified.thelicato.io/) Leveraging an ASCII art generation API, this feature takes a Pokémon's name (or any string) and converts it into a stylized ASCII art. It uses [Axios](https://axios-http.com/) for HTTP requests to demonstrate an alternative to the native fetch method and showcases error handling and response transformations in asynchronous operations.

### Key Technologies

- **Node.js**: As the runtime environment.
- **TypeScript**: For static type checking.
- **Axios**: Used for making HTTP requests.
- **PokéAPI**: For fetching Pokémon data.
- **ASCII Art API**: For converting text to ASCII art.

This project is designed to be a straightforward demonstration of interacting with APIs and handling asynchronous data in a Node.js and TypeScript environment. It's perfect for those looking to understand API integration and asynchronous programming patterns in TypeScript.


## Prerequisites

Before you begin, ensure you have Node.js installed on your machine. If you do not have Node.js installed, you can download it from [Node.js official website](https://nodejs.org/).

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/adride00/fetch-axios.git
cd typescript-node
npm install
