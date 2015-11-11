function trimsTab(rec) {
  if (Ext.getCmp('trims_tab'+rec.id)) {
    tab_panel.setActiveTab(Ext.getCmp("trims_tab"+rec.id));
  } else {
    var new_tab = tab_panel.add({
      title: 'STYLE: '+rec.data.purchaseOrderNoTable.orderTable.styleTable.name+' ||| PO: '+rec.data.po_no+' ||| LOT / CODE: '+rec.data.name,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'trims_tab'+rec.id,
      autoScroll: true,
      items: [
        trimsHeaderPanel(rec),
        trimsGrid(rec)
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}