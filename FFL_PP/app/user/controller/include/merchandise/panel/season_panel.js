function seasonPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'seasonPanel',
    title: 'Season',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      seasonToolBar(),
      seasonGrid()
    ]
  });
}
