# Run Boris, Run!

Netlify Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/fc505d8b-809e-4e4c-8ffb-35a33b27325a/deploy-status)](https://app.netlify.com/sites/laughing-brattain-9a3cce/deploys)

Travis Status: [![Build Status](https://travis-ci.com/edmond-b/Covid_Game.svg?branch=master)](https://travis-ci.com/edmond-b/Covid_Game)

Play the game [Here](https://run-boris-run.netlify.app/)

## Description

'Run Boris, Run!', is a game developed to pass the time in quarantine whilst also practising your social distancing skills (virtually of course!).

## Instructions

Boris Johnson is on his way to Sainsbury's to get some milk and nappies, but in order to avoid another #barnardcastle, he has to ensure he remains socially distanced.

If you get too close to other people walking down the street the InfectionRate will go up and it will be game over!

It's your job to navigate Boris safely around the streets of London, keeping 2 meters away from fellow pedestrians.d be placed in quarantine.

## Team Members

- [Edmond Bullaj](https://github.com/edmond-b)
- [Lizzie Turney](https://github.com/LTurns)
- [Jo Collier](https://github.com/collier-jo)
- [Gareth Woodman](https://github.com/GarethWoodman)
- [Colin Muir](https://github.com/cjm106)
- [Hibo Abdilaahi](https://github.com/hiboabd)

## Technologies

| Purpose                      | Technology         |
| ---------------------------- | ------------------ |
| Front end framework          | React,             |
| Languages                    | Javascript, HTML5  |
| CI/CD                        | Travis             |
| Hosting                      | Netflify           |
| Styling                      | CSS                |
| Front end testing framework  | Jest               |
| Code Coverage                | Jest               |


## Installing Run Boris, Run onto your local machine

To get started using Covid Game on your local machine, please follow the instructions below:

### Install Node.js

**Skip this step if you already have Node.js installed**

1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `12.14.1`.
    ```
    nvm install 12.14.1
    ```

### Getting set up

Once you have installed Node:

1. Clone this repository to your local machine
2. Install Node.js dependencies using the command:
    ```
    npm install
    ```

### Using Run Boris, Run!

1. To start, navigate to the Covid-Game root directory and enter the command:
    ```
    npm run start
    ```
For optimal results, use Google Chrome.

## Testing

### To run tests

* Run all tests
    ```
    npm run test
    ```
This will show you test results and coverage for the individual files and overall project.
