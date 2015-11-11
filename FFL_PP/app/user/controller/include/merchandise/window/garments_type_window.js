function garmentsTypeFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Garments Type',
    modal: true,
    id: 'garmentsTypeFormWindow',
    layout: 'fit',
    items: [
      garmentsTypeForm()
    ]
  }).show();
}