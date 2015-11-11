var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Line_Table', {
        name: {type: Sequelize.STRING},
        factory:  {
            type: Sequelize.INTEGER,
            references: "factory",
            referencesKey: "id"
        }
    },{
        tableName: 'line',
        underscored: true
    });
};
