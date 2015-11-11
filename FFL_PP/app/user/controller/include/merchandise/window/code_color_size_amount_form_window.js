function codeColorSizeAmountFormWindow(rec) {
  return Ext.create('Ext.window.Window', {
    title: 'Give Size Amounts For '+rec.po_code+' '+rec.color,
    modal: true,
    id: 'codeColorSizeAmountFormWindow'+rec.id,
    layout: 'fit',
    items: [
      codeColorSizeAmountForm(rec)
    ]
  }).show();
}