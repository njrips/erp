Ext.define('LINE_EFFICIENCY_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'line',
            type: 'string',
            mapping: 'lineTable.name'
        },
        {
            name: 'garments_type',
            type: 'string',
            mapping: 'garmentsTypeTable.name'
        },
        {
            name: 'daily_capacity',
            type: 'float'
        }
    ]
});
