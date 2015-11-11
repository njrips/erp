function viewPOCodePanelTab(rec) {
  return Ext.create('Ext.tab.Panel', {
    title: 'PO: '+rec.po_no,
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    closable: true,
    id: 'view_po_code_panel_tab'+rec.id,
    autoScroll: true,
    items: [
      Ext.create('Ext.tab.Panel', {
        title: 'Hello',
        width: 200,
        html: '<p>World!</p>'
      }),
      Ext.create('Ext.panel.Panel', {
        title: 'Hello',
        width: 200,
        html: '<p>World!</p>'
      }),
    ],
    bbar:[
      {
        xtype:'button',
        text:'Reload',
        icon: '/uploads/icons/refresh.png',
        iconCls: 'add',
        name:'reload',
        id:'view_po_code_panel_tabReload',
        tooltip:'Reload',
        border: 1,
        style: {
          borderColor: 'blue',
          borderStyle: 'solid'
        },
        handler: function(){
          if (Ext.getCmp('order_po_tab_grid')) {
            Ext.getCmp('order_po_tab_grid').getStore().load();
          }
        }
      }
    ]
  })
}