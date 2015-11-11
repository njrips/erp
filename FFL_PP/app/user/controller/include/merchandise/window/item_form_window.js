function itemFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Item Form',
    modal: true,
    id: 'itemFormWindow',
    layout: 'fit',
    items: [
      itemForm()
    ]
  }).show();
}