function poCodeColorPanel(rec) {
  return Ext.create('Ext.tab.Panel', {
    id: 'poCodeColorPanel'+rec.id,
    title: 'LOT NAMES / CODES',
    width: '30%',
    autoScroll: true,
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: []
  });
}
