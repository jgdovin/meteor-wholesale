// publish posts
Meteor.publish('ordersById', function (limiter) {
  check(limiter, String);
  return Orders.find({_id: limiter});
});

Meteor.publish('myOrders', function () {
  return Orders.find({owner: this.userId}, {fields: {order: false}});
});

Meteor.publish('allUsers', function () {
  return Meteor.users.find({},
    {
      fields: {
        phone: 1
      }
    });
});

Meteor.publish('oneUser', function(limiter) {
  check(limiter, String);
  return Meteor.users.find({_id: limiter}, {
      fields: {
        isAdmin :1,
        emails: 1,
        profile: 1,
        comment: 1
      }
    }
  )
});

Meteor.publish('userData', function () {
  if (!this.userId) return null;
  return Meteor.users.find(this.userId, {
    fields: {
      isAdmin: 1,
      approved: 1,
      disabled: 1,
      comment: 1
    }
  });
});