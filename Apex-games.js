let wraithAttack = getRandomInt(30, 50);
console.log(wraithAttack);
let wattsonAttack = getRandomInt(30, 50);
console.log(wattsonAttack);

let wraithArmor = 100
let wattsonArmor = 100

let wraithHp = 100
let wattsonHp = 100

let wattsonTotalHp = wattsonArmor + wattsonHp;
console.log(wattsonTotalHp);
let wraithTotalHp = wraithArmor + wraithHp;
console.log(wattsonTotalHp);


if (wraithAttack < wattsonAttack) {
    console.log("wattson has the stronger attack");

} else if (wraithAttack > wattsonAttack) {
    console.log("wraith has the stronger attack")

} else if (wraithAttack = wattsonAttack) {
    console.log("their attack is equal")
}

function getRandomInt(min, max) {
    min = Math.ceil(30);
    max = Math.floor(50);
    return Math.floor(Math.random() * (max - min) + min);
}