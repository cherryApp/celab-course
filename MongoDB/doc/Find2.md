> db
cavity
> db.measure.insert({name: 'Botond', skills: ['php', 'mysql', 'mongodb', 'Mozilla']});
WriteResult({ "nInserted" : 1 })
> db.measure.find({skills: {$in: [/mozilla/i]})
...
...
> db.measure.find({skills: {$in: [/mozilla/i]}})
{ "_id" : ObjectId("5fbf79408d5b924552ae6bd9"), "name" : "Botond", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ] }
> db.measure.insert({name: 'Zsolti', skills: ['php', 'mysql', 'mongodb', 'Mozilla'], access: {}});
WriteResult({ "nInserted" : 1 })
> db.measure.insert({name: 'Zsolti', skills: ['php', 'mysql', 'mongodb', 'Mozilla'], access: {admin: true}});
WriteResult({ "nInserted" : 1 })
> db.measure.find({access.admin: true})
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:23
> db.measure.find(eq("access.admin", true))
uncaught exception: ReferenceError: eq is not defined :
@(shell):1:1
> db.measure.find($eq("access.admin", true))
uncaught exception: ReferenceError: $eq is not defined :
@(shell):1:1
> db.measure.find({'access.admin': true})
{ "_id" : ObjectId("5fbf7a088d5b924552ae6bdb"), "name" : "Zsolti", "skills" : [ "php", "mysql", "mongodb", "Mozilla" ], "access" : { "admin" : true } }
> db.measure.update
db.measure.update(      db.measure.updateMany(  db.measure.updateOne(
>