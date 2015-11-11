function embroideryPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'embroideryPanel',
    title: 'Embroidery',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      embroideryToolBar(),
      embroideryGrid()
    ]
  });
}
