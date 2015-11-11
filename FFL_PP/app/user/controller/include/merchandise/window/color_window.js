function colorFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Color',
    modal: true,
    id: 'colorFormWindow',
    layout: 'fit',
    items: [
      colorForm()
    ]
  }).show();
}