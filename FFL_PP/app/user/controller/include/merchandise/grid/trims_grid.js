function trimsGrid(rec) {
    return trims_grid = Ext.create('Ext.grid.Panel', {
        border: false,
        title: '<center>TRIMS LIST - FOR FOLLOW UP</center>',
        id: 'trims_grid'+rec.id,
        autoScroll: true,
        width: '100%',
        store: {
            proxy: {
                type: 'ajax',
                url: '/trims/'+rec.id
            },
            autoLoad: true,
            autoSync: false,
            model: 'TRIM_MODEL'
        },
        listeners: {
            rowclick : function(grid,row,e) {
                var data = row.data;
                //poCodeColorTab(data);
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
                text:'ADD NEW ITEM',
                icon: '/uploads/icons/create.png',
                iconCls: 'add',
                name:'reload',
                id:'trimsGridTabAddNew'+rec.id,
                tooltip:'ADD NEW ITEM',
                border: 1,
                style: {
                    borderColor: 'blue',
                    borderStyle: 'solid'
                },
                handler: function(){
                    trimsFormWindow(rec);
                }
            }
        ],
        autoScroll: true,
        loadMask: true,
        viewConfig: {
            stripeRows: true,
            emptyText: 'No records'
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
                width: 35
            },
            {
                header: 'ITEM NAME',
                dataIndex: 'item_name',
                align: 'center',
                flex: 1.2
            },
            {
                header: 'ITEM DESCRIPTION',
                dataIndex: 'item_description',
                align: 'center',
                flex: 3
            },
            {
                header: 'QTY / PCS',
                //dataIndex: 'unit',
                align: 'center',
                flex: 1,
                columns: [
                    {
                        dataIndex: 'quantity',
                        align: 'right',
                    }, 
                    {
                        dataIndex: 'unit',
                        width: 50
                    }
                ]
            },
            {
                header: 'COLOR',
                dataIndex: 'color',
                align: 'center',
                flex: 1
            },
            {
                header: 'QTY',
                align: 'center',
                flex: 1,
                columns: [
                    {
                        dataIndex: 'quantity',
                        align: 'right',
                        renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                            var order_quantity = record.get('order_quantity');
                            var quantity = record.get('quantity');
                            var t = parseInt(order_quantity)*parseInt(quantity);
                            //return parseInt(t+((parseInt(value)*7)/100));
                            return t;
                        }
                    }, 
                    {
                        dataIndex: 'unit',
                        width: 50
                    }
                ]

            },
            {
                header: 'SUPPLIER',
                dataIndex: 'supplier',
                align: 'center',
                flex: 1
            }
		]
    });
}