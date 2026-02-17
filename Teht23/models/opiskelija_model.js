const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from opiskelija where idOpiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (Etunimi,Sukunimi,Osoite,Luokkatunnus) values(?,?,?,?)',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, opiskelija.Luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set Etunimi=?,Sukunimi=?, Osoite=?, Luokkatunnus=? where idOpiskelija=?',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, opiskelija.Luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;