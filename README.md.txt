## Design Overview
This technical test was completed in JavaScript using Node.js
This program takes in a json file, a command and an argument and returns results based on the given parameters

## Install Insturctions
Download and install Node.js for windows by clicking [here](https://nodejs.org/dist/v10.8.0/node-v10.8.0-x64.msi)
or learn more from the official [website](https://nodejs.org/en/)

## Assumptions
This program assumes that there will not be any incorrect parameters inputted
The program is only expected to work with the parameters explicitly stated in the given instructions
The file we are opening is in the same directory as this program

## Testing
After installing Node.js, this program can be ran with `node Company_data_miner.js [command] [argument]`
All functions were tested as following:

`node Company_data_miner.js locate [state]`. Verified output only included selected state
`node Company_data_miner.js find_before [year]`. Verified output only had companies inclusive and below year
`node Company_data_miner.js find_after [year]`. Verified output only had companies inclusive and above year
`node Company_data_miner.js find_between_size [range]`. All of the possible options tested and verified
`node Company_data_miner.js find_type [category]`. Possible categories tested and verified output

## Future Improvements
Allow for multiple locations for function locate
Allow designation for location of input file
Allow multiple files as input data
Add a function to find between years instead of only before and after
Various other new functions that can be used with the other fields of the data
