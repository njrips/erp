function embroideryFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Embroidery',
    modal: true,
    id: 'embroideryFormWindow',
    layout: 'fit',
    items: [
      embroideryForm()
    ]
  }).show();
}