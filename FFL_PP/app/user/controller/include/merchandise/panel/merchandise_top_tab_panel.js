function merchandiseTopTabPanel() {
  return Ext.create('Ext.panel.Panel', {
    id: 'merchandiseTopTabPanel',
    width: '100%',
    layout: {
      type: 'hbox',
      align: 'stretch'
    },
    border: false,
    autoScroll: true,
    items: [
      brandPanel(),
      buyerPanel(),
      countryPanel(),
      colorPanel(),
      currencyPanel(),
      departmentPanel(),
      embroideryPanel(),
      fabricPanel()
    ]
  });
}
