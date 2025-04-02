import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('boutique', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});

export default sequelize;
