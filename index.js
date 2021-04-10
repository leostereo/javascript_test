import Child from "./child_class.js"
"use strict"

document.getElementById("app").innerHTML = "hello";

const MyChild = new Child();
//console.log(MyChild.bringPokes());
const myPokes = MyChild.bringPokes()  
  .then(data => {
    console.log(data.results)
    const filtered = data.results.filter(poke => poke.name === 'pidgeotto')
    console.log(filtered)  
    const {name,url} = filtered[0];
    console.log("url "+url )
  })
  .catch(error => console.log(error));



