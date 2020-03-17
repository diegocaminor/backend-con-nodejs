const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser); // encodeURIComponent garantiza que si por alguna razón hubieran caracteres especiales no tengamos problema a la hora de conectarnos 
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbp}/${DB_NAME}?retryWrite=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }

    connect() {
        if(!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if(err) {
                        reject(err);
                    }
                    console.log("Connected succesfully to mongo");
                    resolve(this.cliente.db(this.dbName));
                })                
            });
        }

        return MongoLib.connection;
    }
}

module.exports = MongoLib;