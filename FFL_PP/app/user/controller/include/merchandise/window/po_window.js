function poFormWindow(data) {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Purchase Order No',
    modal: true,
    id: 'poFormWindow',
    layout: 'fit',
    resizable: false,
    items: [
      poForm(data)
    ]
  }).show();
}