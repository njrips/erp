function linePanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'linePanel',
    title: 'Line',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      lineToolBar(),
      lineGrid()
    ]
  });
}
