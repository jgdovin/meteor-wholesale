Accounts.onCreateUser(function(options, user) {
  var companyName = options.profile.companyName;
  var phone = options.profile.phone;
  Meteor.call('sendCustomerApprovalEmail', companyName, phone);
  user.profile = options.profile;
  return user;
});

Meteor.startup(function() {
  smtp = {
    username: 'wholesale@innevape.com',
    password: 'Wholesale2014!',
    server: 'innevapecom.domain.com',
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});