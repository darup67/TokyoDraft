module.exports = function(sequelize , DataTypes) {
    var Player = sequelize.define("Player" , {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamName: DataTypes.STRING,
        points: {
            type: DataTypes.DECIMAL,
            defaultValue: 0,
            allowNull: false
        },
        drafted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        draftedTeam: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
    return Player;
}