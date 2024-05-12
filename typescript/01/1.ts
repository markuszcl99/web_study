function getInputSomething(): string {
    return '123456';
}

function loadUserFromDB(id: number): undefined | {
    id: number,
    nickname: string,
    age: number
} {
    if (isNaN(id)) {
        return;
    }
    return {
        id,
        nickname: 'markus',
        age: 20
    }
}

let tmp = getInputSomething();
let id = parseInt(tmp);

let result = loadUserFromDB(id);
if (result) {
    let { nickname, age } = result;
    console.log(nickname, age);
} else {
    console.log("id info not found!")
}