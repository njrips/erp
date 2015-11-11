function pendingListGrid() {
    return pending_list_grid = Ext.create('Ext.grid.Panel', {
        id: 'pending_list_grid',
        store: {
            proxy: {
                type: 'ajax',
                url: '/pending'
            },
            autoLoad: true,
            autoSync: true,
            model: 'PURCHASE_ORDER_NO_MODEL'
        },
        loadMask: true,
        viewConfig: {
            emptyText: 'No records', 
            autoDestroy: false
        },
        autoScroll: true,
        columns: [
            {
                header: 'BUYER',
                dataIndex: 'buyer',
                align: 'center',
                flex: 1
            },
            {
                header: 'STYLE',
                dataIndex: 'style',
                align: 'center',
                flex: 1
            },
            {
                header: 'PO NO',
                dataIndex: 'po_no',
                flex: 1
            },
            {
                header: 'REFERENCE',
                dataIndex: 'reference',
                flex: 1
            },
            {
                header: 'ORDER',
                dataIndex: 'order',
                flex: 1
            },
            {
                header: 'BUYER',
                dataIndex: 'buyer',
                flex: 1
            },
            {
                header: 'STYLE',
                dataIndex: 'style',
                flex: 1
            },
            {
                header: 'GARMENTS TYPE',
                dataIndex: 'garments_type',
                flex: 1
            },
            {
                header: 'ORDER QTY',
                dataIndex: 'order_quantity',
                flex: 1
            },
            {
                header: 'INSPECTION',
                dataIndex: 'inspection',
                renderer:Ext.util.Format.dateRenderer('d-m-Y'),
                flex: 1
            },
            {
                header: 'S. DATE',
                dataIndex: 'shipment_date',
                renderer:Ext.util.Format.dateRenderer('d-m-Y'),
                flex: 1
            },
            {
                header: 'STATUS',
                dataIndex: 'status',
                renderer: function(val, meta, record){
                    if(val == pending){
                        meta.style = "background-color: #FFEEEE !important; color: #900;";
                        return "PENDING";
                    }
                },
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
                            poAssignFormWindow(rec);
                        }
                    }
                ]
            }
        ]
    });
}