function factoryFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Factory',
    modal: true,
    id: 'factoryFormWindow',
    layout: 'fit',
    items: [
      factoryForm()
    ]
  }).show();
}