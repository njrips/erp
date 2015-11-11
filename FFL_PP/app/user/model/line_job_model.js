Ext.define('LINE_JOB_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'line',
            type: 'string',
            mapping: 'lineJobTable.lineTable.name'
        },
        {
            name: 'style',
            type: 'string',
            mapping: 'purchaseOrderNoTable.orderTable.styleTable.name'
        },
        {
            name: 'buyer',
            type: 'string',
            mapping: 'purchaseOrderNoTable.orderTable.buyerTable.name'
        },
        {
            name: 'po_no',
            type: 'string',
            mapping: 'purchaseOrderNoTable.po_no'
        },
        {
            name: 'status',
            type: 'int',
            mapping: 'purchaseOrderNoTable.status'
        },
        {
            name: 'input_date',
            type: 'date',
            mapping: 'lineJobTable.input_date'
        },
        {
            name: 'output_date',
            type: 'date',
            mapping: 'lineJobTable.output_date'
        },
        {
            name: 'quantity',
            type: 'int',
            mapping: 'lineJobTable.quantity'
        },
        {
            name: 'duration',
            type: 'int',
            mapping: 'lineJobTable.duration'
        },
        {
            name: 'tpd',
            type: 'int',
            mapping: 'lineJobTable.tpd'
        },
        {
            name: 'completed_quantity',
            type: 'int',
            mapping: 'lineJobTable.completed_quantity'
        }
    ]
});
