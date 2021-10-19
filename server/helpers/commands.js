// const { updateUserCommandList, getUserCommandList } =  require('../helpers/users')
// const days = require('./dates');

const commands = [
    { type: 'date', data: new Date()},
    { type: 'map', data: { lat: 48.1482933, lng: 11.586628 }},
    { type: 'rate', data: [1, 2, 3, 4, 5]},
    { type: 'complete', data: ['Yes', 'No']},
    { type: 'nil', data: '', message: 'You have Interacted with all Widgets already' }
    ]; //
const max = 3;
const min = 0;

const getCommand = (list) => {
    // let command = Math.random() * (max - min) + min;
    // command = Math.trunc(command);
    // console.log(command);
    // console.log(list, 'list');
    if (list.length === 0) {
        return commands[4];
    }
    const lastIndex = list.length - 1;
    let command = list[lastIndex];
    return commands[command];
    // return commands[1];
}

/**
 * 
 * @param {*} an Array representing the command List [0, 1,2,3]
 * @returns  a randomized reshuffled list of the input using fisher-yates shuffle algorithm
 */
const shuffleWithoutRepeat = ()  => {
    let array = [0, 1, 2, 3];
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

module.exports = { getCommand, shuffleWithoutRepeat }

