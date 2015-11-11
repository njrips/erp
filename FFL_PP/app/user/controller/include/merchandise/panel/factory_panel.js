function factoryPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'factoryPanel',
    title: 'Factory',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      factoryToolBar(),
      factoryGrid()
    ]
  });
}
