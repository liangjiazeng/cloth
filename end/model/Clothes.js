require('babel-polyfill');

class Clothes{
  constructor(id,name,gender,type_id,price,designer_id,src){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.type_id = type_id;
    this.price = price;
    this.designer_id = designer_id;
    this.src = src;
  }
}

module.exports = Clothes;