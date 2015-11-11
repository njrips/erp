function poCodeFormWindow(rec) {
  return Ext.create('Ext.window.Window', {
    title: 'Add PO Code / Lot Name',
    modal: true,
    id: 'po_form_code_window'+rec.id,
    layout: 'fit',
    items: [
      poCodeForm(rec)
    ]
  }).show();
}