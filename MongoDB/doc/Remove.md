> db.measure.remove({value: {$lt: 0.1}})
WriteResult({ "nRemoved" : 0 })
> db.measure.remove({value: {$lt: 0.2}})
WriteResult({ "nRemoved" : 8 })
> db.measure.find()
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php7", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false } }
> db.measure.remove({}, {justOne: true})
WriteResult({ "nRemoved" : 1 })
>