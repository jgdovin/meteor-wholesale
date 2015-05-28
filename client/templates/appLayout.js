Deps.autorun(function() {
  Meteor.subscribe('userData');
});

Template.appLayout.helpers({
  isAdmin: function() {
    return Meteor.user().isAdmin;
  }
});