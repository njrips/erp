function hangerPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'hangerPanel',
    title: 'Hanger',
    width: '20%',
    height: 270,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      hangerToolBar(),
      hangerGrid()
    ]
  });
}
