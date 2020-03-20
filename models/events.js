module.exports = function (sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        },
        event_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        event_seats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        app: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        app_description: {
            type: DataTypes.STRING,
            allowNull: tue,
        },
        entree: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        entree_description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dessert: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dessert_description: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Events.associate = function (models) {
        Events.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Events;
};