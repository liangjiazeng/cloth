require('babel-polyfill');

class Cloth_order{
  constructor(id,number,price,user_id,cloth_id,address,date,color,style,details){
    this.id = id;
    this.number = number;
    this.price = price;
    this.user_id = user_id;
    this.cloth_id = cloth_id;
    this.address = address;
    this.date = date;
    this.color = color;
    this.style = style;
    this.details = details;
    
  }
}

module.exports = Cloth_order;