export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.namespace = '';

  // TODO: 日付	費目	内訳	収支	詳細	取扱	引落日	店名
  this.get('/expences', function() {
    return { data: [
      {
        type: 'expence',
        id: '1',
        attributes: {
          section: '食費',
          amount: 100,
          date: '2016-09-09',
          subsection: '外食',
          detail: 'コーラ',
          account: '1',
          way: '1',
          isIncome: 1,
          debitDay: '2016-09-09',
          shop: '1'
        },
      },
      {
        type: 'expence',
        id: '2',
        attributes: {
          section: '食費',
          amount: 100,
          date: '2016-09-09',
          subsection: '外食',
          detail: 'コーラ',
          account: '1',
          way: '1',
          isIncome: 1,
          debitDay: '2016-09-09',
          shop: '1'
        },
      }
      ]};    
  });
}
