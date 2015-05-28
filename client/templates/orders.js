Template.orders.onCreated(function(){
  this.subscribe('orders', {owner: Meteor.userId()});
});

Template.orders.helpers({
  orders : function() {
    return Orders.find({}, {sort: {createdAt: -1}});
  },
  formatTime: function(value) {
    return moment(value).format('MM-DD-YYYY');
  }
});