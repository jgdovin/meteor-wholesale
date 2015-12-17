Template.spreadsheet.onRendered(function () {
  var template = Template.instance();
  var spreadsheet = template.$('#wholesale');
  var data = [
    [Meteor.user().profile['companyName'], "15 ML Bottles", "", "", "", "", "", "", "Dripper Fuel", "", "", "", "30 ML Bottles", "", "", "", "", "", ""],
    [moment().format('MM-DD-YYYY'), '0 MG', '3 MG', '6 MG', '12 MG', '18 MG', '24 MG', 'Total', '0 DF', '3 DF', '6 DF', 'Total', '0 MG', '3 MG', '6 MG', '12 MG', '18 MG', '24 MG', 'Total'],
    ['Beehave', '','','','','','','rowTotal','NA','NA','NA','NA', '', '','','','','','rowTotal'],
    ['Blueberry Thrill', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Caramel Vapeuccino', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Carousel', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Cherry Bomb', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Chill Out', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Coolcumber', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Grapevape', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Heisenberg (The Blue)', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Heisenberg (Natural)', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Heisenberg Menthol', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Heisenberg Menthol (Natural)', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Hippie Puffs', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Holiday', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Key Largo', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Miami Nice', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Mocha Javape', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Pearnapple', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Roadrip', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Scarlett Kiss', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Se7en', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Soley', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Succer Punch', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['TNT Gold', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['TNT Menthol', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['TNT Red', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Vaperception', '','','','','','','rowTotal','NA','NA','NA','NA','', '','','','','','rowTotal'],
    ['Vapetrix', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['VMD (Vape My Day)', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Watermelenthol', '','','','','','','rowTotal','NA','NA','NA','NA','', '','','','','','rowTotal'],
    ['Watermelony', '','','','','','','rowTotal','NA','NA','NA','NA','', '','','','','','rowTotal'],
    ['Oak Age Blend - 15 & 30 ml Bottles'],
    ['Elegante', '','','','','','rowTotal','NA','NA','NA','NA','NA', '','','','','','rowTotal', 'NA'],
    ['General Custard', '','','','','','rowTotal','NA','NA','NA','NA','NA', '','','','','','rowTotal', 'NA'],
    ['Shanghai', '','','','','','rowTotal','NA','NA','NA','NA','NA', '','','','','','rowTotal', 'NA'],
    ['Triple Crown', '','','','','','rowTotal','NA','NA','NA','NA','NA', '','','','','','rowTotal', 'NA'],
    ['VMD - Private Stock', '','','','','','rowTotal','NA','NA','NA','NA','NA', '','','','','','rowTotal', 'NA'],
    ['Total Bottles', 'NA','NA','NA','NA','NA','colTotal','colTotal', 'NA','NA','NA', 'colTotal', 'NA','NA','NA','NA','NA','colTotal','colTotal'],
    ['totalBottles', '', '', 'enoughBottles'],
    ['Totals (Not a final invoice, does not include shipping)', '', '','','', '', '', 'Price Tiers:', '15ML', '30ML', '', 'Flat Rate'],
    ['15ML Premium Liquids', 'smallPrice','', 'Current Tier','','=IF(SUM(G40,H40,L40,R40,S40)>4999, "5000+", IF(SUM(G40,H40,L40,R40,S40) > 2499, "2500-4999", IF(SUM(G40,H40,L40,R40,S40) > 999, "1000-2499", IF(SUM(G40,H40,L40,R40,S40) > 249, "250-999", IF(SUM(G40,H40,L40,R40,S40) > 49, "50-249", "NA")))))',  '', '50-249', '$5.25', '$7.85','', 'Dripper Fuel','',  '$8.50'],
    ['30ML Premium Liquids', 'largePrice', '', 'Bottles For Next Tier','','=IF(SUM(G40,H40,L40,R40,S40)>4999, "NA", IF(SUM(G40,H40,L40,R40,S40) > 2499, 5000 - SUM(G40,H40,L40,R40,S40), IF(SUM(G40,H40,L40,R40,S40) > 999, 2500 - SUM(G40,H40,L40,R40,S40), IF(SUM(G40,H40,L40,R40,S40) > 249, 1000 - SUM(G40,H40,L40,R40,S40), IF(SUM(G40,H40,L40,R40,S40) > 49, 250 - SUM(G40,H40,L40,R40,S40), 50 - SUM(G40,H40,L40,R40,S40))))))', '', '250-999', '$5.00', '$7.50','', 'Oak Aged 15ml','', '$7.00'],
    ['Dripper Fuel', 'dripperPrice', '', '', '', '','', '1000-2499', '$4.85', '$7.35', '', 'Oak Aged 30ml','', '$10.00'],
    ['15ML Oak Aged', 'smallOakPrice', '', '', '', '','', '2500-4999', '$4.75', '$7.20'],
    ['30ML Oak Aged', 'largeOakPrice', '', '', '', '','', '5000+', '$4.50', '$7.05'],
    ['TOTAL PRICE', 'totalPrice']

  ];

  function valueRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);

    if(value == 'NA') {

      td.style.background = '#333';
      td.style.color = '#333';
    }

    if(value == 'Oak Age Blend - 15 & 30 ml Bottles') {
      td.style.background = 'darkOrange';
    }

  }

  function colTotalRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    total = 0;
    var numRows = row;
    if(col === 6 || col === 17) {
      numRows = 5;
    }
    for(i = row - numRows; i < row; i++) {
      total += parseInt(instance.getDataAtCell(i,col)) || 0;
    }
    data[row][col] = total;
    td.innerHTML = total;
  }

  function rowTotalRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);

    total = 0;
    var cell = 0;
    if(col === 7 || col === 18) {
      var numColumns = 6;
    } else if (col === 11) {
      var numColumns = 3;
    } else {
      var numColumns = 5;
    }
    for(i = col - numColumns; i < col; i++) {
      cell = parseInt(instance.getDataAtCell(row,i)) || 0;
      total += cell;
    }
    data[row][col] = total;
    td.innerHTML = total;
  }

  function totalBottleRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    var total = 0;
    var numCols = instance.countCols();
    for (i = 0; i < numCols; i++) {
      total += parseInt(instance.getDataAtCell(row-1, i)) || 0;
    }
    data[row][col] = total;
    td.innerHTML = total;
  }

  function enoughBottlesRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.style.color = "#ffffff";
    td.align = "center";
    if(instance.getDataAtCell(40,0) >= 50) {
      td.innerHTML = "Minimum Bottle Requirement Reached";
      td.style.background = "#51A351";
      $('[data-action="saveOrder"]').prop("disabled",false);
    } else {
      td.innerHTML = "NOT ENOUGH BOTTLES TO PLACE ORDER - Minimum Bottles: 50";
      td.style.background = "#BD362F";
      $('[data-action="saveOrder"]').prop("disabled",true);
    }
    data[row][col] = td.innerHTML;
  }

  function smallPriceRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    var bottles = parseInt(instance.getDataAtCell(39, 7));
    var totalBottles = parseInt(instance.getDataAtCell(40,0));
    var price = 5.25;
    if(totalBottles >= 5000) {
      price = 4.50;
    } else if (totalBottles >= 2500) {
      price = 4.75;
    } else if (totalBottles >= 1000) {
      price = 4.85;
    } else if (totalBottles >= 250) {
      price = 5.00;
    }
    var total = price * bottles;
    data[row][col] = accounting.formatNumber(total, 2, '');
    td.innerHTML = accounting.formatMoney(total);
  }

  function largePriceRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    var bottles = parseInt(instance.getDataAtCell(39, 18));
    var totalBottles = parseInt(instance.getDataAtCell(40,0));
    var price = 7.85;
    if(totalBottles >= 5000) {
      price = 7.05;
    } else if (totalBottles >= 2500) {
      price = 7.20;
    } else if (totalBottles >= 1000) {
      price = 7.35;
    } else if (totalBottles >= 250) {
      price = 7.50;
    }
    var total = price * bottles;
    data[row][col] = accounting.formatNumber(total, 2, '');
    td.innerHTML = accounting.formatMoney(total);
  }

  function dripperPriceRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    var bottles = parseInt(instance.getDataAtCell(39, 11));
    total = bottles * 8.50;
    data[row][col] = accounting.formatNumber(total, 2, '');
    td.innerHTML = accounting.formatMoney(total);
  }

  function smallOakPriceRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    var bottles = parseInt(instance.getDataAtCell(39, 6));
    total = bottles * 7;
    data[row][col] = accounting.formatNumber(total, 2, '');
    td.innerHTML = accounting.formatMoney(total);
  }

  function largeOakPriceRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    var bottles = parseInt(instance.getDataAtCell(39, 17));
    total = bottles * 10;
    data[row][col] = accounting.formatNumber(total, 2, '');
    td.innerHTML = accounting.formatMoney(total);
  }

  function totalPriceRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    var total = 0;
    for (i=row - 5; i < row; i++) {
      total += parseFloat(instance.getDataAtCell(i,1)) || 0;
    }
    data[row][col] = accounting.formatNumber(total, 2);
    td.innerHTML = accounting.formatMoney(total);
  }

  Handsontable.renderers.registerRenderer('valueRenderer', valueRenderer);
  Handsontable.renderers.registerRenderer('rowTotalRenderer', rowTotalRenderer);
  Handsontable.renderers.registerRenderer('colTotalRenderer', colTotalRenderer);
  Handsontable.renderers.registerRenderer('totalBottleRenderer', totalBottleRenderer);
  Handsontable.renderers.registerRenderer('enoughBottlesRenderer', enoughBottlesRenderer);
  Handsontable.renderers.registerRenderer('smallPriceRenderer', smallPriceRenderer);
  Handsontable.renderers.registerRenderer('largePriceRenderer', largePriceRenderer);
  Handsontable.renderers.registerRenderer('dripperPriceRenderer', dripperPriceRenderer);
  Handsontable.renderers.registerRenderer('smallOakPriceRenderer', smallOakPriceRenderer);
  Handsontable.renderers.registerRenderer('largeOakPriceRenderer', largeOakPriceRenderer);
  Handsontable.renderers.registerRenderer('totalPriceRenderer', totalPriceRenderer);

  spreadsheet.handsontable({
    data: data,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: false,
    formulas: true,
    colWidths: [180, 60, 60, 60, 60, 70, 60, 80, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    beforeChange: function(changes, source) {
      for (var i = changes.length - 1; i >= 0; i--) {
        if(changes[i][1] >= 1 && changes[i][1] <= 17 && changes[i][0] >= 2 && changes[i][0] <= 32) {
          if(changes[i][3] % 5 != 0) {
            alert('Must be a multiple of 5');
            return false;
          }
        }
      }
    },
    columns: [
      {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ],
    mergeCells: [
      {row: 0, col: 1, rowspan: 1, colspan: 7},
      {row: 0, col: 8, rowspan: 1, colspan: 4},
      {row: 41, col: 0, rowspan: 1, colspan: 3},
      {row: 0, col: 12, rowspan: 1, colspan: 7},
      {row: 33, col: 0, rowspan: 1, colspan: 19},
      {row: 41, col: 3, rowspan: 1, colspan: 2},
      {row: 43, col: 3, rowspan: 1, colspan: 2},
      {row: 42, col: 11, rowspan: 1, colspan: 2},
      {row: 43, col: 11, rowspan: 1, colspan: 2},
      {row: 44, col: 11, rowspan: 1, colspan: 2},
      {row: 40, col: 3, rowspan: 1, colspan: 6}
    ],
    cells: function(row, col, prop) {
      var cellProperties = {};
      cellProperties.style = {};
      if (row % 2 === 0) {

      }

      if (row === 30 && col ===0) {
        cellProperties.renderer = 'valueRenderer';
      }

      if (this.instance.getData()[row][col] === 'NA') {
        cellProperties.renderer = "valueRenderer";
        cellProperties.readOnly = true;
      }

      if(this.instance.getData()[row][col] === 'rowTotal') {
        cellProperties.renderer = "rowTotalRenderer";
        cellProperties.readOnly = true;
      }
      if(this.instance.getData()[row][col] === 'colTotal') {
        cellProperties.renderer = "colTotalRenderer";
        cellProperties.readOnly = true;
      }
      if(this.instance.getData()[row][col] === 'totalBottles') {
        cellProperties.renderer = "totalBottleRenderer";
        cellProperties.readOnly = true;
      }
      if(this.instance.getData()[row][col] === 'enoughBottles') {
        cellProperties.renderer = "enoughBottlesRenderer";
        cellProperties.readOnly = true;
      }

      if(this.instance.getData()[row][col] === 'smallPrice') {
        cellProperties.renderer = "smallPriceRenderer";
        cellProperties.readOnly = true;
      }
      if(this.instance.getData()[row][col] === 'largePrice') {
        cellProperties.renderer = "largePriceRenderer";
        cellProperties.readOnly = true;
      }
      if(this.instance.getData()[row][col] === 'dripperPrice') {
        cellProperties.renderer = "dripperPriceRenderer";
        cellProperties.readOnly = true;
      }
      if(this.instance.getData()[row][col] === 'smallOakPrice') {
        cellProperties.renderer = "smallOakPriceRenderer";
        cellProperties.readOnly = true;
      }
      if(this.instance.getData()[row][col] === 'largeOakPrice') {
        cellProperties.renderer = "largeOakPriceRenderer";
        cellProperties.readOnly = true;
      }
      if(this.instance.getData()[row][col] === 'totalPrice') {
        cellProperties.renderer = "totalPriceRenderer";
        cellProperties.readOnly = true;
      }

      return cellProperties;
    },
    cell: [
      {row: 33, col: 0, className: 'htCenter aged'}
    ]
  });

  var ssInstance = $('#wholesale').handsontable('getInstance');
  $('#wholesale').find('table').addClass('zebraStyle');
  $('[data-action="saveOrder"]').on('click', function() {
    var total = 0;
    for (i=42; i < 47; i++) {
      total += parseFloat(ssInstance.getDataAtCell(i,1)) || 0;
    }

    var orderId = Orders.insert({order : ssInstance.getData(), orderId: '', status: 'pending', total: total, numBottles: ssInstance.getDataAtCell(40,0)});
    Meteor.call('sendOrderEmail', orderId);
    Router.go('/orders/view/' + orderId);
  });
});