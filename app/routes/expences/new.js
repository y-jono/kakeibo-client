import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        addExpence() {
            Ember.Logger.log("expence.new addExpence()");
        }
    }
});
