'use strict';
var fs = require("fs");
var path = require("path");
var Sequelize = require('sequelize');


var conf = app.config.db;
var conn = new Sequelize(conf.database, conf.user, conf.pass, {
  host: conf.host,
  dialect: conf.driver,
  logging: function (msg) { app.log(msg, 'SQL'); },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  define: {
    syncOnAssociation: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  // SQLite only
  storage: conf.storage
});

var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file.indexOf('.spec.') === -1) && (file !== "index.js");
  })
  .forEach(function(file) {
      var model = conn["import"](path.join(__dirname, file));
      db[model.name] = model;  
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

require('./Relations.spec')(conn.models);
conn.sync({logging: false}).then(function () {
  console.log('Database Ready');
});

db.sequelize = conn;
db.Sequelize = Sequelize;
module.exports = db;