function lineAsignOrderPOGrid(rec) {
    return line_asign_order_po_grid = Ext.create('Ext.grid.Panel', {
        id: 'line_asign_order_po_grid'+rec.id,
        border: false,
        store: {
            proxy: {
                type: 'ajax',
                url: '/po_assign/'+rec.id
            },
            autoLoad: true,
            //autoSync: true,
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
                text : 'SELECT',
                xtype : 'checkcolumn',
                dataIndex : 'checker',
                listeners: {
                    checkchange: function(column, recordIndex, checked) {
                        var qtt = 0;
                        var grid = Ext.getCmp('line_asign_order_po_grid'+rec.id);
                        var items = grid.getStore().data.items;
                        var models = grid.getStore().getRange();
                        for (var i = items.length - 1; i >= 0; i--) {
                            if(items[i].data.checker == true){
                                qtt+=parseFloat(models[i].data.order_quantity);
                            }
                            items[i].data.checker
                        }
                        var row = models[recordIndex].data;
                        var input_date = new Date(Ext.getCmp('po_assign_input_date').getValue());
                        var output_date = new Date(Ext.getCmp('po_assign_output_date').getValue());
                        var duration = parseFloat(getDaysBetweenDates(input_date, output_date));
                        var tpd = qtt/duration;
                        Ext.getCmp('po_assign_quantity').setValue(qtt);
                        if(duration>0 && qtt>0){
                            Ext.getCmp('po_assign_duration').setValue(duration);
                            Ext.getCmp('po_assign_tpd').setValue(Math.ceil(tpd));
                        }else{
                            Ext.getCmp('po_assign_duration').setValue(0);
                            Ext.getCmp('po_assign_tpd').setValue(0);
                        }
                    }
                }
            },
            {
                header: 'PO NO',
                dataIndex: 'po_no',
                align: 'center',
                flex: 1
            },
            {
                header: 'PO QUANTITY',
                dataIndex: 'order_quantity',
                align: 'center',
                flex: 1
            }
        ]
    });
}