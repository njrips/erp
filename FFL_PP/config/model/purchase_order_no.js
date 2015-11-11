var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize'),
    Purchase_Order_No;

module.exports = function(sequelize){
    Purchase_Order_No = sequelize.define('Purchase_Order_No_Table', {
        order:  {
            type: Sequelize.INTEGER,
            references: "order",
            referencesKey: "id"
        },
        po_no: { type: Sequelize.STRING },
        reference: {
            type: Sequelize.INTEGER,
            references: "purchase_order_no",
            referencesKey: "id"
        },
        garments_type:  {
            type: Sequelize.INTEGER,
            references: "garments_type",
            referencesKey: "id"
        },
        department:  {
            type: Sequelize.INTEGER,
            references: "department",
            referencesKey: "id"
        },
        country:  {
            type: Sequelize.INTEGER,
            references: "country",
            referencesKey: "id"
        },
        season:  {
            type: Sequelize.INTEGER,
            references: "season",
            referencesKey: "id"
        },
        hanger:  {
            type: Sequelize.INTEGER,
            references: "hanger",
            referencesKey: "id"
        },
        brand:  {
            type: Sequelize.INTEGER,
            references: "brand",
            referencesKey: "id"
        },
        fabric:  {
            type: Sequelize.INTEGER,
            references: "fabric",
            referencesKey: "id"
        },
        wash: {
            type: Sequelize.INTEGER,
            references: "wash",
            referencesKey: "id"
        },
        embroidery: {
            type: Sequelize.INTEGER,
            references: "embroidery",
            referencesKey: "id"
        },
        finishing:  {
            type: Sequelize.INTEGER,
            references: "finishing",
            referencesKey: "id"
        },
        order_quantity:  { type: Sequelize.INTEGER },
        inspection: { type: Sequelize.DATE },
        fob:  {type: Sequelize.FLOAT},
        cnf:  {type: Sequelize.FLOAT},
        shipment_date: { type: Sequelize.DATE },
        mode_of_shipment: {type: Sequelize.BOOLEAN},
        status: { type: Sequelize.INTEGER }
    },{
        tableName: 'purchase_order_no',
        underscored: true
    });
    return Purchase_Order_No;
};
