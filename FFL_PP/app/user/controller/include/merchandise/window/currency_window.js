function currencyFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Currency',
    modal: true,
    id: 'currencyFormWindow',
    layout: 'fit',
    items: [
      currencyForm()
    ]
  }).show();
}