import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var users = undefined;
        users = this.store.find('user');
        console.log('got this :', JSON.stringify(users) );
        //return { users : users };
        return { users : [ {id:'id1', mydata:'data1' } ] };
    },
});
