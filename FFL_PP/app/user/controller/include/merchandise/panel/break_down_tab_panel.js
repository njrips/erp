function breakDownTabPanel(rec) {
  return Ext.create('Ext.tab.Panel', {
    id: 'breakDownTabPanel'+rec.id,
    title: 'COLOR & SIZE BREAKDOWN PANEL',
    width: '59.9%',
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: []
  });
}
