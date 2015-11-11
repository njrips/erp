function poCodeColorCombo(rec, c) {
  return color = {
    layout: 'hbox',
    border: false,
    id: 'poCodeColorCombo'+c,
    align: 'stretch',
    bodyStyle: 'padding-bottom: 7px;',
    items: [
      Ext.create('Ext.form.ComboBox', {
        name: 'color',
        fieldLabel: 'Color',
        allowBlank: false,
        typeAhead: true,
        transform: 'stateSelect',
        forceSelection: true,
        editable: true,
        width: 300,
        labelWidth: 80,
        labelAlign: 'left',
        labelSeparator: '',
        emptyText: 'Select Color...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        queryMode: 'local',
        displayField: 'name',
        valueField: 'id',
        selectOnFocus: true,
        triggerAction: 'all',
        store: {
          fields: ['id', 'name'],
          proxy: {
            type: 'ajax',
            url: '/color'
          },
          autoLoad: true,
          autoSync: true
        },
        listeners: {
          change: {
            fn: function (combo, value) {
              //console.log(value)
            }
          }
        }
      }),
      {
        xtype: 'button',
        text: '',
        icon: '/uploads/icons/delete.png',
        handler: function () {
          Ext.getCmp('poCodeForm'+rec.id).remove(Ext.getCmp('poCodeColorCombo'+c), true);
        }
      }
    ]
  }
}
