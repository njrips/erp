function trimsFormWindow(rec) {
  return Ext.create('Ext.window.Window', {
    title: 'Trims Form',
    modal: true,
    id: 'trimsFormWindow'+rec.id,
    layout: 'fit',
    items: [
      trimsForm(rec)
    ]
  }).show();
}