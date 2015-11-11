function orderToolBar() {
    return Ext.create('Ext.toolbar.Toolbar', {
        items: [
            {
                xtype: 'button',
                icon: '/uploads/icons/create.png',
                text: 'Create New Buyer Style',
                border: 1,
                style: {
                    borderColor: 'blue',
                    borderStyle: 'solid'
                },
                handler: function () {
                    orderFormWindow();
                }
            }
        ]
    });
}