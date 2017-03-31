'use strict';

(() => {
	angular
		.module('app')
		.factory('SponsorService', SponsorService);

		SponsorService.$inject = ['$window', '$http', '$q'];

		const headers = {
			'content-type': 'application/x-www-form-urlencoded'
		};

		function SponsorService($window, $http, $q) {
			const add_sponsors = function(data) {
				let deferred = $q.defer();
				$http({
					method: 'POST',
					params: data,
					xhrFields: {withCredentials: false},
					url: '/api/add-sponsor/',
					headers: headers
				})
				.then(function(res) {
					// $window.location.href = '/#!/game-event';
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

			let service = {};
			service.add_sponsors = add_sponsors;
			service.init_sponsors = init_sponsors;
			
			return service;

		}
})();