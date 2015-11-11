function styleFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Style',
    modal: true,
    id: 'styleFormWindow',
    layout: 'fit',
    items: [
      styleForm()
    ]
  }).show();
}