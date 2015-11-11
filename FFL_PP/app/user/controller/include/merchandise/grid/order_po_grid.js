function orderPOGrid(opi) {
    return order_po_grid = Ext.create('Ext.grid.Panel', {
        id: 'order_po_grid'+opi.id,
        title: '*****<big>STYLE:</big> '+opi.style+'       *****<big>BUYER NAME:</big> '+opi.buyer,
        store: {
            proxy: {
                type: 'ajax',
                url: '/po/'+opi.id
            },
            autoLoad: true,
            autoSync: true,
            model: 'PURCHASE_ORDER_NO_MODEL'
        },
        loadMask: true,
        viewConfig: {
            emptyText: 'No records'
        },
        features: [
            {
                ftype: 'summary',
                dock: 'bottom'
            }
        ],
        autoScroll: true,
        columns: [
            {
                header: 'PO NO',
                dataIndex: 'po_no',
                align: 'center',
                flex: 1,
                renderer: function(value, p, r){
                    return value;
                }
            },
            /*{
                header: 'REF.',
                dataIndex: 'reference',
                align: 'center',
                flex: 0.5
            },*/
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
            /*{
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
            },*/
            {
                header: 'INSPECTION',
                dataIndex: 'inspection',
                renderer: Ext.util.Format.dateRenderer('d-m-Y'),
                align: 'center',
                flex: 1
            },
            {
                header: 'SHIP. DATE',
                dataIndex: 'shipment_date',
                renderer: Ext.util.Format.dateRenderer('d-m-Y'),
                align: 'center',
                flex: 1
            },
            {
                header: 'GARMENTS TYPE',
                dataIndex: 'garments_type',
                align: 'center',
                flex: 1.3,
                summaryType: 'count',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return '<b><big>TOTAL:</big></b> ';
                }
            },
            {
                header: 'PO QTY',
                dataIndex: 'order_quantity',
                align: 'center',
                flex: 1,
                summaryType: 'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    /*if(opi.status >= approved ){
                        Ext.getCmp('orderTabApprove'+opi.id).hide();
                    }else if(value < 1 ){
                        Ext.getCmp('orderTabApprove'+opi.id).hide();
                    }else{
                        Ext.getCmp('orderTabApprove'+opi.id).show();
                    }*/
                    return '<b><big>'+value+'</big></b>  ';
                }
            },
            {
                xtype:'actioncolumn',
                header: 'ADD CODE / LOT',
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/create.png',
                        tooltip: 'ADD CODE / LOT',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            poCodeFormWindow(rec.data);
                        }
                    }
                ],
                flex: 2
            },
            {
                xtype:'actioncolumn',
                header: ' ',
                id: 'order_po_grid_delete_button'+opi.id,
                width:35,
                align: 'center',
                items: [
                    {
                        icon: '/uploads/icons/delete.png',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            socket.emit('DestroyPO', rec.id).on('DestroyPO', function (message) {
                              if (message == "success") {
                                if(Ext.getCmp('order_po_grid'+opi.id)){
                                  Ext.getCmp('order_po_grid'+opi.id).getStore().load();
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
                        },                                                          
                        getClass: function(self, meta, rec) {
                            if(rec.data.orderTable.status >= approved){
                                meta.style = "display: none !important;";  
                            }
                        }
                    }
                ]
            }
		]
    });
}