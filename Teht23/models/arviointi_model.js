const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (Paivamaara,Arvosana,idOpiskelija,idOpintojakso) values(?,?,?,?)',
      [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija,arviointi.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Paivamaara=?,Arvosana=?, idOpiskelija=?, idOpintojakso=? where idArviointi=?',
      [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;