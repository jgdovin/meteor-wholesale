// publish posts
Meteor.publish('ordersById', function(limiter) {
  check(limiter, String);
  return Orders.find({ _id : limiter });
});

Meteor.publish('myOrders', function() {
  return Orders.find({owner: this.userId}, {fields: {order: false}});
});

Meteor.publish('userData', function() {
  if(!this.userId) return null;
  return Meteor.users.find(this.userId, {fields: {
    isAdmin: 1
  }});
});