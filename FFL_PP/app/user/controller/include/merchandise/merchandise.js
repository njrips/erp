function merchandise() {
  return Ext.create('Ext.tree.Panel', {
    region: 'north',
    title: 'Merchandise',
    id: 'Merchandise',
    icon: '/uploads/icons/form.png',
    collapsible: true,
    collapsed: false,
    autoScroll: true,
    rootVisible : false,
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
                text: 'Merchandise',
                expanded: true,
                children: [
                    {
                        text: 'Merchandise List',
                        leaf: true
                    },
                    {
                        text: 'Input Forms',
                        expanded: InputForms,
                        children: [
                            {
                                text: 'Brand',
                                leaf: true
                            },
                            {
                                text: 'Buyer',
                                leaf: true
                            },
                            {
                                text: 'Color',
                                leaf: true
                            },
                            {
                                text: 'Country',
                                leaf: true
                            },
                            {
                                text: 'Department',
                                leaf: true
                            },
                            {
                                text: 'Embroidery',
                                leaf: true
                            },
                            {
                                text: 'Fabric',
                                leaf: true
                            },
                            {
                                text: 'Factory',
                                leaf: true
                            },
                            {
                                text: 'Finishing',
                                leaf: true
                            },
                            {
                                text: 'Garments Type',
                                leaf: true
                            },
                            {
                                text: 'Hanger',
                                leaf: true
                            },/*
                            {
                                text: 'Line',
                                leaf: true
                            },
                            {
                                text: 'Line Efficiency',
                                leaf: true
                            },
                            {
                                text: 'Line Job',
                                leaf: true
                            },*/
                            {
                                text: 'Season',
                                leaf: true
                            },
                            {
                                text: 'Style',
                                leaf: true
                            },
                            {
                                text: 'User',
                                leaf: true
                            },
                            {
                                text: 'Wash',
                                leaf: true
                            },
                            {
                                text: 'New Order',
                                leaf: true
                            }/*,
                            {
                                text: 'Purchase Order No',
                                leaf: true
                            }*/
                        ]
                    },
                ]
            },
            {
                text: 'Buyer Styles',
                expanded: true,
                children: [
                    {
                        text: 'Buyer Style List',
                        leaf: true
                    },
                    {
                        text: 'PO List',
                        leaf: true
                    }
                ]
            }
        ]
    }
  }).show();
}
