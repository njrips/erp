var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize'),
    User;

module.exports = function(sequelize){
    User = sequelize.define('User_Table', {
        first_name: Sequelize.TEXT,
        last_name:Sequelize.TEXT,
        email: Sequelize.STRING,
        password:Sequelize.STRING,
        access_level:Sequelize.STRING
    },{
        tableName: 'user',
        underscored: true
    });
    return User;
};
