Meteor.methods({
  updateOrderStatus: function (orderId, status) {
    if(!Meteor.user().isAdmin) {
      throw new Meteor.Error("Not Authorized");
    }
    Orders.update(orderId, {$set: {status: status}});
  }
});