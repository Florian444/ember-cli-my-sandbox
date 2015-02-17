import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';

var App;
var server;

module('Acceptance: Showusers', {
  setup: function() {
    App = startApp();
    server = new Pretender( function() {
        this.get('/users', function(request) {
            var users = { users : [ {id:'id1', mydata:'data1' } ] }
            console.log('pretender is returning users : ' , JSON.stringify(users) );
            return [200, {"Content-Type": "application/json"}, JSON.stringify(users) ];
        });
    });
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(currentPath(), 'index');
    equal(find('h1').length, 1);
    equal(find('h2').length, 1);
  });
});
