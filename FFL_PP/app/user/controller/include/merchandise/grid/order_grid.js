function orderGrid() {
    return order_grid = Ext.create('Ext.grid.Panel', {
        id: 'order_grid',
        store: {
            proxy: {
                type: 'ajax',
                url: '/order'
            },
            autoLoad: true,
            autoSync: true,
            model: 'ORDER_MODEL'
        },
        loadMask: true,
        viewConfig: {
            emptyText: 'No records',
            stripeRows: true
        },
        listeners: {
            rowclick : function(grid,row,e) {
                var data = row.data;
                orderPOListTab(data);
            }
        },
        collapsible: true,
        animCollapse: false,
        columns: [
            {
                header: 'STYLE',
                dataIndex: 'style',
                align: 'center',
                flex: 1,
                renderer: function(val, meta, record){
                    if(record.data.status >= approved){
                        //meta.style = "background-color: #EEFFEE !important; color: #090;";
                    }
                    return val;
                }
            },
            {
                header: 'BUYER',
                dataIndex: 'buyer',
                align: 'center',
                flex: 1,
                renderer: function(val, meta, record){
                    if(record.data.status >= approved){
                        //meta.style = "background-color: #EEFFEE !important; color: #090;";
                    }
                    return val;
                }
            },
            {
                header: 'STATUS',
                dataIndex: 'status',
                renderer: function(val, meta, record){
                    if(val == unapproved){
                        meta.style = "background-color: #FFEEEE !important; color: #900;";
                        return "UNAPPROVED";
                    }else if(val >= approved){
                        meta.style = "background-color: #EEFFEE !important; color: #090;";
                        return "APPROVED";
                    }
                },
                align: 'center',
                flex: 0.7
            },
            {
                xtype:'actioncolumn',
                header: 'Add PO',
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/create.png',
                        tooltip: 'PO',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            if(rec.data.status == unapproved) {
                                var data = {};
                                    data.order = rec.data.id;
                                    data.buyer = rec.data.buyerTable.id;
                                    data.style = rec.data.styleTable.id;
                                poFormWindow(data);
                            }
                            else if(rec.data.status >= approved) {
                                Ext.MessageBox.alert('Unauthorized',
                                    'You are not authorized to perform this task. ' +
                                    'Repeatedly doing this might block your ID');
                            }
                        }
                    }
                ],
                flex: 1
            },
            {
                xtype:'actioncolumn',
                header: 'View PO`s',
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
            },
            {
                xtype:'actioncolumn',
                header: 'Remove',
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/delete.png',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            socket.emit('DestroyOrder', rec.id).on('DestroyOrder', function (message) {
                              if (message == "success") {
                                if(Ext.getCmp('order_grid')){
                                  Ext.getCmp('order_grid').getStore().load();
                                }
                                Ext.MessageBox.alert('success', 'Successfully data inserted');
                              } else if(message == "error") {
                                    Ext.MessageBox.alert('Error', 
                                        'Please contact with the developer');
                              } else {
                                    Ext.MessageBox.alert('Unauthorized',
                                        'You are not authorized to perform this task. ' +
                                        'Repeatedly doing this might block your ID');
                              }
                            });
                        }
                    }
                ],
                flex: 1
            }
		]
    });
}
