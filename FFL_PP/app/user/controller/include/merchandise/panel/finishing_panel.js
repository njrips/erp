function finishingPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'finishingPanel',
    title: 'Finishing',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      finishingToolBar(),
      finishingGrid()
    ]
  });
}
