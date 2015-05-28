// publish posts
Meteor.publish('orders', function(limiter) {
  if(limiter) {
    return Orders.find(limiter);
  }
  return Orders.find();
});