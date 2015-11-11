function lineJobListTab() {
  if (Ext.getCmp('line_job_list_tab')) {
    tab_panel.setActiveTab(Ext.getCmp("line_job_list_tab"));
  } else {
    var new_tab = tab_panel.add({
      title: 'Line Job List',
      border: false,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'line_job_list_tab',
      autoScroll: true,
      items: [
        lineJobListGrid()
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
            Ext.getCmp('line_job_list_grid').getStore().load();
          }
        }
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}