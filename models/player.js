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
        },
        photoURL: {
            type: DataTypes.STRING,
            defaultValue: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        }
    });
    return Player;
}