import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return { users : [ {id:'id1', mydata:'data1' } ] };
    },
});
