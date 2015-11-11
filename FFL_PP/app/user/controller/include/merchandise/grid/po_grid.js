function poGrid() {
    return po_grid = Ext.create('Ext.grid.Panel', {
        id: 'po_grid',
        store: {
            proxy: {
                type: 'ajax',
                url: '/po'
            },
            autoLoad: true,
            autoSync: true,
            model: 'PURCHASE_ORDER_NO_MODEL'
        },
        loadMask: true,
        viewConfig: {
            emptyText: 'No records', 
            autoDestroy: false
            /*getRowClass: function(record) { 
                return record.get('status') < 18 ? 'child-row' : 'adult-row'; 
            }*/
        },
        autoScroll: true,
        columns: [
            {
                header: 'PO NO',
                dataIndex: 'po_no',
                align: 'center',
                flex: 1
            },
            {
                header: 'REFERENCE',
                dataIndex: 'reference',
                align: 'center',
                flex: 1
            },
            {
                header: 'ORDER',
                dataIndex: 'order',
                align: 'center',
                flex: 1
            },
            {
                header: 'BUYER',
                dataIndex: 'buyer',
                align: 'center',
                flex: 1
            },
            {
                header: 'GARMENTS TYPE',
                dataIndex: 'garments_type',
                align: 'center',
                flex: 1
            },
            {
                header: 'ORDER QTY',
                dataIndex: 'order_quantity',
                align: 'center',
                flex: 1
            },
            {
                header: 'BRAND',
                dataIndex: 'brand',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'COUNTRY',
                dataIndex: 'country',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'DEPARTMENT',
                dataIndex: 'department',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'EMBROIDERY',
                dataIndex: 'embroidery',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'FABRIC',
                dataIndex: 'fabric',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'FINISHING',
                dataIndex: 'finishing',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'FOB',
                dataIndex: 'fob',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'CNF',
                dataIndex: 'fob',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'HANGER',
                dataIndex: 'hanger',
                align: 'center',
                flex: 0.8
            },
            {
                header: 'INSPECTION',
                dataIndex: 'inspection',
                renderer:Ext.util.Format.dateRenderer('d-m-Y'),
                align: 'center',
                flex: 1
            },
            {
                header: 'S. DATE',
                dataIndex: 'shipment_date',
                renderer:Ext.util.Format.dateRenderer('d-m-Y'),
                align: 'center',
                flex: 1
            },
            {
                header: 'STATUS',
                dataIndex: 'status',
                renderer: function(val, meta, record){
                    if(val == unapproved){
                        meta.style = "background-color: #FFEEEE !important; color: #900;";
                        return "UNAPPROVED";
                    }else if(val >= pending){
                        meta.style = "background-color: #EEFFEE !important; color: #090;";
                        return "APPROVED";
                    }
                },
                align: 'center',
                flex: 0.7
            },
            {
                xtype:'actioncolumn',
                header: ' ',
                width:25,
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/correct.png',
                        tooltip: 'Approve',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            socket.emit('ApprovePO', rec.id).on('ApprovePO', function (message) {
                              if (message == "success") {
                                if(Ext.getCmp('order_po_grid')){
                                  Ext.getCmp('order_po_grid').getStore().load();
                                }
                                if(Ext.getCmp('po_grid')){
                                  Ext.getCmp('po_grid').getStore().load();
                                }
                                if(Ext.getCmp('pending_list_grid')){
                                  Ext.getCmp('pending_list_grid').getStore().load();
                                }
                                Ext.MessageBox.alert('success', 'Successfully data approved');
                              } else if(message == "error") {
                                    Ext.MessageBox.alert('Error', 
                                        'Please contact with the developer');
                              } else {
                                    Ext.MessageBox.alert('Unauthorized',
                                        'You are not authorized to perform this task. ' +
                                        'Repeatedly doing this might block your ID');
                              }
                            });
                        },                                                          
                        getClass: function(self, meta, rec) {
                            if(rec.data.status >= pending){
                                meta.style = "display: none !important;";  
                            }
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
                            socket.emit('DestroyPO', rec.id).on('DestroyPO', function (message) {
                              if (message == "success") {
                                if(Ext.getCmp('order_po_grid')){
                                  Ext.getCmp('order_po_grid').getStore().load();
                                }
                                if(Ext.getCmp('po_grid')){
                                  Ext.getCmp('po_grid').getStore().load();
                                }
                                Ext.MessageBox.alert('success', 'Successfully data deleted');
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