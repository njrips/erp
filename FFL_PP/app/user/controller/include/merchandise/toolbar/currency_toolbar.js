function currencyToolBar() {
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
                    currencyFormWindow();
                }
            }
        ]
    });
}