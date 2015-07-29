(function ($) {

  'use strict';

  var hotPrint = function (instance) {
    var _self = this;
    _self.instance = instance;

    this.printToHtml = function () {
      var _grid = _self.instance;
      var numRows = _self.instance.countRows();
      var numCols = _self.instance.countCols();
      var r, c;
      var rows = [], cols = [], headers = [];
      var cellNode;
      var topRow = _self.instance.getDataAtRow(0);

      _self.instance.destroyEditor();
      var background = '';
      var color = '';
      for (r = 0; r < 35; r++) {

        var width = '80px';
        cols = [];
        for (c = 0; c < numCols; c++) {
          background = '#fff';
          color = '#000';

          if(r % 2 == 0) {
            background = '#ccc';
          }
          cellNode = _grid.getDataAtCell(r, c);
          if(cellNode === 'NA') {
            background = '#aaa';
            color = '#aaa';
          }
          if(cellNode == undefined) {
            cellNode = '';
          }
          if(c===0) {
            width = '200px';
          }

          cols.push('<td height="1" style="color: ' + color + ' ;border: .5px solid #000; background-color: ' + background + '; width: ' + width + '; font-size: .7em">' + cellNode + '</td>');
        }
        rows.push(cols.join(''));
      }

      var table = [
        '<table class="table table-bordered" style="border-collapse: collapse;">',
        '<tbody>',
        '<tr>' + rows.join('</tr>\n<tr style="height: 5px;">') + '</tr>',
        '</tbody>',
        '</table>'
      ].join('\n');

      return table;
    }

    this.printToElement = function ($element) {
      $($element).html(_self.printToHtml());
    };

    this.printToWindow = function (w) {
      w.onload = function () {
        setTimeout(function () {
          _self.printToElement(w.document.body);
        });
      };
    };
  }

  $.extend(true, window, {
    HotTable: {
      Plugins: {
        Print: hotPrint
      }
    }
  });
}(jQuery));