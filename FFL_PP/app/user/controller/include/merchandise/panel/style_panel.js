function stylePanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'stylePanel',
    title: 'Style',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      styleToolBar(),
      styleGrid()
    ]
  });
}
