Ext.define('ORDER_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'style',
            type: 'string',
            mapping: 'styleTable.name'
        },
        {
            name: 'buyer',
            type: 'string',
            mapping: 'buyerTable.name'
        },
        {
            name: 'status',
            type: 'int'
        }
    ]
});
