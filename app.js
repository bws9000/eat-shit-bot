'use strict';

//require('custom-env').env('staging');

var eatShitBot = require('./src/eat-shit-bot/eat-shit-bot');

var App = (function() {

	var Bot;
	var phrase = 'Satan';
	var retort_phrase = 'not today satan';
	var enable_retort = true;

	var initialize = function() {
		Bot = new eatShitBot();
	};

	var stream = function() {
		Bot.getStream(phrase);
	};

	var get = function() {
		Bot.getTweets(phrase, 100);
	};

	var streamAndRetweet = function() {
		Bot.streamAndRetweet(phrase, retort_phrase, enable_retort);
	};

	return {
		init: function() {
			initialize();
		},
		stream: function() {
			stream();
		},
		get: function() {
			get();
		},
		streamAndRetweet: function() {
			streamAndRetweet();
		}
	}

}());

App.init();
App.streamAndRetweet();
//App.get();
