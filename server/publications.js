// publish posts
Meteor.publish('orders', function(limiter) {
  if(limiter) {
    return Orders.find(limiter);
  }
  return Orders.find();
});

Meteor.publish('userData', function() {
  if(!this.userId) return null;
  return Meteor.users.find(this.userId, {fields: {
    isAdmin: 1,
  }});
});