Template.users.onCreated(function () {
  this.subscribe('allUsers');
});

Template.customerActions.events({
  "click [data-action=approve]": function (event, template) {
    Meteor.call("approveCustomer", this._id);
    event.preventDefault();
  },
  "click [data-action=edit]": function (event, template) {
    event.preventDefault();
    Router.go('/users/edit/' + this._id);
  },
  "click [data-action=disable]": function(event, template) {
    Meteor.call("disableCustomer", this._id);
  }
})