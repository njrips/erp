function lineEfficiencyFormWindow() {
  return Ext.create('Ext.window.Window', {
    title: 'Add New Line Efficiency',
    modal: true,
    id: 'lineEfficiencyFormWindow',
    layout: 'fit',
    items: [
      lineEfficiencyForm()
    ]
  }).show();
}