Template.orders.onCreated(function(){
  this.subscribe('myOrders');
});

Template.orders.helpers({
  orders : function() {
    return Orders.find({ownerId: Meteor.userId()}, {sort: {createdAt: -1}});
  },
  formatTime: function(value) {
    return moment(value).format('MM-DD-YYYY');
  }
});