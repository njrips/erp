function poTab() {
  if (Ext.getCmp('po_tab')) {
    tab_panel.setActiveTab(Ext.getCmp("po_tab"));
  } else {
    var new_tab = tab_panel.add({
      title: 'Purchase Order No',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'po_tab',
      autoScroll: true,
      items: [
        poToolBar(),
        poGrid()
      ],
      bbar:[
        {
          xtype:'button',
          text:'Reload',
          icon: '/uploads/icons/refresh.png',
          iconCls: 'add',
          name:'reload',
          id:'poTabReload',
          tooltip:'Reload',
          border: 1,
          style: {
            borderColor: 'blue',
            borderStyle: 'solid'
          },
          handler: function(){
            Ext.getCmp('po_grid').getStore().load();
          }
        }
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}