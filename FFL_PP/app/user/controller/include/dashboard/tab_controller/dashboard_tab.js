function dashboardTab() {
  if (Ext.getCmp('dashboard_tab')) {
    tab_panel.setActiveTab(Ext.getCmp("dashboard_tab"));
  } else {
    var new_tab = tab_panel.add({
      title: 'Dashboard',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      id: 'dashboard_tab',
      items: [
        //testPanel(),
        {
          layout: {
            type: 'hbox',
            pack: 'start',
            align: 'stretch'
          },
          items: [
            {
              title: "Title 1",
              html:'panel 1',
              width:150
            },
            {
              title: "Title 2",
              html:'panel 2',
              flex:1
            }
          ]
        }
        //orderGrid(),
        //testPanel()
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}