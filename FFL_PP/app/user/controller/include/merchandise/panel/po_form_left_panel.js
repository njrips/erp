function po_form_left_panel() {
  return Ext.create('Ext.form.Panel', {
    id: 'po_form_left_panel',
    width:'100%',
    bodyPadding: 20,
    border: '0 1 0 0',
    layout: {
      type: 'vbox',
      pack: 'start',
      align: 'stretch'
    },
    items: [
      {
        xtype: 'textfield',
        name: 'po_no',
        id: 'po_no',
        fieldLabel: 'Purchase Order No' +
        '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        labelWidth: 120,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Purchase Order No...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      },
      {
        xtype: 'combo',
        name: 'reference',
        id: 'reference',
        fieldLabel: 'Reference',
        allowBlank: true,
        typeAhead: true,
        transform: 'stateSelect',
        forceSelection: true,
        editable: true,
        width: 300,
        labelWidth: 120,
        labelAlign: 'left',
        labelSeparator: '',
        emptyText: 'Select Reference No...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        queryMode: 'local',
        displayField: 'po_no',
        valueField: 'id',
        selectOnFocus: true,
        triggerAction: 'all',
        store: {
          fields: ['id', 'po_no'],
          proxy: {
            type: 'ajax',
            url: '/po'
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
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'garments_type',
            id: 'garments_type',
            fieldLabel: 'Garments Type' +
            '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
            allowBlank: false,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Garments Type...',
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
                url: '/garments_type'
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
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              garmentsTypeFormWindow();
            }
          }
        ]
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'department',
            id: 'po_department_combo',
            fieldLabel: 'Department',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Department Type...',
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
                url: '/department'
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
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              departmentFormWindow();
            }
          }
        ]
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'country',
            id: 'po_country_combo',
            fieldLabel: 'Country',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Country Type...',
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
                url: '/country'
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
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              countryFormWindow();
            }
          }
        ]
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'season',
            id: 'po_season_combo',
            fieldLabel: 'Season',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Season Type...',
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
                url: '/season'
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
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              seasonFormWindow();
            }
          }
        ]
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'hanger',
            id: 'po_hanger_combo',
            fieldLabel: 'Hanger',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Hanger Type...',
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
                url: '/hanger'
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
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              hangerFormWindow();
            }
          }
        ]
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'brand',
            id: 'po_brand_combo',
            fieldLabel: 'Brand',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Brand Type...',
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
                url: '/brand'
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
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              brandFormWindow();
            }
          }
        ]
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'fabric',
            id: 'po_fabric_combo',
            fieldLabel: 'Fabric',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Fabric Type...',
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
                url: '/fabric'
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
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              fabricFormWindow();
            }
          }
        ]
      }
    ]
  });
}
