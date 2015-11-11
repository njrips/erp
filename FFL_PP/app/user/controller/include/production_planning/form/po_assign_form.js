function poAssignForm(rec) {
  return Ext.create('Ext.form.Panel', {
    id: 'poAssignForm'+rec.id,
    width:'35%',
    bodyPadding: 20,
    autoScroll: true,
    border: true,
    listeners: {
      afterrender: function (self, e) {
        var input_date = new Date();
        Ext.getCmp('po_assign_input_date').setValue(input_date);
      }
    },
    items: [
      {
        xtype: 'combo',
        anchor: '100%',
        name: 'factory',
        id: 'po_assign_factory_combo',
        fieldLabel: 'Factory' +
        '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        allowBlank: false,
        editable: false,
        width: 300,
        labelWidth: 100,
        labelAlign: 'left',
        labelSeparator: '',
        emptyText: 'Select Factory',
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
            url: '/factory'
          },
          autoLoad: true
        },
        listeners: {
          change: {
            fn: function (combo, value) {
              Ext.getCmp('po_assign_line_combo').getStore().load({
                params: {
                  factory: (value)
                },
                callback: function (records, operation, success) {
                  Ext.getCmp('po_assign_line_combo').clearValue();
                },
                scope: this
              });
            }
          },
          specialkey: function (f, e) {
            if (e.getKey() == e.ENTER) {
              setTimeout(function () {
                f.nextSibling().focus()
              }, 100);
            }
          }
        }
      },
      {
        xtype: 'combo',
        anchor: '100%',
        name: 'line',
        id: 'po_assign_line_combo',
        fieldLabel: 'Line' +
        '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        allowBlank: false,
        editable: false,
        width: 300,
        labelWidth: 100,
        labelAlign: 'left',
        labelSeparator: '',
        emptyText: 'Select Line...',
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
            url: '/factory_lines'
          },
          autoLoad: false
        },
        listeners: {
          change: {
            fn: function (combo, value) {
              //console.log(value)
            }
          },
          specialkey: function (f, e) {
            if (e.getKey() == e.ENTER) {
              setTimeout(function () {
                f.nextSibling().focus()
              }, 100);
            }
          }
        }
      },
      {
        xtype: 'datefield',
        anchor: '100%',
        name: 'input_date',
        id: 'po_assign_input_date',
        fieldLabel: 'Input Date' +
        '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        filedAlign: 'top',
        allowBlank: false,
        editable: false,
        format: 'd M Y',
        width: 300,
        minValue: new Date(),
        padding: '5 0 5 0',
        labelWidth: 100,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Input Date...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        onChange: function(newVal, oldVal) {
          /*var input_date = new Date(Ext.getCmp('po_assign_input_date').getValue());
          var output_date = new Date(Ext.getCmp('po_assign_output_date').getValue());
          //var quantity = parseFloat(Ext.getCmp('po_assign_quantity').getValue());
          var quantity = parseFloat(rec.data.order_quantity);
          var duration = parseFloat(getDaysBetweenDates(input_date, output_date));
          var tpd = quantity/duration;
          //Ext.getCmp('po_assign_input_date').setValue(input_date);
          Ext.getCmp('po_assign_output_date').setValue(output_date);
          Ext.getCmp('po_assign_quantity').setValue(quantity);
          Ext.getCmp('po_assign_duration').setValue(duration);
          Ext.getCmp('po_assign_tpd').setValue(Math.ceil(tpd));*/
        }
      },
      {
        xtype: 'datefield',
        anchor: '100%',
        name: 'output_date',
        id: 'po_assign_output_date',
        fieldLabel: 'Output Date' +
        '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        filedAlign: 'top',
        allowBlank: false,
        editable: false,
        format: 'd M Y',
        width: 300,
        minValue: new Date(),
        //maxValue: rec.data.shipment_date,
        padding: '5 0 5 0',
        labelWidth: 100,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Output Date...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        onChange: function(newVal, oldVal) {
          var input_date = new Date(Ext.getCmp('po_assign_input_date').getValue());
          var output_date = new Date(Ext.getCmp('po_assign_output_date').getValue());
          var quantity = parseFloat(Ext.getCmp('po_assign_quantity').getValue());
          var duration = parseFloat(getDaysBetweenDates(input_date, output_date));
          var tpd = quantity/duration;
          //Ext.getCmp('po_assign_input_date').setValue(input_date);
          Ext.getCmp('po_assign_output_date').setValue(output_date);
          //Ext.getCmp('po_assign_quantity').setValue(quantity);
          Ext.getCmp('po_assign_duration').setValue(duration);
          Ext.getCmp('po_assign_tpd').setValue(Math.ceil(tpd));
        }
      },
      {
        xtype: 'numberfield',
        anchor: '100%',
        minValue: 0,
        name: 'quantity',
        id: 'po_assign_quantity',
        fieldLabel: 'Quantity',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        padding: '5 0 5 0',
        labelWidth: 100,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Job Quantity...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        onChange: function(newVal, oldVal) {
          var qtt = 0;
          var grid = Ext.getCmp('line_asign_order_po_grid'+rec.id);
          var items = grid.getStore().data.items;
          var models = grid.getStore().getRange();
          for (var i = items.length - 1; i >= 0; i--) {
              if(items[i].data.checker == true){
                  qtt+=parseFloat(models[i].data.order_quantity);
              }
              items[i].data.checker
          }
          Ext.getCmp('po_assign_quantity').setValue(qtt);
          /*var input_date = new Date(Ext.getCmp('po_assign_input_date').getValue());
          var output_date = new Date(Ext.getCmp('po_assign_output_date').getValue());
          //var quantity = parseFloat(Ext.getCmp('po_assign_quantity').getValue());
          var quantity = parseFloat(rec.data.order_quantity);
          var duration = parseFloat(getDaysBetweenDates(input_date, output_date));
          var tpd = quantity/duration;
          Ext.getCmp('po_assign_input_date').setValue(input_date);
          Ext.getCmp('po_assign_output_date').setValue(output_date);
          Ext.getCmp('po_assign_quantity').setValue(quantity);
          Ext.getCmp('po_assign_duration').setValue(duration);
          Ext.getCmp('po_assign_tpd').setValue(Math.ceil(tpd));*/
        }
      },
      {
        xtype: 'numberfield',
        anchor: '100%',
        maxValue: 999,
        minValue: 0,
        name: 'duration',
        id: 'po_assign_duration',
        fieldLabel: 'Duration',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        padding: '5 0 5 0',
        labelWidth: 100,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Job duration...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        onChange: function(newVal, oldVal) {
          var input_date = new Date(Ext.getCmp('po_assign_input_date').getValue());
          var output_date = new Date(Ext.getCmp('po_assign_output_date').getValue());

          //var quantity = parseFloat(Ext.getCmp('po_assign_quantity').getValue());
          //var quantity = parseFloat(rec.data.order_quantity);
          var duration = parseFloat(getDaysBetweenDates(input_date, output_date));
          //var tpd = quantity/duration;
          //Ext.getCmp('po_assign_input_date').setValue(input_date);
          //Ext.getCmp('po_assign_output_date').setValue(output_date);
          //Ext.getCmp('po_assign_quantity').setValue(quantity);
          if(output_date>input_date){
            Ext.getCmp('po_assign_duration').setValue(duration);
          }else{
            Ext.getCmp('po_assign_duration').setValue(0);
          }
          //Ext.getCmp('po_assign_tpd').setValue(Math.ceil(tpd));
        }
      },
      {
        xtype: 'numberfield',
        anchor: '100%',
        maxValue: 100000,
        minValue: 0,
        name: 'tpd',
        id: 'po_assign_tpd',
        fieldLabel: 'Target /Day',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        padding: '5 0 5 0',
        labelWidth: 100,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give target per day...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        onChange: function(newVal, oldVal) {
          var input_date = new Date(Ext.getCmp('po_assign_input_date').getValue());
          var output_date = new Date(Ext.getCmp('po_assign_output_date').getValue());
          var quantity = parseFloat(Ext.getCmp('po_assign_quantity').getValue());
          //var quantity = parseFloat(rec.data.order_quantity);
          var duration = parseFloat(getDaysBetweenDates(input_date, output_date));
          var tpd = quantity/duration;
          //Ext.getCmp('po_assign_input_date').setValue(input_date);
          //Ext.getCmp('po_assign_output_date').setValue(output_date);
          //Ext.getCmp('po_assign_quantity').setValue(quantity);
          //Ext.getCmp('po_assign_duration').setValue(duration);
          //Ext.getCmp('po_assign_tpd').setValue(Math.ceil(tpd));
          if(quantity>0 && duration>0){
            Ext.getCmp('po_assign_tpd').setValue(Math.ceil(tpd));
          }else{
            Ext.getCmp('po_assign_tpd').setValue(0);
          }
        }
      },
      {
        width : 300,
        items : [
          lineAsignOrderPOGrid(rec)
          //pp_available_line_order
        ]
      }
    ],
    buttons: [
      {
        text: 'Reset',
        handler: function () {
          this.up('form').getForm().reset();
        }
      },
      {
        text: 'Submit',
        id: 'po_assign_form_submit_button',
        formBind: true,
        handler: function () {
          var panel = this.up('form');
          var form = panel.getForm();
          var values = form.getValues();
          values.input_date = new Date(form.getValues().input_date);
          values.output_date = new Date(form.getValues().output_date);
          values.input_date = (values.input_date.getMonth() + 1) 
                              + "-" + values.input_date.getDate()
                              + "-" + values.input_date.getFullYear();
          values.output_date = (values.output_date.getMonth() + 1)
                              + "-" + values.output_date.getDate()
                              + "-" + values.output_date.getFullYear();

          values.po_no = [];
          values.po_id = [];
          var grid = Ext.getCmp('line_asign_order_po_grid'+rec.id);
          var items = grid.getStore().data.items;
          var models = grid.getStore().getRange();
          for (var i = items.length - 1; i >= 0; i--) {
            if(items[i].data.checker == true){
              values.po_no.push(items[i].data.po_no);
              values.po_id.push(items[i].data.id);
            }
            items[i].data.checker
          }
          if (form.isValid()) {
            socket.emit('CreateLineJob', values).on('CreateLineJob', function (message) {
              if (message == "success") {
                Ext.MessageBox.alert('success', 'Successfully data inserted');
                if(Ext.getCmp('poAssignFormWindow'+rec.id)){
                  Ext.getCmp('poAssignFormWindow'+rec.id).close();
                }
                if(Ext.getCmp('pending_list_order_grid')){
                  Ext.getCmp('pending_list_order_grid').getStore().load();
                }
                if(Ext.getCmp('line_job_list_grid')){
                  Ext.getCmp('line_job_list_grid').getStore().load();
                }
              } else if(message == "error") {
                Ext.MessageBox.alert('Error', 'Data not inserted. \nPossible problem could be duplicate entry');
              }
            });

          } else {
            fieldNames = [];
            fields = panel.getInvalidFields();
            for (var i = 0; i < fields.length; i++) {
              field = fields[i];
              fieldNames.push(field.getName());
            }
            console.debug(fieldNames);
            Ext.MessageBox.alert('Invalid Fields', 'The following fields are invalid: ' + fieldNames.join(', '));

          }
        }
      },
      {
        text: 'Close',
        handler: function () { this.up('.window').close(); }
      }
    ],
    getInvalidFields: function () {
      var invalidFields = [];
      Ext.suspendLayouts();
      this.form.getFields().filterBy(function (field) {
        if (field.validate()) return;
        invalidFields.push(field);
      });
      Ext.resumeLayouts(true);
      return invalidFields;
    }
  });
}
