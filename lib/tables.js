TabularTables = {};
var defaultTable = {
  collection: Orders,
  extraFields: ['status', 'orderId'],
  autoWidth: false,
  columns: [
    {data: "orderId", title: "ID"},
    {data: "company", title: "Customer"},
    {
      data: "total",
      title: "Total",
      render: function (val, type, doc) {
        return accounting.formatMoney(val);
      }
    },
    {data: "numBottles", title: "Total Bottles"},
    {
      data: "createdAt",
      title: "Order Placed",
      render: function (val, type, doc) {
        return moment(val).format('MM-DD-YYYY');
      }
    },
    {
      title: "Actions",
      tmpl: Meteor.isClient && Template.rowActions
    }
  ]
};

var pendingOrders = Object.create(defaultTable);
pendingOrders.name = "pendingOrders";
pendingOrders.selector = function () {
  return {status: 'pending'};
};
var onHoldOrders = Object.create(defaultTable);
onHoldOrders.name = "onHoldOrders";
onHoldOrders.selector = function () {
  return {status: 'onHold'};
};
var completedOrders = Object.create(defaultTable);
completedOrders.name = "completedOrders";
completedOrders.selector = function () {
  return {status: 'complete'};
};

var myOrders = Object.create(defaultTable);
myOrders.name = "myOrders";
myOrders.selector = function (userId) {
  return {owner: userId};
};
myOrders.columns = [
  {data: "orderId", title: "ID"},
  {data: "company", title: "Customer"},
  {
    data: "total",
    title: "Total",
    render: function (val, type, doc) {
      return accounting.formatMoney(val);
    }
  },
  {data: "numBottles", title: "Total Bottles"},
  {
    data: "createdAt",
    title: "Order Placed",
    render: function (val, type, doc) {
      return moment(val).format('MM-DD-YYYY');
    }
  },
  {
    title: "Actions",
    tmpl: Meteor.isClient && Template.customerRowActions
  }
]

if (Meteor.isClient) {
  Template.registerHelper('TabularTables', TabularTables);
  Template.rowActions.events({
    "click [data-action=pending]": function (event, template) {
      event.preventDefault();
      Meteor.call("updateOrderStatus", this._id, "pending");
    },
    "click [data-action=hold]": function (event, template) {
      event.preventDefault();
      Meteor.call("updateOrderStatus", this._id, "onHold");
    },
    "click [data-action=complete]": function (event, template) {
      event.preventDefault();
      Meteor.call("updateOrderStatus", this._id, "complete");
    },
    "click [data-action=view]": function (event, template) {
      event.preventDefault();
      Router.go('/orders/view/' + this._id);
    }
  });
  Template.customerRowActions.events({
    "click [data-action=view]": function (event, template) {
      event.preventDefault();
      Router.go('/orders/view/' + this._id);
    }
  });
}
;


var customerTable = {
  name: 'Users',
  collection: Meteor.users,
  extraFields: ['approved', 'disabled'],
  autoWidth: false,
  columns: [
    {data: "_id", title: "ID"},
    {data: "profile.companyName", title: "Customer"},
    {
      data: "profile.phone",
      title: "Phone"
    },
    {
      title: "Actions",
      tmpl: Meteor.isClient && Template.customerActions
    }
  ]
};

var pendingCustomers = Object.create(customerTable);
pendingCustomers.selector = function () {
  return {
    $and: [
      {$or: [{approved: false}, {approved: null}]},
      {$or: [{disabled: false}, {disabled: null}]}
    ]
  };
}
pendingCustomers.name = 'pendingCustomers';
var approvedCustomers = Object.create(customerTable);
approvedCustomers.selector = function () {
  return {
    $and: [{approved: true}, {
      $or: [{disabled: false}, {disabled: null}]
    }]
  }
};
approvedCustomers.name = 'approvedCustomers';

var disabledCustomers = Object.create(customerTable);
disabledCustomers.selector = function () {
  return {disabled: true}
};
disabledCustomers.name = 'disabledCustomers';


TabularTables.pendingOrders = new Tabular.Table(pendingOrders);
TabularTables.onHoldOrders = new Tabular.Table(onHoldOrders);
TabularTables.completedOrders = new Tabular.Table(completedOrders);
TabularTables.myOrders = new Tabular.Table(myOrders);
TabularTables.pendingCustomers = new Tabular.Table(pendingCustomers);
TabularTables.approvedCustomers = new Tabular.Table(approvedCustomers);
TabularTables.disabledCustomers = new Tabular.Table(disabledCustomers);