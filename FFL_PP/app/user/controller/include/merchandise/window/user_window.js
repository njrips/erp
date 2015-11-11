function userFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New User',
    modal: true,
    id: 'userFormWindow',
    layout: 'fit',
    items: [
      userForm()
    ]
  }).show();
}