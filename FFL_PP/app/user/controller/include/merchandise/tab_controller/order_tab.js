function orderTab() {
  if (Ext.getCmp('order_tab')) {
    tab_panel.setActiveTab(Ext.getCmp("order_tab"));
  } else {
    var new_tab = tab_panel.add({
      title: 'Buyer Style',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'order_tab',
      autoScroll: true,
      items: [
        orderToolBar(),
        orderGrid()
      ],
      bbar:[
        {
          xtype:'button',
          text:'Reload',
          icon: '/uploads/icons/refresh.png',
          iconCls: 'add',
          name:'reload',
          id:'orderTabReload',
          tooltip:'Reload',
          border: 1,
          style: {
            borderColor: 'blue',
            borderStyle: 'solid'
          },
          handler: function(){
            if(Ext.getCmp('order_grid')){
              Ext.getCmp('order_grid').getStore().load();
            }
          }
        }
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}