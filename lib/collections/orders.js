Orders = new Mongo.Collection('orders');

Orders.before.insert(function(userId, doc){
  doc.createdAt = moment().valueOf();
  doc.owner = Meteor.userId();
  doc.company = Meteor.user().profile['company-name'];
});

Orders.allow({
  insert : function(userId, doc) {
    return userId;
  }
});