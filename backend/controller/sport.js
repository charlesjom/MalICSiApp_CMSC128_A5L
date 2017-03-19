'use strict';

const db = require(__dirname + '/../lib/mariasql');
const winston = require('winston');

//Controller to be used for adding a sport
exports.add_sport = (req,res,next) => {
  const query_string = 'INSERT into sport(sport_type,'+
      'division,game_id) VALUES (?,?,?)'; 
  const payload = [req.body.sport_type, req.body.division,req.body.game_id];
  const callback = (err,data) => {
    if(err){
      winston.level = 'debug';
      winston.log('debug', 'err: ', err);
      return res.status(500).send({ error_code:err.code});
    } else if (data == 0) {
      winston.level = 'info';
      winston.log('info', 'Not found!');
      return res.status(404).send(data);
    } else {
      winston.level = 'info';
      winston.log('info', 'Successfully added sport!');
      return res.status(200).send(data);
    }
  };

  db.query(query_string, payload, callback);
};

//Controller to be used for retrieving a sport given a sport_id
exports.get_sport = (req, res, next) => {
  const query_string = "SELECT * from sport where sport_id = ?";  
  const payload = [req.params.sport_id];
  const callback = (err, data) => {
    if(err){
      winston.level = 'debug';
      winston.log('debug', 'err: ', err);
      return res.status(500).send({ error_code:err.code});
    } else if (data == 0) {
      winston.level = 'info';
      winston.log('info', 'Not found!');
      return res.status(404).send(data);
    } else {
      winston.level = 'info';
      winston.log('info', 'Successfully retrieved sport!');
      return res.status(200).send(data);
    }
  };

  db.query(query_string, payload, callback);
};

//Controller to be used for updating a sport given a sport_id
exports.update_sport = (req, res, next) => {
  const query_string = 'UPDATE sport set sport_type = ?,division = ? WHERE sport_id = ?;';
  const payload = [req.body.sport_type,req.body.division,req.body.sport_id];
  const callback = (err, data) => {
    if(err){
      winston.level = 'debug';
      winston.log('debug', 'err: ', err);
      return res.status(500).send({ error_code:err.code});
    } else if (data == 0) {
      winston.level = 'info';
      winston.log('info', 'Not found!');
      return res.status(404).send(data);
    } else {
      winston.level = 'info';
      winston.log('info', 'Successfully updated sport!');
      return res.status(200).send(data);
    }
  };

  db.query(query_string, payload, callback);
};

//Controller to be used for deleting a sport given a sport_id
exports.delete_sport = (req, res, next) => {
  const query_string ='DELETE FROM sport WHERE sport_id = ?'; 
  const payload = [req.params.sport_id];
  const callback = (err, data) => {
    if(err){
      winston.level = 'debug';
      winston.log('debug', 'err: ', err);
      return res.status(500).send({ error_code:err.code});
    } else if (data == 0) {
      winston.level = 'info';
      winston.log('info', 'Not found!');
      return res.status(404).send(data);
    } else {
      winston.level = 'info';
      winston.log('info', 'Successfully deleted sport!');
      return res.status(200).send(data);
    }
  };

  db.query(query_string, payload, callback);
};