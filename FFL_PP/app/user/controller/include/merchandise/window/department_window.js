function departmentFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Department',
    modal: true,
    id: 'departmentFormWindow',
    layout: 'fit',
    items: [
      departmentForm()
    ]
  }).show();
}