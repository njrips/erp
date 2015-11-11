function lineFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Line',
    modal: true,
    id: 'lineFormWindow',
    layout: 'fit',
    items: [
      lineForm()
    ]
  }).show();
}