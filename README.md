# LifeHash

<p>
  <img alt="React" src="https://img.shields.io/badge/React-000000?logo=react&logoColor=cyan&style=for-the-badge" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-654FF0?logo=vite&logoColor=white&style=for-the-badge" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge" />
</p>

A demo app showcasing the internals of a password hash function based on Conway's game of life.

Play with it [here](https://tgianella.github.io/LifeHash/).

This app was created for a talk about cryptographic hash functions the slides of which you can find [here](https://tgianella.github.io/slides-fonction-hash/#/).

## Features

- Input your password and see how it is transformed step-by-step into a digest !
- Your plaintext password is first transformed into a binary string which is used to seed a game of life grid. The right grid then runs for 50 generations and the output binary string is encoded in base64 to generate the digest.
- Right panel displays your last 4 passwords/digests.
- Login modal lets you register and then login to check that the hash function works as intended.

## Incoming features (maybe)

- Display generations count
- Options modal
  - Generations limit slider
  - Generations speed slider
  - Use another cellular automaton
