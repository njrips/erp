function fabricFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Fabric',
    modal: true,
    id: 'fabricFormWindow',
    layout: 'fit',
    items: [
      fabricForm()
    ]
  }).show();
}