function supplierFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Supplier Form',
    modal: true,
    id: 'supplierFormWindow',
    layout: 'fit',
    items: [
      supplierForm()
    ]
  }).show();
}