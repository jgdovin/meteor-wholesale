Template.userEdit.onCreated(function() {
  this.subscribe('oneUser', Router.current().params._id);
});

Template.userEdit.helpers({
  userData : function() {
    return Meteor.users.findOne({_id: Router.current().params._id});
  }
})

Template.userEdit.events({
  'submit form' : function(e, t) {
    e.preventDefault();

    Meteor.call('updateUserInfo', e.target.comment.value, e.target.companyName.value, e.target.email.value, e.target.phone.value, Router.current().params._id)

    Router.go('/users')
  }
});