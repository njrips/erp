Ext.define('PO_CODE_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'po_no',
            type: 'string',
            mapping: 'purchaseOrderNoTable.po_no'
        },
        {
            name: 'quantity',
            type: 'int'
        },
        {
            name: 'piece',
            type: 'int'
        }
    ]
});
