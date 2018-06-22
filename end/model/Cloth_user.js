require('babel-polyfill');

class Cloth_user{
  constructor(id,name,password,gender,birth,tel){
    this.id = id;
    this.name = name;
    this.password = password;
    this.gender = gender;
    this.birth = birth;
    this.tel = tel;
  }
}

module.exports = Cloth_user;