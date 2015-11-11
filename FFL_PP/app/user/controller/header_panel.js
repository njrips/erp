/*Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.RowExpander',
    'Ext.selection.CheckboxModel'
]);*/
var unapproved = 0;
var approved = 1;
var pending = 1;
var working = 1;

function getDaysBetweenDates(d0, d1) {

  var msPerDay = 8.64e7;

  // Copy dates so don't mess them up
  var x0 = new Date(d0);
  var x1 = new Date(d1);

  // Set to noon - avoid DST errors
  x0.setHours(12,0,0);
  x1.setHours(12,0,0);

  // Round to remove daylight saving errors
  return Math.round( (x1 - x0) / msPerDay );
}

function findWeekendsCount(inDate, duration, weekDay){
  var tmpDate = new Date(inDate);
  var weekDayCount = 0;
  var i;
  for(i=0; i<parseInt(duration); i++){
    tmpDate.setDate(tmpDate.getDate()+1);
    if(tmpDate.getDay()==parseInt(weekDay)){
      weekDayCount++;
    }
  }
  if(weekDayCount>0){
    var j;
    for(j=0; j<weekDayCount; j++){
      tmpDate.setDate(tmpDate.getDate()+1);
      if(tmpDate.getDay()==parseInt(weekDay)){
        weekDayCount++;
      }
    }
  }
  return weekDayCount+4;
}

function findOutputDate(inDate, duration, weekDay){
  var input = new Date(inDate);
  var tmpDate = new Date(inDate);
  var weekDayCount = 0;
  var i;
  for(i=0; i<parseInt(duration); i++){
    tmpDate.setDate(tmpDate.getDate()+1);
    if(tmpDate.getDay()==parseInt(weekDay)){
      weekDayCount++;
    }
  }
  if(weekDayCount>0){
    var j;
    for(j=0; j<weekDayCount; j++){
      tmpDate.setDate(tmpDate.getDate()+1);
      if(tmpDate.getDay()==parseInt(weekDay)){
        weekDayCount++;
      }
    }
  }
  var durations = input.getDate()+parseInt(duration)+weekDayCount+4;
  input.setDate(durations);
    var outDate = input.getDate();
    var outMonth = input.getMonth()+1;
    var outYear = input.getFullYear();
    return outMonth+"/"+outDate+"/"+outYear;
}




var changingImage = Ext.create('Ext.Img', {
    src: '/uploads/images/ffl_logo.png',
    height: 30,
    width: 50,
    margins: '8 10 0 0'
});

var header_panel = Ext.create('Ext.panel.Panel', {
    height: 45,
    region : 'north',
    layout: {
        type: 'hbox'
    },
    items: [
        changingImage,
        Ext.create('Ext.panel.Panel', {
            border: false,
            autoHeight: true,
            html : "<h2>Fashion Flash ERP</h2>"
        }),
        Ext.create('Ext.panel.Panel', {
            border: false,
            width   : '75%',
            autoHeight: true,
            html : "<h4><i>©2015 Fashion Flash LTD. All rights reserved</i></h4>",
            style: {
                "text-align": 'right'
            }
        })
    ],
    autoHeight: true,
    border: false
});