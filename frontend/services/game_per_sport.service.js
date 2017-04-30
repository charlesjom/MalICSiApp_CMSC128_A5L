'use strict';

(() => {
	angular
		.module('app')
		.factory('GamePerSportService', GamePerSportService);

		GamePerSportService.$inject = ['$window', '$http', '$q', '$httpParamSerializer'];

		const headers = {
			'content-type': 'application/x-www-form-urlencoded'
		};

		function GamePerSportService($window, $http, $q, $httpParamSerializer) {
			const get_game_per_sport = (data) => {
				let deferred = $q.defer();

				$http({
					method: 'GET',
					url: '/api/get-game-per-sport/' + data,
					headers: headers
				})
				.then(function(res) {
					deferred.resolve(res.data);
				}, function(err) {
					deferred.reject(err.data);
				})

				return deferred.promise;
			}

			const get_all_sport = (data) => {
				let deferred = $q.defer();
				$http({
					method: 'GET',
					data: $httpParamSerializer(data),
					xhrFields: {withCredentials: false},
					url: '/api/get-all-sport/',
					headers: headers
				})
				.then(function(res) {
					deferred.resolve(res.data);
				}, function(err) {
					deferred.reject(err.data);
				})

				return deferred.promise;
			}

			const init_sponsors = (data) => {
				let deferred = $q.defer();
				$http({
					method: 'GET',
					url: '/api/get-sponsor/' + data,
					headers: headers
				})
				.then(function(res) {
					deferred.resolve(res.data);
				}, function(err) {
					deferred.reject(err.data);
				})

				return deferred.promise;
			}

			const get_sports = function (data) {
				let deferred = $q.defer();

				$http({
					method: 'GET',
					xhrFields: {withCredentials: true},
					url: '/api/get-all-sport/' + data.game_id,
					headers: headers
				})
				.then(function(res) {
					deferred.resolve(res.data);
				}, function(err) {
					deferred.reject(err.data);
				})

				return deferred.promise;
			}

			const get_match = function (data) {
				let deferred = $q.defer();

				$http({
					method: 'GET',
					xhrFields: {withCredentials: true},
					url: '/api/get-sport-team/' + data.sport_id,
					headers: headers
					
				})
				.then(function(res) {
					deferred.resolve(res);
				}, function(err) {
					deferred.reject(err.data);
				})

				return deferred.promise;
			}


			let service = {};
			service.get_game_per_sport = get_game_per_sport;
			service.get_all_sport = get_all_sport;
			service.init_sponsors = init_sponsors;
			service.get_sports = get_sports;
			service.get_match = get_match;
			return service;
		}
})();