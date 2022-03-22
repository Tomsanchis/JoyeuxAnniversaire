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

function randomid () {
    let tempid = []
    for (let i = 0; i < 10; i++) {
        const listusers = {id:uuidv4(), inscription: "test", hobbies: "test", anniverssaire: "test"};
        tempid.push(listusers);
    }
    console.log(tempid);
}

randomid();