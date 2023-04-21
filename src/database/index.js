const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: 'Yan',
    database: 'labmedicinebd',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    logging: console.log,
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;
