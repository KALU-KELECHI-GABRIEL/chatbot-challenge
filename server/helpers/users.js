const users = []; //

const addUsers = ({ author, id, commands }) => {
    author = author.trim();
    const user = {
        id,
        author,
        commands
    }
    users.push(user);
}

const removeUsers = ({ id }) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const addCommands = ({ author, id, command }) => {
    author = author.trim();
    const user = {
        id,
        author
    }
    for (let index = 0; index < users.length; index++) {
        const element = array[index];
        if(element.id === id && element.author === author) {
            element.commands.push(command)
        } 
    }
}

const checkForCommands = ({ author, id, command }) => {
    author = author.trim();
    for (let index = 0; index < users.length; index++) {
        const element = array[index];
        if(element.id === id && element.author === author) {
            return element.commands.includes(command);
        } 
    }
}

const getUserCommandList = ({ author, users, command }) => {
    author = author.trim();
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(element.author === author) {
            return element.commands
        } 
    }
}

const updateUserCommandList = ({ author, users }) => {
    author = author.trim();
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(element.author === author) {
            element.commands.pop();
        } 
    }
}

const getUsers = () => {
 return users;
}
module.exports = { addUsers, removeUsers, addCommands, checkForCommands, getUserCommandList, updateUserCommandList, getUsers }

