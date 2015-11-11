function poAssignFormWindow(rec) {
  return Ext.create('Ext.window.Window', {
    title: 'Assign PO To Factory Line',
    modal: true,
    id: 'poAssignFormWindow'+rec.id,
    layout: 'fit',
    autoScroll: true,
    items: [
      poAssignForm(rec)
    ]
  }).show();
}