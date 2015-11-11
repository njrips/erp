function pendingListOrderGrid() {
    return pending_list_order_grid = Ext.create('Ext.grid.Panel', {
        id: 'pending_list_order_grid',
        store: {
            proxy: {
                type: 'ajax',
                url: '/order_pending'
            },
            autoLoad: true,
            //autoSync: true,
            model: 'ORDER_MODEL'
        },
        loadMask: true,
        viewConfig: {
            emptyText: 'No records',
            listeners: {
                afterrender: function( self, eOpts ) {}
            }
        },
        columns: [
            {
                header: 'STYLE',
                dataIndex: 'style',
                align: 'center',
                flex: 1
            },
            {
                header: 'BUYER',
                dataIndex: 'buyer',
                align: 'center',
                flex: 1,
            },
            {
                header: 'STATUS',
                dataIndex: 'po_status',
                renderer: function(val, meta, record){
                    if(val == 0){
                        meta.style = "background-color: #FFEEEE !important; color: #900;";
                        return "NOT ASSIGNED";
                    }else if(val == 1){
                        meta.style = "background-color: #FFAA55 !important; color: #F10;";
                        return "PARTIALLY ASSIGNED";
                    }else if(val == 2){
                        meta.style = "background-color: #EEFFEE !important; color: #090;";
                        return "ALL ASSIGNED";
                    }
                },
                align: 'center',
                flex: 0.7
            },
            {
                xtype:'actioncolumn',
                header: 'ASSIGN LINE',
                align: 'center',
                flex: 1,
                items: [
                    {
                        icon: '/uploads/icons/line_assign.png',
                        tooltip: 'ASSIGN',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            if(rec.data.po_status == 2){
                                    Ext.MessageBox.alert('Error', 
                                        'No PO Left To Assign');
                            }else{
                                poAssignFormWindow(rec);
                            }
                        }
                    }
                ]
            },
            {
                xtype:'actioncolumn',
                header: 'VIEW PO`s',
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/eye.png',
                        tooltip: 'PO',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            viewPOWindow(rec.data);
                        }
                    }
                ],
                flex: 1
            }
		]
    });
}
