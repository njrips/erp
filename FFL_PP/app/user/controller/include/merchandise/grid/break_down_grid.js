function breakDownGrid(rec, rec2, n) {
    var ratio;
    var ratio_total = 0;
    var ratio_quantity = 0;
    if(parseInt(n)>1){
        ratio = 'ASSORTED'
    }else{
        ratio = 'SOLID'
    }
    return break_down_grid = Ext.create('Ext.grid.Panel', {
        border: false,
        id: 'break_down_grid'+rec.id,
        title: ratio+' - '+rec.name+' - Total Quantity: '+rec.quantity,
        autoScroll: true,
        width: '100%',
        height: 250,
        store: breakDownStore(rec2),
        listeners: {
            rowclick : function(grid,row,e) {
                //var data = row.data;
            }
        },
        selType: 'cellmodel',
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
        ],
        tools: [{ 
            id: 'gear',
            handler: function(e, toolEl, panel, tc){
                if(Ext.getCmp('break_down_grid'+rec.id)){
                  Ext.getCmp('break_down_grid'+rec.id).getStore().load();
                } 
            }
        }],
        features: [
            {
                ftype: 'summary',
                dock: 'bottom'
            }
        ],
        autoScroll: true,
        loadMask: true,
        viewConfig: {
            stripeRows: true,
            emptyText: 'No records',
            listeners: {
                afterrender: function(self, eOpts) {
                    //console.log(view.getStore().data);
                },
                refresh: function(view) {
                    var items = view.getStore().data.items;
                    if(items.length>0){
                        //console.log(items);
                    }
                }
            }
        },
        columnLines: true,
        columns: [
            {
                header: '#',
                dataIndex: 'rowIndex',
                align: 'center',
                renderer : function(value, metaData, record, rowIndex)
                {
                    return rowIndex+1;
                },
                width: 30
            },
            {
                header: 'SIZE',
                dataIndex: 'size',
                align: 'center',
                flex: 1,
                field: {
                    xtype: 'combo',
                    name: 'size',
                    allowBlank: false,
                    //typeAhead: true,
                    //transform: 'stateSelect',
                    //forceSelection: true,
                    editable: false,
                    emptyText: 'Select Size...',
                    autoScroll: true,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    //selectOnFocus: true,
                    //selectOnTab: true,
                    triggerAction: 'all',
                    lazyRender: true,
                    store: {
                        fields: ['id', 'name'],
                        proxy: {
                            type: 'ajax',
                            url: '/size'
                        },
                        autoLoad: true,
                        autoSync: true
                    },
                    listeners: {
                        change: function ( self, value, oldValue, eOpts ){
                            var row = Ext.getCmp('break_down_grid'+rec.id).getSelectionModel().getSelection()[0].data.id;
                            var data = {};
                            data.id = row;
                            data.size = value;
                            if (value!=oldValue){
                                socket.emit('UpdateBreakDownSize', data).on('UpdateBreakDownSize', function (message) {
                                  if (message == "success") {
                                    if(Ext.getCmp('break_down_grid'+rec.id)){
                                      Ext.getCmp('break_down_grid'+rec.id).getStore().load();
                                    }
                                  } else if(message == "error") {
                                    Ext.MessageBox.alert('Error', 'Data not updated. \nPossible problem could be duplicate entry');
                                  }
                                });
                            }
                        }
                    }
                },
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return '<b> Total => </b>';
                }
            },
            {
                header: 'YEAR',
                dataIndex: 'year',
                align: 'center',
                flex: 1,
            },
            {
                header: 'RATIO',
                dataIndex: 'ratio',
                align: 'center',
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    ratio_total = value;
                    return '<b>'+value+'</b>';
                },
                flex: 0.8,
                editor: {
                    xtype:'numberfield',
                    minValue: 0,
                    allowBlank:false,
                    listeners: {
                        change: function ( self, value, oldValue, eOpts ){
                            var row = Ext.getCmp('break_down_grid'+rec.id).getSelectionModel().getSelection()[0].data.id;
                            var data = {};
                            data.id = row;
                            data.ratio = value;
                            if (value!=oldValue){
                                socket.emit('UpdateBreakDownRatio', data).on('UpdateBreakDownRatio', function (message) {
                                  if (message == "success") {
                                    if(Ext.getCmp('break_down_grid'+rec.id)){
                                      Ext.getCmp('break_down_grid'+rec.id).getStore().load();
                                    }
                                  } else if(message == "error") {
                                    Ext.MessageBox.alert('Error', 'Data not updated. \nPossible problem could be duplicate entry');
                                  }
                                });
                            }
                        }
                    }
                }
            },
            {
                header: 'ZIPPER',
                dataIndex: 'zipper_length',
                align: 'center',
                flex: 0.8,
                editor: {
                    xtype:'numberfield',
                    minValue: 0,
                    allowBlank:false,
                    listeners: {
                        change: function ( self, value, oldValue, eOpts ){
                            var row = Ext.getCmp('break_down_grid'+rec.id).getSelectionModel().getSelection()[0].data.id;
                            var data = {};
                            data.id = row;
                            data.zipper_length = value;
                            if (value!=oldValue){
                                socket.emit('UpdateBreakDownZipperLength', data).on('UpdateBreakDownZipperLength', function (message) {
                                  if (message == "success") {
                                    if(Ext.getCmp('break_down_grid'+rec.id)){
                                      Ext.getCmp('break_down_grid'+rec.id).getStore().load();
                                    }
                                  } else if(message == "error") {
                                    Ext.MessageBox.alert('Error', 'Data not updated. \nPossible problem could be duplicate entry');
                                  }
                                });
                            }
                        }
                    }
                }
            },
            {
                header: 'QTY',
                dataIndex: 'quantity',
                align: 'right',
                flex: 1,
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return '<b>'+value+'</b>';
                }
            },
            {
                header: 'TOTAL',
                dataIndex: 'quantity',
                align: 'right',
                flex: 1,
                renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                    var newVal = record.get('ratio');
                    var quantity = record.get('quantity');
                    ratio_quantity = quantity;
                    return parseInt(value)*parseInt(newVal);
                },
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return '<b>'+parseInt(ratio_total)*parseInt(ratio_quantity)+'</b>';
                }
            },
            {
                header: 'QTY+7%',
                dataIndex: 'quantity',
                align: 'right',
                flex: 1,
                renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                    return parseInt(value+((parseInt(value)*7)/100));
                },
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return '<b>'+parseInt(value+((parseInt(value)*7)/100))+'</b>';
                }
            },
            {
                header: 'TOTAL+7%',
                dataIndex: 'quantity',
                align: 'right',
                flex: 1,
                renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                    var newVal = record.get('ratio');
                    var quantity = record.get('quantity');
                    ratio_quantity = quantity;
                    var t = parseInt(value)*parseInt(newVal);
                    return parseInt(t+((parseInt(value)*7)/100));
                },
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    var t = parseInt(ratio_total)*parseInt(ratio_quantity);
                    return '<b>'+parseInt(t+((parseInt(value)*7)/100))+'</b>';
                }
            },
            /*{
                xtype:'actioncolumn',
                header: ' ',
                width:25,
                align: 'center',
                items: []
            }*/
		]
    });
}