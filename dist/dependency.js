"use strict";
class MySQLConnection {
    connect() {
        console.log('Conectado no mysql');
    }
}
class MongoDBConnection {
    connect() {
        console.log('Conectado no mongo');
    }
}
class PasswordReminder {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }
    connect() {
        this.dbConnection.connect();
    }
}
const mysql = new MySQLConnection;
const passwordReminder = new PasswordReminder(mysql);
passwordReminder.connect();
const mongo = new MongoDBConnection;
const passwordReminder2 = new PasswordReminder(mongo);
passwordReminder2.connect();
