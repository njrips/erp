function orderFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Order',
    modal: true,
    id: 'orderFormWindow',
    layout: 'fit',
    items: [
      orderForm()
    ]
  }).show();
}