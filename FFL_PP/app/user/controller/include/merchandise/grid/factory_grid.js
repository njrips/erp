function factoryGrid() {
    return factory_grid = Ext.create('Ext.grid.Panel', {
        border: false,
        id: 'factory_grid',
        autoScroll: true,
        store: {
            proxy: {
                type: 'ajax',
                url: '/factory'
            },
            autoLoad: true,
            autoSync: false,
            model: 'FACTORY_MODEL'
        },
        autoScroll: true,
        loadMask: true,
        viewConfig: {
            emptyText: 'No records'
        },
        columns: [
            {
                header: 'FACTORY NAME',
                dataIndex: 'name',
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
                            socket.emit('DestroyFactory', rec.id).on('DestroyFactory', function (message) {
                              if (message == "success") {
                                if(Ext.getCmp('factory_grid')){
                                  Ext.getCmp('factory_grid').getStore().load();
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