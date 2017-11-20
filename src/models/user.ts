import { Table, Column, Model, HasMany } from 'sequelize-typescript';

// Note: Must be the same name as the mysql table, so users
@Table
export class Users extends Model<Users> {
    @Column
    name: string;

    @Column
    email: string;
}