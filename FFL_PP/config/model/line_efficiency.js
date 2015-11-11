var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Line_Efficiency_Table', {
        line:  {
            type: Sequelize.INTEGER,
            references: "line",
            referencesKey: "id"
        },
        garments_type:  {
            type: Sequelize.INTEGER,
            references: "garments_type",
            referencesKey: "id"
        },
        daily_capacity: {type: Sequelize.FLOAT}
    },{
        tableName: 'line_efficiency',
        underscored: true
    })
};