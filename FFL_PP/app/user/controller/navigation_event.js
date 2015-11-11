var InputForms = false;

function navigation_event(cmd)
{
  switch (cmd)
  {
  /***    Dashboard Start      ***/
    case "Dashboard":
      dashboardTab();
      break;
  /***    Dashboard End        ***/
  /***    Production Planning Start      ***/
    case "Pending List":
      pendingListTab();
      break;
    case "Lines Job List":
      lineJobListTab();
      break;
  /***    Production Planning End        ***/
  /***    Merchandise Start    ***/
    case "Input Forms":
      //console.log(Ext.grid.plugin);
      (InputForms) ? InputForms = false : InputForms = true;
      //Ext.getCmp('Merchandise').getStore().getRootNode().reload();
      break;
    case "Merchandise List":
      merchandiseTab();
      break;
    case "Buyer Style List":
      orderTab();
      break;
    case "New Order":
      orderFormWindow();
      break;
    case "PO List":
      poTab();
      break;
    case "Brand":
      brandFormWindow();
      break;
    case "Buyer":
      buyerFormWindow();
      break;
    case "Fabric":
      fabricFormWindow();
      break;
    case "Country":
      countryFormWindow();
      break;
    case "Color":
      colorFormWindow();
      break;
    case "Department":
      departmentFormWindow();
      break;
    case "Embroidery":
      embroideryFormWindow();
      break;
    case "Factory":
      factoryFormWindow();
      break;
    case "Finishing":
      finishingFormWindow();
      break;
    case "Garments Type":
      garmentsTypeFormWindow();
      break;
    case "Hanger":
      hangerFormWindow();
      break;
    case "Line":
      lineFormWindow();
      break;
    case "Line Efficiency":
      lineEfficiencyFormWindow();
      break;
    case "Line Job":
      lineJobFormWindow();
      break;
    case "Purchase Order No":
      poFormWindow();
      break;
    case "Style":
      styleFormWindow();
      break;
    case "Season":
      seasonFormWindow();
      break;
    case "User":
      userFormWindow();
      break;
    case "Wash":
      washFormWindow();
      break;
    /***    Merchandise End    ***/
  }
}