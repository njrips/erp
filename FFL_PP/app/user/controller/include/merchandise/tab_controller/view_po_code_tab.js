function viewPOCodeTab(rec) {
  if (Ext.getCmp('view_po_code_tab'+rec.id)) {
    tab_panel.setActiveTab(Ext.getCmp("view_po_code_tab"+rec.id));
  } else {
    var new_tab = tab_panel.add({
      title: 'STYLE: '+rec.orderTable.styleTable.name+' | PO: '+rec.po_no,
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      closable: true,
      id: 'view_po_code_tab'+rec.id,
      autoScroll: true,
      items: [
        poCodePanel(rec),
        breakDownTabPanel(rec)
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}