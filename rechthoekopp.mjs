import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

function oppervlakterecht(zijde1, zijde2){
    let oppervlakte = zijde1 * zijde2;
    return oppervlakte

}

console.log(oppervlakterecht(5,10));