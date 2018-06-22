require('babel-polyfill');

class Cloth_designer{
  constructor(id,name,password,gender,birth,tel,describes){
    this.id = id;
    this.name = name;
    this.password = password;
    this.gender = gender;
    this.birth = birth;
    this.tel = tel;
    this.describes = describes;
  }
}

module.exports = Cloth_designer;