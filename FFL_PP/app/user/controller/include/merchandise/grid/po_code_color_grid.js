function poCodeColorGrid(rec) {
    return po_code_color_grid = Ext.create('Ext.grid.Panel', {
        border: false,
        id: 'po_code_color_grid'+rec.id,
        autoScroll: true,
        store: {
            proxy: {
                type: 'ajax',
                url: '/code_color/'+rec.id
            },
            autoLoad: true,
            autoSync: false,
            model: 'CODE_COLOR_MODEL'
        },
        listeners: {
            rowclick : function(grid,row,e) {
                var data = row.data;
                var breakDown_Store = Ext.create('Ext.data.Store', {
                    storeId:'breakDown_Store'+data.id,
                    proxy: {
                        type: 'ajax',
                        url : '/break_down/'+data.id
                    },
                    autoLoad: true,
                    autoSync: true,
                    model: 'BREAK_DOWN_MODEL',
                    autoLoad: {
                        callback: initData // do this function when it loads
                    }
                })
                function initData() {
                    var loaded = true;
                    if (breakDown_Store.isLoading()) {
                        loaded = false;
                    }
                    if(loaded) {
                        if(breakDown_Store.data.items.length == 0){
                            codeColorSizeAmountFormWindow(data)
                        }else{
                            //breakDownTab(rec.purchaseOrderNoTable)
                            breakDownTab(rec, data, breakDown_Store.data.items.length)
                        }
                    }
                }
            }
        },
        autoScroll: true,
        loadMask: true,
        viewConfig: {
            emptyText: 'No records'
        },
        columns: [
            {
                header: 'PO CODE',
                dataIndex: 'po_code',
                align: 'center',
                flex: 1
            },
            {
                header: 'COLOR',
                dataIndex: 'color',
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
                            /*socket.emit('DestroyBrand', rec.id).on('DestroyBrand', function (message) {
                              if (message == "success") {
                                if(Ext.getCmp('brand_grid')){
                                  Ext.getCmp('brand_grid').getStore().load();
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
                            });*/
                        }
                    }
                ]
            }
		]
    });
}