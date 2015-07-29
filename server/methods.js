Meteor.methods({
  updateOrderStatus: function (orderId, status) {
    if(!Meteor.user().isAdmin) {
      throw new Meteor.Error("Not Authorized");
    }
    Orders.update(orderId, {$set: {status: status}});
  },
  approveCustomer: function (customerId) {
    if(!Meteor.user().isAdmin) {
      throw new Meteor.Error("Not Authorized");
    }
    Meteor.users.update(customerId, {$set: {approved: true, disabled: false}});
  },
  disableCustomer: function (customerId) {
    if(!Meteor.user().isAdmin) {
      throw new Meteor.Error("Not Authorized");
    }
    Meteor.users.update(customerId, {$set: {approved: false, disabled: true}});
  },
  sendOrderEmail: function(orderId) {
    var body = 'A new order has been placed. You may view the order here:';
    body += '<a href="' + Meteor.absoluteUrl('orders/view/' + orderId) + '">Order</a>';

    var subject = 'New Innevape Wholesale Order';

    //this.unblock();

    Email.send({
      to: 'wholesale@innevape.com',
      from: 'wholesale@innevape.com',
      subject: subject,
      text: body
    });
    console.log('email sent');
  },
  sendCustomerApprovalEmail: function(companyName, phone) {
    var body = 'A new wholesale customer, ' + companyName + '- Phone: ' + phone + ' , has signed up. Click here to view pending customers:';
    body += '<a href="' + Meteor.absoluteUrl('users') + '">Customers</a>';

    var subject = 'New Innevape Wholesale Customer';

    this.unblock();

    Email.send({
      to: 'wholesale@innevape.com',
      from: 'wholesale@innevape.com',
      subject: subject,
      text: body
    });
    console.log('email sent');

  },

  updateUserInfo: function(comment,companyName, email, phone, _id) {
    if(!Meteor.user().isAdmin) {
      throw new Meteor.Error("Not Authorized");
    }
    console.log('test');
    console.log(_id);
    Meteor.users.update({_id: _id}, {
      $set: {
        'comment' : comment,
        'profile.companyName' : companyName,
        'emails.0.address' : email,
        'profile.phone' : phone
      }
    })
  }
});
