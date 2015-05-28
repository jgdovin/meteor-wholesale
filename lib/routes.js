Router.onBeforeAction(function(){
  if(!Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});

Router.configure({
  layoutTemplate: 'appLayout'
});

Router.map(function() {
  this.route('dashboard', {
    path: '/',
    onBeforeAction: function() {
      Router.go('/orders/new');
    }
  });

  this.route('spreadsheet', {
    path: '/orders/new'
  });

  this.route('orders', {
    path: '/orders/view'
  });

  this.route('viewOrder', {
    path: '/orders/view/:_id',
    data: function(){
      return {_id: this.params._id};
    },
    waitOn : function() {
      return [
        Meteor.subscribe('orders', {_id:this.params._id})
      ]
    },
    data: function () {
      return {
        order: Orders.findOne(),
        docType: 'Quote'
      }
    }
  })
});