const mysql = require("mysql2");
const config = require('./config.json');
class Model {
  connection;
  constructor(table) {
      this.table = table;
  }
  async find(id) {
      let query = `SELECT * FROM ${this.table} WHERE id=${id};`;
      let [rows,fields] = await this._connect(query);
      if(rows) {
          rows.map(item => {
              this.data.push(item);
          });
      }
      return this;
  }
  async delete() {
      if(!this.data[0]) {
          return false;
      }
      // console.log(this.data[0].id);
      let query = `SELECT * FROM ${this.table} WHERE id=${this.data[0].id};`;
      let [rows,fields] = await this._connect(query);
      if(rows) {
          let query = `DELETE FROM ${this.table} WHERE id=${this.data[0].id};`;
          let [rows,fields] = await this._connect(query);
          if(rows) {
              return true;
          } else {
              return false;
          }
      } else {
          return false;
      }
  }
  async save(data) {
      let keys = [];
      let values = [];
      let update = [];
      let query;
      for(let key in data) {
          if(key !== "id") {
              keys.push(key);
              values.push(`'${data[key]}'`);
              update.push(`${key}='${data[key]}'`);
              // `${key}='${data[key]}'`;
          }
      }
      if(data.id) {
          query = `UPDATE ${this.table} SET ${update} WHERE id=${data.id};`;
      } else {
          query = `INSERT ${this.table} (${keys}) VALUES (${values});`;
      }
      let [rows,fields] = await this._connect(query);
      return this;
  }
  async getAll() {
      let query = `SELECT * FROM ${this.table};`;
      let [rows,fields] = await this._connect(query);
      if(rows) {
          rows.map(item => {
              this.data.push(item);
          });
      }
      return this;
  }
  _connect(query) {
      this.connection = mysql.createConnection({
          host     : config.db.host,
          user     : config.db.user,
          password : config.db.password,
          database : config.db.database
      });
      this.connection.connect();
      let result;
      try {
          result = this.connection.promise().query(query);
      } catch (err) {
          console.error(err)
      }
      this.connection.end();
      return result;
  }
}

module.exports = Model;











// 'use strict';
// const { query } = require("express");
// const mysql = require("mysql2");
// const config = require('./config.json');
// class Model{
//   connection;
//     constructor(table){
//         this.table = table;
//     }
//     async find(id){
//         let query = `SELECT * FROM ${this.table} where id=${id};`;
//         let[rows, fields] = await this._connect(query);
//         if(rows){
//           rows.map(item => {
//             this.data.push(item);
//           })
//         }
//         return this
//     }
//     delete(){
       
//     }
//     save(){

//     }
//     _connect(query){
//           this.connection.connect();
//           let result;
//           try{
//             result = this.connection.promise().query(query);
//           }catch(err){
//             console.error(err);
//           }
//           this.connection.end();
//           return result
//     }
// }

// module.exports = Model;