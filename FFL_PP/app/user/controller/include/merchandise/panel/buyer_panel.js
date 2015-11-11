function buyerPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'buyerPanel',
    title: 'Buyer',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      buyerToolBar(),
      buyerGrid()
    ]
  });
}
