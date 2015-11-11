function departmentPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'departmentPanel',
    title: 'Department',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      departmentToolBar(),
      departmentGrid()
    ]
  });
}
