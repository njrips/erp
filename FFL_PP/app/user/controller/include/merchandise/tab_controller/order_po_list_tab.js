function orderPOListTab(data) {
  if (Ext.getCmp('order_po_list_tab'+data.id)) {
    tab_panel.setActiveTab(Ext.getCmp("order_po_list_tab"+data.id));
  } else {
    var new_tab = tab_panel.add({
      title: '<b>BUYER:</b> '+data.buyer+', <b>STYLE:</b> '+data.style,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'order_po_list_tab'+data.id,
      autoScroll: true,
      items: [
        orderPOToolBar(data),
        orderPOTabGrid(data)
      ],
      bbar:[
        {
          xtype:'button',
          text:'Reload',
          icon: '/uploads/icons/refresh.png',
          iconCls: 'add',
          name:'reload',
          id:'order_po_list_tab_reload'+data.id,
          tooltip:'Reload',
          border: 1,
          style: {
            borderColor: 'blue',
            borderStyle: 'solid'
          },
          handler: function(){
            Ext.getCmp('order_po_tab_grid').getStore().load();
          }
        }
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}