function poCodeGrid(rec) {
    var myCodeQuantityArray = [];
    var myCodeQuantityVal = 0;
    return po_code_grid = Ext.create('Ext.grid.Panel', {
        border: false,
        id: 'po_code_grid'+rec.id,
        autoScroll: true,
        height: 200,
        store: {
            proxy: {
                type: 'ajax',
                url: '/po_code/'+rec.id
            },
            autoLoad: true,
            autoSync: false,
            model: 'PO_CODE_MODEL'
        },
        listeners: {
            rowclick : function(grid,row,e) {
                var data = row.data;
                poCodeColorTab(data);
            }
        },
        features: [
            {
                ftype: 'summary',
                dock: 'bottom'
            }
        ],
        tbar:[
            {
                xtype:'button',
                text:'ADD CODE / LOT',
                icon: '/uploads/icons/create.png',
                iconCls: 'add',
                name:'reload',
                id:'po_code_gridTabReload'+rec.id,
                tooltip:'ADD CODE / LOT',
                border: 1,
                style: {
                    borderColor: 'blue',
                    borderStyle: 'solid'
                },
                handler: function(){
                    poCodeFormWindow(rec);
                }
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
                    /*var items = view.getStore().data.items;
                    if(items.length>0){
                        for (var i = items.length - 1; i >= 0; i--) {
                            myCodeQuantityArray.push(parseInt(items[i].data.quantity)*parseInt(items[i].data.piece));
                            myCodeQuantityVal+=parseInt(items[i].data.quantity)*parseInt(items[i].data.piece);
                        };
                        console.log(myCodeQuantityVal);
                    }*/
                }
            }
        },
        columnLines: true,
        columns: [
            {
                header: 'NAME',
                dataIndex: 'name',
                align: 'center',
                flex: 2
            },
            {
                header: 'PO NO',
                dataIndex: 'po_no',
                align: 'center',
                flex: 1,
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return '<b> Total => </b>';
                }
            },
            {
                header: 'QTY',
                dataIndex: 'quantity',
                align: 'right',
                summaryType: 'sum',
                renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                    var piece = record.get('piece');
                    var quantity = record.get('quantity');
                    return parseInt(piece)*parseInt(quantity);
                },
                summaryRenderer: function(value, summaryData, dataIndex) {
                    var items = Ext.getCmp('po_code_grid'+rec.id).getStore().data.items;
                    var myCodeQuantityVal = 0;
                    if(items.length>0){
                        for (var i = items.length - 1; i >= 0; i--) {
                            myCodeQuantityVal+=parseInt(items[i].data.quantity)*parseInt(items[i].data.piece);
                        };
                    }
                    return '<b>'+myCodeQuantityVal+'</b>';
                },
                flex: 0.8
            },
            {
                header: ' ',
                dataIndex: 'quantity',
                align: 'left',
                flex: 0.45,
                renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                    return 'PCS';
                },
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return 'PCS';
                },
            },
            {
                xtype:'actioncolumn',
                header: 'TRIMS',
                width:70,
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/enter.png',
                        tooltip: 'TRIMS LIST',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            trimsTab(rec);
                        }
                    }
                ]
            },
		]
    });
}