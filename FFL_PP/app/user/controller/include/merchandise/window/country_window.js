function countryFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Country',
    modal: true,
    id: 'countryFormWindow',
    layout: 'fit',
    items: [
      countryForm()
    ]
  }).show();
}