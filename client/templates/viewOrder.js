Template.viewOrderOutter.onCreated(function() {
  this.subscribe('ordersById',Router.current().params._id);
});

Template.viewOrderOutter.events({
  "click [data-action=print]": function(event, template) {
    var instance = template.$('#wholesale').handsontable('getInstance');
    var printPlugin = new HotTable.Plugins.Print(instance);
    Meteor.pdf.save(printPlugin.printToHtml(), 'order');
  }
});

Template.viewOrderOutter.helpers({
  test : function() {
    return 'testing';
  }
});

Template.viewOrder.onRendered(function () {
  var currentOrder = Orders.findOne();

  var template = Template.instance();

  var spreadsheet = template.$('#wholesale');
  var data = currentOrder.order;
  data[0][0] = data[0][0] + ' - Order #' + currentOrder.orderId
  function valueRenderer(instance, td, row, col, prop, value, cellProperties) {

    if(value == 'NA') {
      Handsontable.renderers.TextRenderer.apply(this, arguments);

      td.style.background = '#333';
      td.style.color = '#333';
    }

    if(value == 'Oak Age Blend - 15 & 30 ml Bottles') {
      Handsontable.renderers.TextRenderer.apply(this, arguments);

      td.style.background = 'darkOrange';
    }

  }

  Handsontable.renderers.registerRenderer('valueRenderer', valueRenderer);

  spreadsheet.handsontable({
    data: data,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: false,
    formulas: true,
    colWidths: [130, 50, 50, 50, 50, 60, 50, 70, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,50,50,50,50,50,50],
    afterValidate: function(isValid, value, row, prop, source) {
      console.log(isValid);
    },
    beforeChange: function(changes, source) {
      for (var i = changes.length - 1; i >= 0; i--) {
        if(changes[i][1] >= 1 && changes[i][1] <= 6 && changes[i][0] >= 2 && changes[i][0] <= 28) {
          if(changes[i][3] % 5 != 0) {
            alert('Must be a multiple of 5');
            return false;
          }
        }
        if(changes[i][1] >= 12 && changes[i][1] <= 17 && changes[i][0] >= 2 && changes[i][0] <= 28) {
          if(changes[i][3] % 5 != 0) {
            alert('Must be a multiple of 5');
            return false;
          }
        }

      }
    },
    columns: [
      {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ],
    mergeCells: [
      {row: 0, col: 1, rowspan: 1, colspan: 7},
      {row: 0, col: 8, rowspan: 1, colspan: 4},
      {row: 41, col: 0, rowspan: 1, colspan: 4},
      {row: 0, col: 12, rowspan: 1, colspan: 4},
      {row: 0, col: 16, rowspan: 1, colspan: 7},
      {row: 33, col: 0, rowspan: 1, colspan: 23},
      {row: 42, col: 3, rowspan: 1, colspan: 2},
      {row: 43, col: 3, rowspan: 1, colspan: 2},
      {row: 42, col: 11, rowspan: 1, colspan: 2},
      {row: 43, col: 11, rowspan: 1, colspan: 2},
      {row: 44, col: 11, rowspan: 1, colspan: 2},
      {row: 45, col: 11, rowspan: 1, colspan: 2},
      {row: 40, col: 3, rowspan: 1, colspan: 6}
    ],
    cells: function(row, col, prop) {
      var cellProperties = {};
      cellProperties.style = {};
      if (row === 0 && col === 0) {

      }

      if (row === 33 && col ===0) {
        cellProperties.renderer = 'valueRenderer';
      }


      if (this.instance.getData()[row][col] === 'NA') {
        cellProperties.renderer = "valueRenderer";
        cellProperties.readOnly = true;
      }

      cellProperties.readOnly = true;
      return cellProperties;
    },
    cell: [
      {row: 33, col: 0, className: 'htCenter aged'}
    ]
  });

  var ssInstance = $('#wholesale').handsontable('getInstance');
  $('#wholesale').find('table').addClass('zebraStyle');

  $('[data-action="saveOrder"]').on('click', function() {
    Orders.insert({order : ssInstance.getData()});
  });

  $('#test2').on('click', function() {
    ssInstance.loadData(Session.get('table'));
  });
});