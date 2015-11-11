function dashboard() {
  return Ext.create('Ext.tree.Panel', {
    region: 'north',
    title: 'Dashboard',
    icon: '/uploads/icons/dashboard.png',
    collapsible: true,
    collapsed: false,
    autoScroll: true,
    rootVisible : false,
    listeners: {
        itemclick: function(s,r) {
            navigation_event(r.data.text);
        }
    },
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                expanded: true,
                children: [
                    /*{
                        text: 'Style',
                        leaf: true
                    }*/
                ]
            }
        ]
    }
  }).show();
}