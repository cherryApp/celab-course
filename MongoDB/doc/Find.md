Gep6@DESKTOP-Q3R1PO7  C:\Program Files\MongoDB\Server\4.4\bin                                                [09:08]
❯ .\mongo.exe
MongoDB shell version v4.4.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("c6e56297-fc9e-4dae-8bab-011b3aa13c67") }
MongoDB server version: 4.4.2
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        https://docs.mongodb.com/
Questions? Try the MongoDB Developer Community Forums
        https://community.mongodb.com
---
The server generated these startup warnings when booting:
        2020-11-26T08:52:37.731+01:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> use cavity
switched to db cavity
> db.createCollection('measure')
{ "ok" : 1 }
> db.measure.insert({name: 'Cave001', measurer: 'Zsolti', value: 0.112})
WriteResult({ "nInserted" : 1 })
> show dbs
admin   0.000GB
cavity  0.000GB
config  0.000GB
local   0.000GB
> show collections
measure
> db
cavity
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
> db.measure.find({name: 'Cave001'})
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
> db.measure.insert({name: 'Cave002', measurer: 'Ádám', value: 0.113})
WriteResult({ "nInserted" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({measurer: 'Ádám'})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({measurer: 'Ádám'}).limit(1)
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find().limit(1)
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
> db.measure.find().limit(3)
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find().sort({_id: -1})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
> db.measure.find().sort({_id: 1})
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find().sort({_id: -1}).limit(3)
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
> db.measure.find().limit(-3)
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.insert({name: 'Cave003', measurer: 'Ádám', value: 0.113})
WriteResult({ "nInserted" : 1 })
> db.measure.insert({name: 'Cave004', measurer: 'Ádám', value: 0.113})
WriteResult({ "nInserted" : 1 })
> db.measure.find().limit(-3)
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find().sort({_id: -1}).limit(3)
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find().sort({_id: -1}).limit(3).sort({_id: 1})
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find().sort({_id: -1}).limit(3)
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.insertMany([
... {name: 'Cave005', measurer: 'Botond', value: 0.1122},
... {name: 'Cave006', measurer: 'Józsi', value: 0.112233}
... ]);
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5fbf69a58d5b924552ae6bd6"),
                ObjectId("5fbf69a58d5b924552ae6bd7")
        ]
}
> ObjectId("5fbf69a58d5b924552ae6bd6").getTimestamp()
ISODate("2020-11-26T08:39:01Z")
> db.measure.insert({_id: 44, name: 'Cave004', measurer: 'Ádám', value: 0.113})
WriteResult({ "nInserted" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.insert({_id: ObjectId(), name: 'Cave004', measurer: 'Ádám', value: 0.113})
WriteResult({ "nInserted" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find().limit(1)
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
> db.measure.find().limit(1).pritty()
uncaught exception: TypeError: db.measure.find(...).limit(...).pritty is not a function :
@(shell):1:1
> db.measure.find().limit(1).pretty()
{
        "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"),
        "name" : "Cave001",
        "measurer" : "Zsolti",
        "value" : 0.112
}
> db.measure.findOne().pretty()
uncaught exception: TypeError: db.measure.findOne(...).pretty is not a function :
@(shell):1:1
> db.measure.findOne()
{
        "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"),
        "name" : "Cave001",
        "measurer" : "Zsolti",
        "value" : 0.112
}
> db.measure.findOne({_id: "5fbf63b78d5b924552ae6bd2"})
null
> db.measure.findOne({_id: ObjectId("5fbf63b78d5b924552ae6bd2")})
{
        "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"),
        "name" : "Cave001",
        "measurer" : "Zsolti",
        "value" : 0.112
}
> db.measure.findOne({value: 0.112})
{
        "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"),
        "name" : "Cave001",
        "measurer" : "Zsolti",
        "value" : 0.112
}
> db.measure.find({value: 0.112})
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
> db.measure.find({value: > 0.112})
uncaught exception: SyntaxError: expected expression, got '>' :
@(shell):1:24
> db.measure.find({value: {$gt: 0.112}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({value: {$lt: 0.112}})
> db.measure.find({value: {$lt: 0.113}})
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
> db.measure.find({value: {$lte: 0.113}})
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({value: {$gte: 0.113}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({value: {$gt: 0.113}})
> db.measure.find({value: {$gte: 0.113}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({value: {$lt: 0.113}, value: {$gt: 0.112}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({ $and: [{value: {$lt: 0.113}}, {value: {$gt: 0.112}}]})
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
> db.measure.find({ $or: [{value: {$lt: 0.113}}, {value: {$gt: 0.112}}]})
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({measurer: {$in: ['Zsolti', 'Józsi']}})
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
> db.measure.find({measurer: {$nin: ['Zsolti', 'Józsi']}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({measurer: {$regex: /d/}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({measurer: {$regex: /ád/}})
> db.measure.find({measurer: {$regex: /ád/i}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({measurer: {$regex: /.d/i}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({measurer: {$regex: /^.d/i}})
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
> db.measure.find({measurer: {$regex: /.d$/i}})
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
>