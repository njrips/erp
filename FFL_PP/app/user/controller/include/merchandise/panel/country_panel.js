function countryPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'countryPanel',
    title: 'Country',
    width: '20%',
    height: 270,
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    autoScroll: true,
    items: [
      countryToolBar(),
      countryGrid()
    ]
  });
}
