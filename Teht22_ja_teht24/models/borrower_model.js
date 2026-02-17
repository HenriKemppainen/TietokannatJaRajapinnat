const db = require('../database');

const borrower = {
  getAll: function(callback) {
    return db.query('select * from borrower', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from borrower where id_borrower=?', [id], callback);
  },
  add: function(borrower, callback) {
    return db.query(
      'insert into borrower (fname,lname,streetaddress) values(?,?,?)',
      [borrower.fname, borrower.lname, borrower.streetaddress],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from borrower where id_borrower=?', [id], callback);
  },
  update: function(id, borrower, callback) {
    return db.query(
      'update borrower set fname=?,lname=?, streetaddress=? where id_borrower=?',
      [borrower.fname, borrower.lname, borrower.streetaddress, id],
      callback
    );
  }
};
module.exports = borrower;