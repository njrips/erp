function garmentsTypePanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'garmentsTypePanel',
    title: 'Garments Type',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      garmentsTypeToolBar(),
      garmentsTypeGrid()
    ]
  });
}
