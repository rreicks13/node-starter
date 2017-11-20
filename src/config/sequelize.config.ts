import {Sequelize} from 'sequelize-typescript';
import { Users } from '../models/user';

const sequelize =  new Sequelize({
        database: 'bathroom_buddy',
        dialect: 'mysql',
        username: 'root',
        password: '',
        storage: 'localhost'
});

sequelize.addModels([Users]);