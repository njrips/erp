function washFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Wash',
    modal: true,
    id: 'washFormWindow',
    layout: 'fit',
    items: [
      washForm()
    ]
  }).show();
}