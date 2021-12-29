const router = require("express").Router();
const mongodb = require("mongodb");
const db = require("./db.js");

router.post("/add", (req, res) => {
    console.log(req.body);
    const client = db();
    client.connect(err => {
        if (err) {
            console.log({'msg': 'Error connection'});
            console.log(err);
        } else {
            const table = client.db("CoffeeShop");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    res.send({msg: 'done'});
                    client.close();
                }
            });
        }
    });
})

router.get("/del/:id", (req, res) => {
    const client = db();
    client.connect((err) => {
        if (err) {
            res.send({"msg": "Error connection"});
            client.close();
        } else {
            const col = client.db("dresscod").collection("products");
            console.log(req.params);
            col.deleteOne({"_id": new mongodb.ObjectId(req.params.id)}, (delErr, result) => {
                if (delErr) {
                    client.close();
                    res.send({"msg": "Все плохо"});
                } else {
                    console.log(result);
                    client.close();
                    res.send({"msg": "ok"});
                }
            });
        }
    });
});

module.exports = router;