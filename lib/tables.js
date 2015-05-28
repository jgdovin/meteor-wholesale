TabularTables = {};
var defaultTable = {
  collection: Orders,
  extraFields: ['status'],
  autoWidth: false,
  columns: [
    {data: "_id", title: "ID"},
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
pendingOrders.name="pendingOrders";
pendingOrders.selector=function() { return {status: 'pending'}; };
var onHoldOrders = Object.create(defaultTable);
onHoldOrders.name="onHoldOrders";
onHoldOrders.selector=function() { return {status: 'onHold'}; };
var completedOrders = Object.create(defaultTable);
completedOrders.name="completedOrders";
completedOrders.selector=function() { return {status: 'complete'}; };

if(Meteor.isClient) {
  Template.registerHelper('TabularTables', TabularTables);
  Template.rowActions.events({
    "click [data-action=pending]": function(event, template) {
      event.preventDefault();
      Meteor.call("updateOrderStatus", this._id, "pending");
    },
    "click [data-action=hold]": function(event, template) {
      event.preventDefault();
      Meteor.call("updateOrderStatus", this._id, "onHold");
    },
    "click [data-action=complete]": function(event, template) {
      event.preventDefault();
      Meteor.call("updateOrderStatus", this._id, "complete");
    }
  });
};


TabularTables.pendingOrders = new Tabular.Table(pendingOrders);
TabularTables.onHoldOrders = new Tabular.Table(onHoldOrders);
TabularTables.completedOrders = new Tabular.Table(completedOrders);