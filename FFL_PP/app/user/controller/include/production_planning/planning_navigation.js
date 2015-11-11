function planning_navigation() {
  return Ext.create('Ext.tree.Panel', {
    region: 'north',
    title: 'Production Planning',
    icon: '/uploads/icons/planning.png',
    collapsible: true,
    collapsed: false,
    rootVisible : false,
    autoScroll: true,
    border: false,
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
                text: 'Planning',
                expanded: true,
                children: [
                    {
                        text: 'Pending List',
                        leaf: true
                    },
                    {
                        text: 'Lines Job List',
                        leaf: true
                    }
                ]
            }
        ]
    }
  }).show();
}
