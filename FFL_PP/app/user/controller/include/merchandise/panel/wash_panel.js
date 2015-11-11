function washPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'washPanel',
    title: 'Wash',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      washToolBar(),
      washGrid()
    ]
  });
}
