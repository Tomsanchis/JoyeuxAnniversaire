import { v4 as uuidv4 } from 'uuid';

function randomid () {
    let tempid = []
    for (let i = 0; i < 10; i++) {
        const listusers = {id:uuidv4(), inscription: "test", hobbies: "test", anniverssaire: "test"};
        tempid.push(listusers);
    }
    console.log(tempid);
}

randomid();