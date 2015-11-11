function currencyGrid() {
    return currency_grid = Ext.create('Ext.grid.Panel', {
        border: false,
        id: 'currency_grid',
        autoScroll: true,
        store: {
            proxy: {
                type: 'ajax',
                url: '/currency'
            },
            autoLoad: true,
            autoSync: false,
            model: 'CURRENCY_MODEL'
        },
        autoScroll: true,
        loadMask: true,
        viewConfig: {
            emptyText: 'No records'
        },
        columns: [
            {
                header: 'CURRENCY NAME',
                dataIndex: 'name',
                align: 'center',
                flex: 1
            },
            {
                header: 'DESCRIPTION',
                dataIndex: 'description',
                align: 'center',
                flex: 1
            },
            {
                xtype:'actioncolumn',
                header: ' ',
                width:25,
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/edit.png',
                        tooltip: 'Edit',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            Ext.MessageBox.alert('Unauthorized',
                                'You are not authorized to perform this task. ' +
                                'Repeatedly doing this might block your ID');
                        }
                    }
                ]
            },
            {
                xtype:'actioncolumn',
                header: ' ',
                width:25,
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/delete.png',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            socket.emit('DestroyCurrency', rec.id).on('DestroyCurrency', function (message) {
                              if (message == "success") {
                                if(Ext.getCmp('currency_grid')){
                                  Ext.getCmp('currency_grid').getStore().load();
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
                ]
            }
		]
    });
}