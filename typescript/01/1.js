function getInputSomething() {
    return '123456';
}
function loadUserFromDB(id) {
    if (isNaN(id)) {
        return;
    }
    return {
        id: id,
        nickname: 'markus',
        age: 20
    };
}
var tmp = getInputSomething();
var id = parseInt(tmp);
var result = loadUserFromDB(id);
if (result) {
    var nickname = result.nickname, age = result.age;
    console.log(nickname, age);
}
else {
    console.log("id info not found!");
}
