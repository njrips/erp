function breakDownTab(rec, rec2, n) {
  if (Ext.getCmp('break_down_tab'+rec.id)) {
    Ext.getCmp('breakDownTabPanel'+rec.purchaseOrderNoTable.id).setActiveTab(Ext.getCmp("break_down_tab"+rec.id));
  } else {
    var new_tab = Ext.getCmp('breakDownTabPanel'+rec.purchaseOrderNoTable.id).add({
      title: rec2.po_code+' '+rec2.color,
      width: '100%',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'break_down_tab'+rec.id,
      autoScroll: true,
      items: [
        breakDownGrid(rec, rec2, n),
        colorBreakDownGrid(rec, rec2)
      ]
    });
    Ext.getCmp('breakDownTabPanel'+rec.purchaseOrderNoTable.id).setActiveTab(new_tab);
  }
}