function merchandiseTab() {
  if (Ext.getCmp('merchandise_tab')) {
    tab_panel.setActiveTab(Ext.getCmp("merchandise_tab"));
  } else {
    var new_tab = tab_panel.add({
      title: 'Merchandise',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      closable: true,
      autoScroll: true,
      id: 'merchandise_tab',
      items: [
        merchandiseTopTabPanel(),
        merchandiseBottomTabPanel()
        //orderToolBar(),
        //orderGrid()
      ]
    });
    tab_panel.setActiveTab(new_tab);
  }
}