function colorPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'colorPanel',
    title: 'Color',
    width: '20%',
    height: 270,
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    autoScroll: true,
    items: [
      colorToolBar(),
      colorGrid()
    ]
  });
}
