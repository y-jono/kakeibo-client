import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('expences', function() {
    this.route('index', {path: "/"});
    this.route('new');
  });
});

export default Router;
