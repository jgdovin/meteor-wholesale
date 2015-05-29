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
    path: '/'
  });

  this.route('spreadsheet', {
    path: '/orders/new'
  });

  this.route('orders', {
    path: '/orders/view',
    waitOn: function() {
      return Meteor.subscribe('myOrders');
    }
  });

  this.route('viewOrder', {
    path: '/orders/view/:_id',
    waitOn : function() {
      console.log('test');
      return Meteor.subscribe('ordersById',this.params._id);

    }
  });

  this.route('viewAllOrders', {
    path: '/orders/viewAll',
    onBeforeAction: function() {
      if(!Meteor.user().isAdmin) {
        Router.go('/');
      }
      this.next();
    }
  });
});