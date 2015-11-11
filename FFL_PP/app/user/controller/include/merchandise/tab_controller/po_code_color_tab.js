function poCodeColorTab(rec) {
  if(Ext.getCmp('poCodeColorPanel'+rec.purchaseOrderNoTable.id)){
    if (Ext.getCmp('po_code_color_tab'+rec.id)) {
      Ext.getCmp('poCodeColorPanel'+rec.purchaseOrderNoTable.id).setActiveTab(Ext.getCmp("po_code_color_tab"+rec.id));
    } else {
      var new_tab = Ext.getCmp('poCodeColorPanel'+rec.purchaseOrderNoTable.id).add({
        title: rec.name,
        layout: {
          type: 'vbox',
          align: 'stretch'
        },
        closable: true,
        id: 'po_code_color_tab'+rec.id,
        autoScroll: true,
        items: [
          poCodeColorGrid(rec)
        ]
      });
      Ext.getCmp('poCodeColorPanel'+rec.purchaseOrderNoTable.id).setActiveTab(new_tab);
    }
  }
}