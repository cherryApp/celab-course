> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "name" : "Cave001", "measurer" : "Zsolti", "value" : 0.112 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : true } }
> db.measure.update({value: 0.112}, {value: 0.111})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "value" : 0.111 }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : true } }
> db.measure.update({value: 0.111}, {$set: {name: 'Cave001', measurer: 'Zsolti'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "value" : 0.111, "measurer" : "Zsolti", "name" : "Cave001" }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : true } }
> db.measure.update({name: {$regex: /ádám/i}}, {$set: {value: 0.119}})
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
> db.measure.update({measurer: {$regex: /ádám/i}}, {$set: {value: 0.119}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "value" : 0.111, "measurer" : "Zsolti", "name" : "Cave001" }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.113 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : true } }
> db.measure.updateMany({measurer: {$regex: /ádám/i}}, {$set: {value: 0.119}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 4 }
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "value" : 0.111, "measurer" : "Zsolti", "name" : "Cave001" }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : true } }
> db.measure.update({_id: ObjectId("5fbf7a088d5b924552ae6bdb")}, {$set: {'access.admin': false}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "value" : 0.111, "measurer" : "Zsolti", "name" : "Cave001" }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false } }
> db.measure.update({_id: ObjectId("5fbf7a088d5b924552ae6bdb")}, {$set: {'skills[0]': 'php7'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "value" : 0.111, "measurer" : "Zsolti", "name" : "Cave001" }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false }, "skills[0]" : "php7" }
> db.measure.update({_id: ObjectId("5fbf7a088d5b924552ae6bdb")}, {$set: {skills[0]: 'php7'}})
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:77
> db.measure.update({_id: ObjectId("5fbf7a088d5b924552ae6bdb")}, {$set: {'skills.0': 'php7'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "value" : 0.111, "measurer" : "Zsolti", "name" : "Cave001" }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php7", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false }, "skills[0]" : "php7" }
> db.measure.update({_id: ObjectId("5fbf7a088d5b924552ae6bdb")}, {$unset: {'skills[0]'}})
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:84
> db.measure.update({_id: ObjectId("5fbf7a088d5b924552ae6bdb")}, {$unset: {'skills[0]': ''}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.measure.find()
{ "_id" : ObjectId("5fbf63b78d5b924552ae6bd2"), "value" : 0.111, "measurer" : "Zsolti", "name" : "Cave001" }
{ "_id" : ObjectId("5fbf64d48d5b924552ae6bd3"), "name" : "Cave002", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf688e8d5b924552ae6bd4"), "name" : "Cave003", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf68978d5b924552ae6bd5"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd6"), "name" : "Cave005", "measurer" : "Botond", "value" : 0.1122 }
{ "_id" : ObjectId("5fbf69a58d5b924552ae6bd7"), "name" : "Cave006", "measurer" : "Józsi", "value" : 0.112233 }
{ "_id" : 44, "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf6f0b8d5b924552ae6bd8"), "name" : "Cave004", "measurer" : "Ádám", "value" : 0.119 }
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php7", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false } }
>