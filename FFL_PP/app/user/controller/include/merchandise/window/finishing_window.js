function finishingFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Finishing',
    modal: true,
    id: 'finishingFormWindow',
    layout: 'fit',
    items: [
      finishingForm()
    ]
  }).show();
}