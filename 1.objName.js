"use strict";

// Write an object with field name.

const obj = {
  _name: [], // ['name', length]
  set name(val) {
    const arr = val.split(", ")

    for(let i = 0; i < arr.length; i++) {
      obj._name.push([arr[i], arr[i].length]);
    }
  },
  get name() {
    return (obj._name.length === 0) ? "Name is not defined!" : obj._name;
  },
}

console.log(obj.name) // Name is not defined!

obj.name = 'Hovhannes, Sona';

console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]