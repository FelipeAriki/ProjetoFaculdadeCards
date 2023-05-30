import { MongoClient } from 'mongodb'

const url = "mongodb://127.0.0.1:27017/";

export default class vagasDAL {
    async obterVagas (res) {
        MongoClient.connect(url)
            .then(db => {
                const dbo = db.db("vagasdb");
                dbo.collection("vagas").find({}).toArray()
                    .then(result => {
                        db.close()
                        res.send(result)
                    })
            });
    }
    async obterVagasPorCargo (req, res) {
        MongoClient.connect(url)
            .then(db => {
                const dbo = db.db("vagasdb");
                var myquery ={"cargo":{"$regex":req.query.cargo}}
                dbo.collection("vagas").find(myquery).toArray()
                    .then(result => {
                        db.close()
                        res.send(result)
                    })
            });
    }
    async cadastrarVaga (req, res) {
        MongoClient.connect(url)
            .then(db => {
                const dbo = db.db("vagasdb");
                dbo.collection("vagas").insertOne(req.body)
                    .then(result => {
                        db.close()
                        res.send(result)
                    })
            });
    }
    
}