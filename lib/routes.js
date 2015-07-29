Router.onBeforeAction(function(){
  if(!Meteor.userId()) {
    this.render('login');
  } else if (Meteor.user().isAdmin) {
    this.next();
  } else if (!Meteor.user().approved) {
    this.render('authorized');
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

  this.route('users', {
    onBeforeAction: function() {
      if(!Meteor.user().isAdmin) {
        Router.go('/');
      }
      this.next();
    }
  });
  this.route('userEdit', {
    path: '/users/edit/:_id',
    onBeforeAction: function() {
      if(!Meteor.user().isAdmin) {
        Router.go('/');
      }
      this.next();
    }
  });

  this.route('spreadsheet', {
    path: '/orders/new'
  });
  this.route('print');

  this.route('orders', {
    path: '/orders/view',
    waitOn: function() {
      return Meteor.subscribe('myOrders');
    }
  });

  this.route('viewOrderOutter', {
    path: '/orders/view/:_id'
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