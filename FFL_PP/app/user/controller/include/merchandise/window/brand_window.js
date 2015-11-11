function brandFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Brand',
    modal: true,
    id: 'brandFormWindow',
    layout: 'fit',
    items: [
      brandForm()
    ]
  }).show();
}