import DS from 'ember-data';

// string, number, boolean, date
export default DS.Model.extend({
   section: DS.attr("string"),
   amount: DS.attr("number"),
   date: DS.attr("date"),
   subsection: DS.attr("string"),
   detail: DS.attr("string"),
   account: DS.attr("string"),
   way: DS.attr("string"),
   isIncome: DS.attr("boolean"),
   debitDay: DS.attr("date"),
   shop: DS.attr("string")
});
