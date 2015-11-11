Ext.define('LINE_MODEL', {
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
            name: 'factory',
            type: 'string',
            mapping: 'factoryTable.name'
        }
    ]
});
