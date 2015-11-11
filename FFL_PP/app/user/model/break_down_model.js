Ext.define('BREAK_DOWN_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'code_color',
            type: 'int'
        },
        {
            name: 'size',
            type: 'int',
            mapping: 'sizeTable.name'
        },
        {
            name: 'ratio',
            type: 'int'
        },
        {
            name: 'quantity',
            type: 'int',
            mapping: 'codeColorTable.pOCodeTable.quantity'
        },
        {
            name: 'piece',
            type: 'int',
            mapping: 'codeColorTable.pOCodeTable.piece'
        },
        {
            name: 'zipper_length',
            type: 'string'
        },
        {
            name: 'code',
            type: 'string',
            mapping: 'codeColorTable.pOCodeTable.name'
        },
        {
            name: 'year',
            type: 'string',
            mapping: 'sizeTable.year'
        },
    ]
});
