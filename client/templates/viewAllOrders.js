Template.pendingOrders.onRendered(function () {
  Meteor.subscribe('orders', {status: 'pending'});
});

Template.pendingOrders.helpers({
  orders: function () {
    return Orders.find({status: 'pending'});
  }
});

Template.onHoldOrders.onRendered(function () {
  Meteor.subscribe('orders', {status: 'onHold'});
});

Template.onHoldOrders.helpers({
  orders: function () {
    return Orders.find({status: 'onHold'});
  }
});

Template.completedOrders.onRendered(function () {
  Meteor.subscribe('orders', {status: 'complete'});
});

Template.completedOrders.helpers({
  orders: function () {
    return Orders.find({status: 'complete'});
  }
});

Template.rowActions.helpers({
  pending: function () {
    return this.status == 'pending';
  },
  onHold: function () {
    return this.status == 'onHold';
  },
  completed: function() {
    return this.status == 'complete';
  }
});