export function initialize(application) {
  var store = application.container.lookup('service:store');

  var data = {
    data: [{
      type: 'expence',
      attributes: {
        section: '食費',
        amount: 100,
        date: '2016-09-09',
        subsection: '外食',
        detail: 'コーラ',
        account: '1',
        way: '1',
        isIncome: 1,
        debitDay: '1',
        shop: '1'
      },
      id: '1'
    },{
      type: 'expence',
      attributes: {
        section: '食費',
        amount: 100,
        date: '2016-09-09',
        subsection: '外食',
        detail: 'コーラ',
        account: '1',
        way: '1',
        isIncome: 1,
        debitDay: '1',
        shop: '1'
      },
      id: '2'
    }]
  };

  store.pushPayload('expence', data);
}

export default {
  name: 'load-master-data',
  initialize
};

