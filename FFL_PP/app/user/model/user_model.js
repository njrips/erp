Ext.define('USER_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'first_name',
            type: 'string'
        },
        {
            name: 'last_name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'access_level',
            type: 'string'
        }
    ]
});
