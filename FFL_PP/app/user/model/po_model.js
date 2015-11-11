Ext.define('PURCHASE_ORDER_NO_MODEL', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'order',
            type: 'string'
        },
        {
            name: 'po_no',
            type: 'string'
        },
        {
            name: 'reference',
            type: 'string',
            mapping: 'purchaseOrderNoTable.po_no'
        },
        {
            name: 'buyer',
            type: 'string',
            mapping: 'orderTable.buyerTable.name'
        },
        {
            name: 'style',
            type: 'string',
            mapping: 'orderTable.styleTable.name'
        },
        {
            name: 'garments_type',
            type: 'string',
            mapping: 'garmentsTypeTable.name'
        },
        {
            name: 'department',
            type: 'string',
            mapping: 'departmentTable.name'
        },
        {
            name: 'country',
            type: 'string',
            mapping: 'countryTable.name'
        },
        {
            name: 'season',
            type: 'string',
            mapping: 'seasonTable.name'
        },
        {
            name: 'hanger',
            type: 'string',
            mapping: 'hangerTable.name'
        },
        {
            name: 'brand',
            type: 'string',
            mapping: 'brandTable.name'
        },
        {
            name: 'fabric',
            type: 'string',
            mapping: 'fabricTable.name'
        },
        {
            name: 'wash',
            type: 'string',
            mapping: 'washTable.name'
        },
        {
            name: 'embroidery',
            type: 'string',
            mapping: 'embroideryTable.name'
        },
        {
            name: 'finishing',
            type: 'string',
            mapping: 'finishingTable.name'
        },
        {
            name: 'order_quantity',
            type: 'int'
        },
        {
            name: 'inspection',
            type: 'date'
        },
        {
            name: 'shipment_date',
            type: 'date'
        },
        {
            name: 'fob',
            type: 'float'
        },
        {
            name: 'cnf',
            type: 'float'
        },
        {
            name: 'status',
            type: 'int'
        }
    ],
    changeName: function() {
        var oldName = this.get('inspection'),
            newName = oldName + " The Barbarian";

        this.set('inspection', newName);
    }
});
