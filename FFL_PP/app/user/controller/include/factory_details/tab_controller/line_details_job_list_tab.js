function lineDetailsJobListTab(rec) {
  if (Ext.getCmp('line_details_job_list_tab'+rec.data.line+"_"+rec.data.factory)) {
    tab_panel.setActiveTab(Ext.getCmp("line_details_job_list_tab"+rec.data.line+"_"+rec.data.factory));
  } else {
    var new_tab = tab_panel.add({
      title: rec.data.factory_name+' ' + rec.data.line_name,
      border: false,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'line_details_job_list_tab'+rec.data.line+"_"+rec.data.factory,
      autoScroll: true,
      items: [
        lineDetailsJobListGrid(rec)
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
            Ext.getCmp('line_details_job_list_tab'+rec.data.line+"_"+rec.data.factory).getStore().load();
          }
        }
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}