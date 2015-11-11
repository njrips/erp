Ext.define('TRIM_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'item_description',
            type: 'string',
            mapping: 'itemTable.description'
        },
        {
            name: 'item_name',
            type: 'string',
            mapping: 'itemTable.name'
        },
        {
            name: 'unit',
            type: 'string',
            mapping: 'itemTable.unitTable.name'
        },
        {
            name: 'color',
            type: 'string',
            mapping: 'colorTable.name'
        },
        {
            name: 'supplier',
            type: 'string',
            mapping: 'supplierTable.name'
        },
        {
            name: 'quantity',
            type: 'string'
        },
        {
            name: 'order_quantity',
            type: 'string',
            mapping: 'pOCodeTable.purchaseOrderNoTable.order_quantity'
        }
    ]
});
