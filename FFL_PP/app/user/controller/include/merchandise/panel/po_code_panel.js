function poCodePanel(rec) {
  return Ext.create('Ext.panel.Panel', {
    id: 'poCodePanel'+rec.id,
    title: 'STYLE: '+rec.orderTable.styleTable.name+' | PO: '+rec.po_no+' (LOT / CODE LIST)',
    width: '40%',
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      poCodeGrid(rec),
      poCodeColorPanel(rec)
    ]
  });
}
