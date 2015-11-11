function merchandiseBottomTabPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'merchandiseBottomTabPanel',
    width: '100%',
    layout: {
      type: 'hbox',
      align: 'stretch'
    },
    border: false,
    autoScroll: true,
    items: [
      factoryPanel(),
      linePanel(),
      finishingPanel(),
      garmentsTypePanel(),
      hangerPanel(),
      seasonPanel(),
      stylePanel(),
      washPanel()
    ]
  });
}
