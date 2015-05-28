Template.spreadsheet.onRendered(function () {
  var template = Template.instance();
  var spreadsheet = template.$('#wholesale');
  var data = [
    [Meteor.user().profile['company-name'], "15 ML Bottles", "", "", "", "", "", "", "Dripper Fuel", "", "", "", "30 ML Bottles", "", "", "", "", "", ""],
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
    ['Heisenberg Menthol', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Miami Nice', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Mocha Javape', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Pearnapple', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Scarlett Kiss', '','','','','','','rowTotal','','','','rowTotal', '','','','','','','rowTotal'],
    ['Se7en', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
    ['Soleéy', '','','','','','','rowTotal','NA','NA','NA','NA', '','','','','','','rowTotal'],
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
    ['=SUM(B34:S34)', '', '', '=IF(SUM(B34:S34) > 49, "Minimum Bottle Requirement Reached", "NOT ENOUGH BOTTLES TO PLACE ORDER - Minimum Bottles: 50")'],
    ['Totals (Not a final invoice, does not include shipping)', '', '','','', '', '', 'Price Tiers:', '15ML', '30ML'],
    ['15ML Premium Liquids', '=IF(SUM(G34,H34,L34,R34,S34)>4999, H34 * 4.5, IF(SUM(G34,H34,L34,R34,S34) > 2499, H34 * 4.75, IF(SUM(G34,H34,L34,R34,S34) > 999, H34 * 4.85, IF(SUM(G34,H34,L34,R34,S34) > 249, H34 * 5.00, IF(SUM(G34,H34,L34,R34,S34) > 49, H34 * 5.25, 0)))))','', 'Current Tier','','=IF(SUM(G34,H34,L34,R34,S34)>4999, "5000+", IF(SUM(G34,H34,L34,R34,S34) > 2499, "2500-4999", IF(SUM(G34,H34,L34,R34,S34) > 999, "1000-2499", IF(SUM(G34,H34,L34,R34,S34) > 249, "250-999", IF(SUM(G34,H34,L34,R34,S34) > 49, "50-249", "NA")))))',  '', '50-249', '$5.25', '$7.85'],
    ['30ML Premium Liquids', '=IF(SUM(G34,H34,L34,R34,S34)>4999, S34 * 4.5, IF(SUM(G34,H34,L34,R34,S34) > 2499, S34 * 4.75, IF(SUM(G34,H34,L34,R34,S34) > 999, S34 * 4.85, IF(SUM(G34,H34,L34,R34,S34) > 249, S34 * 5.00, IF(SUM(G34,H34,L34,R34,S34) > 49, S34 * 5.25, 0)))))', '', 'Bottles For Next Tier','','=IF(SUM(G34,H34,L34,R34,S34)>4999, "NA", IF(SUM(G34,H34,L34,R34,S34) > 2499, 5000 - SUM(G34,H34,L34,R34,S34), IF(SUM(G34,H34,L34,R34,S34) > 999, 2500 - SUM(G34,H34,L34,R34,S34), IF(SUM(G34,H34,L34,R34,S34) > 249, 1000 - SUM(G34,H34,L34,R34,S34), IF(SUM(G34,H34,L34,R34,S34) > 49, 250 - SUM(G34,H34,L34,R34,S34), 50 - SUM(G34,H34,L34,R34,S34))))))', '', '250-999', '$5.00', '$7.50'],
    ['Dripper Fuel', '=L34 * 8.50', '', '', '', '','', '1000-2499', '$4.85', '$7.35'],
    ['15ML Oak Aged', '=G34 * 7.00', '', '', '', '','', '2500-4999', '$4.75', '$7.20'],
    ['30ML Oak Aged', '=R34 * 10.00', '', '', '', '','', '5000+', '$4.50', '$7.05'],
    ['TOTAL PRICE', '=SUM(B37:B41)']

  ];

  function valueRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);

    if(value == 'NA') {

      td.style.background = '#333';
      td.style.color = '#333';
    }

    if(value == 'Minimum Bottle Requirement Reached') {
      td.style.background = '#51A351';
    }

    if(value == 'NOT ENOUGH BOTTLES TO PLACE ORDER - Minimum Bottles: 50') {
      td.style.background = '#BD362F';
    }

    if(value == 'Oak Age Blend - 15 & 30 ml Bottles') {
      td.style.background = 'darkOrange';
    }

  }

  function colTotalRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    total = 0;
    var numRows = row;
    if(column === 6 || column === 17) {
      numRows = 5;
    }
    for(i = row - numRows; i < row; i++) {
      total += parseInt(instance.getDataAtCell(i,column)) || 0;
    }
    data[row][column] = total;
    td.innerHTML = total;
  }

  function rowTotalRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);

    total = 0;
    var cell = 0;
    if(column === 7 || column === 18) {
      var numColumns = 6;
    } else if (column === 11) {
      var numColumns = 3;
    } else {
      var numColumns = 5;
    }
    for(i = column - numColumns; i < column; i++) {
      cell = parseInt(instance.getDataAtCell(row,i)) || 0;
      total += cell;
    }
    data[row][column] = total;
    td.innerHTML = total;
  }

  Handsontable.renderers.registerRenderer('valueRenderer', valueRenderer);
  Handsontable.renderers.registerRenderer('rowTotalRenderer', rowTotalRenderer);
  Handsontable.renderers.registerRenderer('colTotalRenderer', colTotalRenderer);

  spreadsheet.handsontable({
    data: data,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: false,
    formulas: true,
    colWidths: [280, 60, 60, 60, 60, 70, 60, 80, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    afterValidate: function(isValid, value, row, prop, source) {
      console.log(isValid);
    },
    beforeChange: function(changes, source) {
      for (var i = changes.length - 1; i >= 0; i--) {
        if(changes[i][1] >= 1 && changes[i][1] <= 6 && changes[i][0] >= 2 && changes[i][0] <= 26) {
          if(changes[i][3] % 5 != 0) {
            alert('Must be a multiple of 5');
            return false;
          }
        }
        if(changes[i][1] >= 12 && changes[i][1] <= 17 && changes[i][0] >= 2 && changes[i][0] <= 26) {
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
      {row: 0, col: 12, rowspan: 1, colspan: 7},
      {row: 27, col: 0, rowspan: 1, colspan: 19},
      {row: 36, col: 3, rowspan: 1, colspan: 2},
      {row: 37, col: 3, rowspan: 1, colspan: 2},
      {row: 34, col: 3, rowspan: 1, colspan: 6}
    ],
    cells: function(row, col, prop) {
      var cellProperties = {};
      cellProperties.style = {};
      if (row === 0 && col === 0) {

      }

      if (row === 27 && col ===0) {
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

      if (this.instance.getData()[row][col] == 'NOT ENOUGH BOTTLES TO PLACE ORDER - Minimum Bottles: 50') {
        cellProperties.className = 'test';
        console.log(prop);
      }
      var cellData = this.instance.getData()[row][col];
      if(typeof cellData === 'string') {
        if(cellData.includes('SUM')) {
          cellProperties.readOnly = true;
        }
      }

      return cellProperties;
    },
    cell: [
      {row: 27, col: 0, className: 'htCenter aged'}
    ]
  });

  var ssInstance = $('#wholesale').handsontable('getInstance');

  $('[data-action="saveOrder"]').on('click', function() {
    console.log(columnTotal(33, 7, ssInstance));
    //Orders.insert({order : ssInstance.getData()});
  });

  $('#test2').on('click', function() {
    ssInstance.loadData(Session.get('table'));
  });
});