> db.measure.find().count()
2
> db.measure.distinct('name')
[ "Zsolti" ]
> db.measure.distinct('name').count()
uncaught exception: TypeError: db.measure.distinct(...).count is not a function :
@(shell):1:1
> db.measure.distinct('name').length
1
> db.measure.insert({name: 'Veér Pistike', age: 22, skills: ['cry']})
WriteResult({ "nInserted" : 1 })
> db.measure.distinct('name').length
2
> db.measure.distinct('name')
[ "Veér Pistike", "Zsolti" ]
> db.measure.aggregate([ {$match: {name: {$regex: /zsolt/i}}} ])
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  } }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php7", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false } }
> db.measure.updateMany({name: 'Zsolti'}, {$set: {salary: 5000000}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.measure.find()
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  }, "salary" : 5000000 }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php7", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false }, "salary" : 5000000 }
{ "_id" : ObjectId("5fbf86828d5b924552ae6bdc"), "name" : "Veér Pistike", "age" : 22, "skills" : [ "cry" ] }
> db.measure.aggregate([ {$match: {name: {$regex: /zsolt/i}}}, {$group: {_id: '$salary', total: {$sum: '$salary'}}} ])
{ "_id" : 5000000, "total" : 10000000 }
> db.measure.find()
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  }, "salary" : 5000000 }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php7", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false }, "salary" : 5000000 }
{ "_id" : ObjectId("5fbf86828d5b924552ae6bdc"), "name" : "Veér Pistike", "age" : 22, "skills" : [ "cry" ] }
> db.measure.updateMany({_id: ObjectId("5fbf86828d5b924552ae6bdc")}, {$set: {salary: 5000000}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.measure.find()
{ "_id" : ObjectId("5fbf79ec8d5b924552ae6bda"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : {  }, "salary" : 5000000 }
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php7", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : false }, "salary" : 5000000 }
{ "_id" : ObjectId("5fbf86828d5b924552ae6bdc"), "name" : "Veér Pistike", "age" : 22, "skills" : [ "cry" ], "salary" : 5000000 }
> db.measure.aggregate([ {$match: {name: {$regex: /.*/i}}}, {$group: {_id: '$salary', total: {$sum: '$salary'}}} ])
{ "_id" : 5000000, "total" : 15000000 }
> db.measure.updateMany({_id: ObjectId("5fbf86828d5b924552ae6bdc")}, {$set: {salary: 125000}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.measure.aggregate([ {$match: {name: {$regex: /.*/i}}}, {$group: {_id: '$salary', total: {$sum: '$salary'}}} ])
{ "_id" : 125000, "total" : 125000 }
{ "_id" : 5000000, "total" : 10000000 }