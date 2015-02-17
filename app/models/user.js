import DS from 'ember-data';

export default DS.Model.extend({
    mydata:DS.attr('string'),
    other:DS.attr('string'),
  
});
