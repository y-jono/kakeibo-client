import DS from 'ember-data';

export default DS.Model.extend({
   section: DS.attr(),
   amount: DS.attr(),
   date: DS.attr(),
   subsection: DS.attr(),
   detail: DS.attr(),
   account: DS.attr(),
   way: DS.attr(),
   isIncome: DS.attr(),
   debitDay: DS.attr(),
   shop: DS.attr()
});
