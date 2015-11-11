function lineJobFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Line Job',
    modal: true,
    id: 'lineJobFormWindow',
    layout: 'fit',
    items: [
      lineJobForm()
    ]
  }).show();
}