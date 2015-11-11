function buyerFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Buyer',
    modal: true,
    id: 'buyerFormWindow',
    layout: 'fit',
    items: [
      buyerForm()
    ]
  }).show();
}