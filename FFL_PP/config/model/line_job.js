var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Line_Job_Table', {
        line:  {
            type: Sequelize.INTEGER,
            references: "line",
            referencesKey: "id"
        },
        input_date: {type: Sequelize.DATE},
        output_date: {type: Sequelize.DATE},
        quantity: {type: Sequelize.INTEGER},
        duration: {type: Sequelize.INTEGER},
        tpd: {type: Sequelize.INTEGER},
        completed_quantity: {type: Sequelize.INTEGER}
    },{
        tableName: 'line_job',
        underscored: true
    })
};