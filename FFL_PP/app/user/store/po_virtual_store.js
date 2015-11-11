var poVirtualStore = Ext.create('Ext.data.Store', {
    storeId:'poVirtualStore',
    fields:[
        'po_no',
        'reference',
        'buyer',
        'garments_type',
        'order_quantity',
        'inspection',
        'shipment_date'
    ],
    data:{'items':[]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});