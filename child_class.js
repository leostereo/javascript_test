import Parent from "./parent_class.js";

export default class Child extends Parent {
  constructor(){
    super();
  }
  bringPokes(){
    return fetch(this.url).then(res => res.json())
  }
  
} 