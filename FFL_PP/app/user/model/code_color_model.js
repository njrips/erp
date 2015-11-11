Ext.define('CODE_COLOR_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'color',
            type: 'string',
            mapping: 'colorTable.name'
        },
        {
            name: 'po_code',
            type: 'string',
            mapping: 'pOCodeTable.name'
        }
    ]
});
