function unitFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Unit Form',
    modal: true,
    id: 'unitFormWindow',
    layout: 'fit',
    items: [
      unitForm()
    ]
  }).show();
}