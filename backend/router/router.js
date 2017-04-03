'use strict';
/* old controllers
const update = require(__dirname + '/../controller/old-controllers/update');
const create = require(__dirname + '/../controller/old-controller/create');
const retrieve = require(__dirname + '/../controller/old-controller/retrieve');
const del = require(__dirname + '/../controller/old-controller/delete');
*/
const account = require(__dirname + '/../controller/account');
const court = require(__dirname + '/../controller/court');
const game_event = require(__dirname + '/../controller/game_event');
const log = require(__dirname + '/../controller/log');
const match_event = require(__dirname + '/../controller/match_event');
const sponsor = require(__dirname + '/../controller/sponsor');
const sport = require(__dirname + '/../controller/sport');
const team = require(__dirname + '/../controller/team');

let path = require('path');

module.exports = (router) => {

//account routers
    //login_account
    router.post('/api/login-account/', account.login_account);
    //logou_account
    router.post('/api/logout-account/', account.logout);
    //create account
    router.post('/api/add-account', account.add_account);
    //retrieve account
    router.get('/api/get-account/:account_id?', account.get_account);
    //retrieve all accounts
    router.get('/api/get-all-account/', account.get_all_account);
    //update account
    router.post('/api/update-account', account.update_account);
    //delete account
    router.post('/api/delete-account/:account_id', account.delete_account);

//court routers
    //create court
    router.post('/api/add-court', court.add_court);
    //retrieve court
    router.get('/api/get-court/:court_id', court.get_court);
    //update court
    router.post('/api/update-court', court.update_court);
    //delete court
    router.post('/api/delete-court/:court_id', court.delete_court);

//game_event routers
    //create game_event
    router.post('/api/add-game-event', game_event.add_game_event);
    //retrieve game_event
    router.get('/api/get-game-event/:game_id', game_event.get_game_event);
    //update game_event
    router.post('/api/update-game-event', game_event.update_game_event);
    //delete game_event
    router.post('/api/delete-game-event', game_event.delete_game_event);
    router.get('/api/get-user-upcoming-events/', game_event.get_user_upcoming_events);
    router.get('/api/get-user-past-events/', game_event.get_user_past_events);

//log routers
    //create log
    router.post('/api/add-log', log.add_log);
    //retrieve log
    router.get('/api/get-log/:account_id', log.get_log);
    //update log
    router.post('/api/update-log', log.update_log);
    //delete log
    router.post('/api/delete-log/:log_id', log.delete_log);

//match_event routers
    //create match_event
    router.post('/api/add-match-event', match_event.add_match_event);
    //retrieve match_event
    router.get('/api/get-match-event/:match_id', match_event.get_match_event);
    //update match_event
    router.post('/api/update-match-event', match_event.update_match_event);
    //delete match_event
    router.post('/api/delete-match-event', match_event.delete_match_event);

//sponsor routers
    //create sponsor
    router.post('/api/add-sponsor', sponsor.add_sponsor);
    //retrieve sponsor
    router.get('/api/get-sponsor/:game_id', sponsor.get_sponsor);
    //update sponsor
    router.post('/api/update-sponsor', sponsor.update_sponsor);
    //delete sponsor
    router.post('/api/delete-sponsor', sponsor.delete_sponsor);

//sport routers
    //create sport
    router.post('/api/add-sport', sport.add_sport);
    //retrieve sport
    router.get('/api/get-sport/:sport_id', sport.get_sport);
    //update sport
    router.post('/api/update-sport', sport.update_sport);
    //delete sport
    router.post('/api/delete-sport/:sport_id', sport.delete_sport);

//team routers
    //create team
    router.post('/api/add-team', team.add_team);
    //retrieve team
    router.get('/api/get-team/:team_id', team.get_team);
    //update team
    router.post('/api/update-team', team.update_team);
    //delete team
    router.post('/api/delete-team/:team_id', team.delete_team);


    router.all('*', (req, res, next) => {
        res.status(404).send({
            'message': 'Not Found!'
        });
    });

    return router;
};
