function hangerFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Hanger',
    modal: true,
    id: 'hangerFormWindow',
    layout: 'fit',
    items: [
      hangerForm()
    ]
  }).show();
}