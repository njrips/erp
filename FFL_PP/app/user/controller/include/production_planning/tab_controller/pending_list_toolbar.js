function pendingListToolBar() {
    return Ext.create('Ext.toolbar.Toolbar', {
        items: [
            {
                xtype: 'button',
                icon: '/uploads/icons/create.png',
                text: 'Add New',
                handler: function () {
                    brandFormWindow();
                }
            }
        ]
    });
}