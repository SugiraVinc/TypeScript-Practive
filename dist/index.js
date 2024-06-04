"use strict";
// Basic Types
let id = 5;
console.log('ID:', id);
let comapanyName = 'Poetherapy Ink LTD';
let isPublished = true;
let x = 'Welcome';
let ids = [22, 32, 44, 5, 46, 34];
let arr = [1, true, , 'Welcome'];
// Tuple
let person = [1, 'Sugira', true];
// Tuple array
let employee;
employee = [
    [1, 'Vinc'],
    [2, 'Sugira'],
    [3, 'Prince']
];
// Union
let pid;
pid = '22';
// Enumerated type: allow to define a set pf constants by default it is 0
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// Object
const user = {
    id: 1,
    name: 'John'
};
// Type assertion
let cid = 1;
let customerID = cid;
// or let customerID = cid as number
// Function
function AddNum(x, y) {
    return x + y;
}
console.log(AddNum(1, 3));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Vinny'
};
