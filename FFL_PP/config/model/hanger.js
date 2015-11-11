var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Hanger_Table', {
        name: {type: Sequelize.STRING}
    },{
        tableName: 'hanger',
        underscored: true
    });
};

