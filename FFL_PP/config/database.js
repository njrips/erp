var config={};
var sequelize;
var _Sequelize;
var Tables={};

function connect(Sequelize)
{
    _Sequelize=Sequelize;
    sequelize= new Sequelize('pp', 'root', '1234', {
        timezone: '+06:00',
        dialect: 'mysql',
        port: 3306
    });

    sequelize.authenticate().complete(function (err) {
        if (!!err) {
            console.log('Unable to connect to the database:', err)
        } else {
            console.log('Connection has been established successfully.')
        }
    })
}

function synchronize()
{
/////***************************  RIPS EDITING FOR PO ORDER STARTS  *************************/////
	
	/////*******************#####  RIPS MODELER FILE INCLUDING STARTS  *#####****************/////

    Tables.brand=require('../config/model/brand.js')(sequelize);
    Tables.buyer=require('../config/model/buyer.js')(sequelize);
    Tables.unit=require('../config/model/unit.js')(sequelize);
    Tables.size=require('../config/model/size.js')(sequelize);
    Tables.supplier=require('../config/model/supplier.js')(sequelize);
    Tables.country=require('../config/model/country.js')(sequelize);
    Tables.color=require('../config/model/color.js')(sequelize);
    Tables.currency=require('../config/model/currency.js')(sequelize);
    Tables.department=require('../config/model/department.js')(sequelize);
    Tables.embroidery=require('../config/model/embroidery.js')(sequelize);
    Tables.fabric=require('../config/model/fabric.js')(sequelize);
    Tables.factory=require('../config/model/factory.js')(sequelize);
    Tables.finishing=require('../config/model/finishing.js')(sequelize);
    Tables.garments_type=require('../config/model/garments_type.js')(sequelize);
    Tables.hanger=require('../config/model/hanger.js')(sequelize);
    Tables.item=require('../config/model/item.js')(sequelize);
    Tables.line=require('../config/model/line.js')(sequelize);
    Tables.line_efficiency=require('../config/model/line_efficiency.js')(sequelize);
    Tables.line_job=require('../config/model/line_job.js')(sequelize);
    Tables.line_job_po=require('../config/model/line_job_po.js')(sequelize);
    Tables.order=require('../config/model/order.js')(sequelize);
    Tables.purchase_order_no=require('../config/model/purchase_order_no.js')(sequelize);
    Tables.po_code=require('../config/model/po_code.js')(sequelize);
    Tables.code_color=require('../config/model/code_color.js')(sequelize);
    Tables.season=require('../config/model/season.js')(sequelize);
    Tables.style=require('../config/model/style.js')(sequelize);
    Tables.trim=require('../config/model/trim.js')(sequelize);
    Tables.break_down=require('../config/model/break_down.js')(sequelize);
    Tables.user=require('../config/model/user.js')(sequelize);
    Tables.wash=require('../config/model/wash.js')(sequelize);


    /////*******************#####  RIPS MODELER FILE INCLUDING ENDS  #####****************/////


    ////////////////%%%%#####  RIPS TABLE RELATIONSHIP STARTS  #####%%%%////////////////////
    Tables.order
        .hasOne(Tables.style, {as: 'style'})
        .hasOne(Tables.buyer, {as: 'buyer'});
    Tables.purchase_order_no
        .hasOne(Tables.order, {as: 'order'})
        .hasOne(Tables.purchase_order_no, {as: 'reference'})
        .hasOne(Tables.garments_type, {as: 'garments_type'})
        .hasOne(Tables.department, {as: 'department'})
        .hasOne(Tables.country, {as: 'country'})
        .hasOne(Tables.season, {as: 'season'})
        .hasOne(Tables.hanger, {as: 'season'})
        .hasOne(Tables.brand, {as: 'brand'})
        .hasOne(Tables.fabric, {as: 'fabric'})
        .hasOne(Tables.wash, {as: 'wash'})
        .hasOne(Tables.embroidery, {as: 'embroidery'})
        .hasOne(Tables.finishing, {as: 'finishing'});
    Tables.line_efficiency
        .hasOne(Tables.line, {as: 'line'})
        .hasOne(Tables.garments_type, {as: 'garments_type'});
    Tables.line_job.hasOne(Tables.line, {as: 'line'});
    Tables.line_job_po
        .hasOne(Tables.line_job, {as: 'line_job'})
        .hasOne(Tables.purchase_order_no, {as: 'po_no'});
    Tables.po_code.hasOne(Tables.purchase_order_no, {as: 'po_no'});
    Tables.line.hasOne(Tables.factory, {as: 'factory'});
    Tables.item.hasOne(Tables.unit, {as: 'unit'});
    Tables.code_color
        .hasOne(Tables.po_code, {as: 'po_code'})
        .hasOne(Tables.color, {as: 'color'});
    Tables.break_down
        .hasOne(Tables.code_color, {as: 'code_color'})
        .hasOne(Tables.size, {as: 'size'});
    Tables.trim
        .hasOne(Tables.po_code, {as: 'po_code'})
        .hasOne(Tables.item, {as: 'item'})
        .hasOne(Tables.supplier, {as: 'supplier'})
        .hasOne(Tables.color, {as: 'color'});

    Tables.order
        .belongsTo(Tables.style, {foreignKey: 'style'})
        .belongsTo(Tables.buyer, {foreignKey: 'buyer'});
    Tables.purchase_order_no
        .belongsTo(Tables.order, {foreignKey: 'order'})
        .belongsTo(Tables.purchase_order_no, {foreignKey: 'reference'})
        .belongsTo(Tables.garments_type, {foreignKey: 'garments_type'})
        .belongsTo(Tables.department, {foreignKey: 'department'})
        .belongsTo(Tables.country, {foreignKey: 'country'})
        .belongsTo(Tables.season, {foreignKey: 'season'})
        .belongsTo(Tables.hanger, {foreignKey: 'hanger'})
        .belongsTo(Tables.brand, {foreignKey: 'brand'})
        .belongsTo(Tables.fabric, {foreignKey: 'fabric'})
        .belongsTo(Tables.wash, {foreignKey: 'wash'})
        .belongsTo(Tables.embroidery, {foreignKey: 'embroidery'})
        .belongsTo(Tables.finishing, {foreignKey: 'finishing'});
    Tables.line_efficiency
        .belongsTo(Tables.line, {foreignKey: 'line'})
        .belongsTo(Tables.garments_type, {foreignKey: 'garments_type'});
    Tables.line_job.belongsTo(Tables.line, {foreignKey: 'line'});
    Tables.line_job_po
        .belongsTo(Tables.line_job, {foreignKey: 'line_job'})
        .belongsTo(Tables.purchase_order_no, {foreignKey: 'po_no'});
    Tables.line.belongsTo(Tables.factory, {foreignKey: 'factory'});
    Tables.item.belongsTo(Tables.unit, {foreignKey: 'unit'});
    Tables.po_code.belongsTo(Tables.purchase_order_no, {foreignKey: 'po_no'});
    Tables.code_color
        .belongsTo(Tables.po_code, {foreignKey: 'po_code'})
        .belongsTo(Tables.color, {foreignKey: 'color'});
    Tables.break_down
        .belongsTo(Tables.code_color, {foreignKey: 'code_color'})
        .belongsTo(Tables.size, {foreignKey: 'size'});
    Tables.trim
        .belongsTo(Tables.po_code, {foreignKey: 'po_code'})
        .belongsTo(Tables.item, {foreignKey: 'item'})
        .belongsTo(Tables.supplier, {foreignKey: 'supplier'})
        .belongsTo(Tables.color, {foreignKey: 'color'});

    ////////////////%%%%#####  RIPS TABLE RELATIONSHIP ENDS  #####%%%%////////////////////

	
/////***************************  RIPS EDITING FOR PO ORDER ENDS  ****************************/////

    sequelize
        .sync({ force: false })
        .complete(function(err) {
            if (!!err) {
                console.log('An error occurred while creating the table:', err)
            } else {
                console.log('It worked!')
            }
        })
}

module.exports.connect=connect;
module.exports.synchronize=synchronize;
module.exports.Tables=Tables;
