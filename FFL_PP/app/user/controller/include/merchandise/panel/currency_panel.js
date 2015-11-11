function currencyPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'currencyPanel',
    title: 'Currency',
    width: '20%',
    height: 270,
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    autoScroll: true,
    items: [
      currencyToolBar(),
      currencyGrid()
    ]
  });
}
