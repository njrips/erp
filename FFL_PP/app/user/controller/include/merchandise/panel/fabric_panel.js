function fabricPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'fabricPanel',
    title: 'Fabric',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      fabricToolBar(),
      fabricGrid()
    ]
  });
}
