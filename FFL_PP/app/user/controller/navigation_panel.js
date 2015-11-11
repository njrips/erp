var navigation_panel = {
    region: 'west',
    title: 'Navigation',
    icon: '/uploads/icons/navigation.png',
    width: 200,
    split: true,
    collapsible: true,
    collapsed: false,
    floatable: false,
    layout: 'accordion',
    layoutConfig: {
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },
    items: [
        merchandise(),
        planning_navigation(),
        factory_navigation(),
        dashboard()
        //pplan_navigation
    ]
};