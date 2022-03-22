import { v4 as uuidv4 } from 'uuid';

const hobbies = [
    {id: 1, name: "foot"},
    {id: 2, name: "voley"},
    {id: 3, name: "tenis"},
    {id: 4, name: "drink"},
    {id: 5, name: "eat"},
    {id: 6, name: "run"},
    {id: 7, name: "cooking"},
    {id: 8, name: "vtt"},
    {id: 9, name: "motocross"},
    {id: 10, name: "mechanic"},
    {id: 11, name: "devlopment web"},
    {id: 12, name: "video games"},
    {id: 13, name: "kart"},
    {id: 14, name: "escalade"},
    {id: 15, name: "look the tv"},
    {id: 16, name: "draw"},
    {id: 17, name: "randonnée"},
    {id: 18, name: "ski"},
    {id: 19, name: "camping"},
    {id: 20, name: "box"},
]

const usernames = ["matis","tom","fabien","rudolf","archibald","bernard"];


function getonobject () {
    const users = []
    for (let i = 0; i < 10; i++) {
        const user = {id: uuidv4(), username: userrandom(), inscription: inscriptionrandom(), hobbies: "hobbies", anniverssaire: annivrandom()}
        users.push(user);
    }
    return console.log(users)
}

getonobject();

function inscriptionrandom () {
    let yearinscription = parseInt(Math.random() * 3 + 2020);
    let dayinscription = parseInt(Math.random() * 31 + 1);
    let monthinscription = parseInt(Math.random() * 13 + 0);
    let inscription = dayinscription + "/" + monthinscription + "/" + yearinscription;
    return inscription;
}

function annivrandom () {
    let yearanniv = parseInt(Math.random() * 30 + 1960);
    let dayanniv = parseInt(Math.random() * 31 + 1);
    let monthanniv = parseInt(Math.random() * 12 + 1);
    let anniv = dayanniv + "/" + monthanniv + "/" + yearanniv;
    return anniv;
}

function userrandom () {
    const names = usernames[Math.floor(Math.random() * usernames.length)];
    let tmp = [];
    for (let i = 0; i < 10; i++) {
        tmp.push(names)
    }
    return names;
}