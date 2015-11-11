function brandPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'brandPanel',
    title: 'Brand',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      brandToolBar(),
      brandGrid()
    ]
  });
}
