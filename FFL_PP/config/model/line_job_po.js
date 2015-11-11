var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Line_Job_PO_Table', {
        line_job:  {
            type: Sequelize.INTEGER,
            references: "line_job",
            referencesKey: "id"
        },
        po_no:  {
            type: Sequelize.INTEGER,
            references: "purchase_order_no",
            referencesKey: "id"
        }
    },{
        tableName: 'line_job_po',
        underscored: true
    })
};