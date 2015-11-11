function orderPOToolBar(rec) {
    var data = {};
        data.order = rec.id;
        data.buyer = rec.buyerTable.id;
        data.style = rec.styleTable.id;
    return Ext.create('Ext.toolbar.Toolbar', {
        items: [
            {
                xtype: 'button',
                icon: '/uploads/icons/create.png',
                text: 'Add New',
                border: 1,
                style: {
                    borderColor: 'blue',
                    borderStyle: 'solid'
                },
                handler: function () {
                    poFormWindow(data);
                }
            }
        ]
    });
}