module.exports = function(sequelize , DataTypes) {
    var Player = sequelize.define("Player" , {
        name: DataTypes.STRING,
        teamName: DataTypes.STRING,
        points: DataTypes.DECIMAL,
        drafted: DataTypes.BOOLEAN,
        draftedTeam: DataTypes.INTEGER
    })
}