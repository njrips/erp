function pendingListTab() {
  if (Ext.getCmp('pending_list_tab')) {
    tab_panel.setActiveTab(Ext.getCmp("pending_list_tab"));
  } else {
    var new_tab = tab_panel.add({
      title: 'Pending List',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'pending_list_tab',
      autoScroll: true,
      items: [
        //pendingListToolBar(),
        pendingListOrderGrid()
        //pendingListGrid()
      ],
      bbar:[
        {
          xtype:'button',
          text:'Reload',
          icon: '/uploads/icons/refresh.png',
          iconCls: 'add',
          name:'reload',
          tooltip:'Reload',
          border: 1,
          style: {
            borderColor: 'blue',
            borderStyle: 'solid'
          },
          handler: function(){
            if(Ext.getCmp('pending_list_order_grid')){
              Ext.getCmp('pending_list_order_grid').getStore().load();
            }
          }
        }
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}