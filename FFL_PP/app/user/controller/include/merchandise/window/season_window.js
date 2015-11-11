function seasonFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Season',
    modal: true,
    id: 'seasonFormWindow',
    layout: 'fit',
    items: [
      seasonForm()
    ]
  }).show();
}