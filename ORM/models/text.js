'use strict';

module.exports = (Sequelize) => {
    return {
        fields: {
            label: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            value: {
                type: Sequelize.TEXT,
                allowNull: false
            }
        },
        defaultValues: {
            label: 'default-value',
            value: 'Hello World !'
        }
    }
};