use test

db

db.createCollection("users");

db.dogs.stats()

db.getCollection('dogs').insertOne(
{
  name: 'burek',
  age: 3,
  features: ['zjada kapcie', 'pozwala się głaskać', 'rudy'],    
}
)

db.getCollection('dogs').insertMany([
  {
    name: 'Mamba',
    age: 2,
    features: ['poluje na samochody', 'szczerzy zęby', 'czarna'],
  },
  {
    name: 'Pirat',
    age: 4,
    features: ['ma tylko jedno oko', 'pozwala się głaskać', 'kudłaty'],
    },
    {
    "_id" : ObjectId("65380049943d61a4c9fb813a"),
    "name" : "Kajtek",
    "age" : 15.0
},
  {
    "name" : "Klusia",
    "age" : 10.0,
    "features" : [ 
        "w kształcie kadłuba", 
        "szara"
    ],
    "owner" : {
        "name" : "Jola",
        "age" : 27.0,
        "address" : "Kraków"
    }
}
]);


ObjectId("6537fe75943d61a4c9fb8129") !== "6537fe75943d61a4c9fb8129"


// something like ===
// does not work for arrays as expected
db.getCollection('dogs').find({ name: "Kajtek" })
// {}
db.getCollection('dogs').find({ age: { $gt: 5 } })
// eq, gt, lt, gte, lte

db.getCollection('dogs').find({ features: 'zjada trawę' })
db.getCollection('dogs').find({ features: { $eq: 'zjada trawę' } })

db.getCollection('dogs').find({ age: { $gt: 5 } }, { name: 1, age: 1 })
db.getCollection('dogs').find({ age: { $gt: 5 } }, { name: 1, age: 1, _id: 0 })

db.getCollection('dogs').find({ age: { $gt: 5 } }, { name: 0, age: 0 })

db.getCollection('dogs').find({ age: { $gt: 5 } }, { name: 0, age: 1 }) // wrong
db.getCollection('dogs').find({ age: { $gt: 5 } }, { name: 1, _id: 0 }) // okay because _id is special

db.getCollection('dogs').find({ age: { $gt: 2 } }, { name: 1, age: 1 })

db.getCollection('dogs')
    .find({ age: { $gt: 2 } }, { name: 1, age: 1 })
    .sort({ name: 1, age: -1 }) // order matters, 1 - ascending | -1 - descending

db.getCollection('dogs')
    .find({ age: { $gt: 2 } }, { name: 1, age: 1 })
    .sort({ name: 1, age: 1 })
    .limit(2) // limits number of documents

db.getCollection('dogs')
    .find({ age: { $gt: 2 } }, { name: 1, age: 1 })
    .sort({ name: 1, age: 1 })
    .skip(1) // skips documents
    .limit(2)

// page = 3
// perPage = 20    
// .skip((page-1) * perPage).limit(perPage)

db.getCollection('dogs').count()
db.getCollection('dogs').count({ age: 3 })

db.getCollection('dogs').find({
    age: { $type: 'number' }
})

db.getCollection('dogs').find({
 owner: { $exists: true }
})

db.getCollection('dogs').find({
 owner: { $exists: false }
})

db.getCollection('dogs').find({
 name: { $regex: 'A' }
})

db.getCollection('dogs').find({
 name: /A/i
})


db.getCollection('dogs').find({
    name: /A/i,
    age: 10
})

db.getCollection('dogs').find({'owner.age': 27})

db.getCollection('dogs').find({
    $or: [
        { "name" : "Kajtek", age: 15 },
        { age: 3 }
    ]
})


// (name === "Kajtek" || age === 15 ) && (age === 15)
db.getCollection('dogs').find({
    // &&
    $and: [
    // (name === "Kajtek" || age === 15 )
        { $or: [{ "name": "Kajtek" }, { age: 15 }] },
    // (age === 15)
        { age: 15 }
    ]
})


const cursor = db.dogs.find()

while (cursor.hasNext()) { 
    obj = cursor.next();
    print(obj['name'])
}


let cursorNew = db.dogs.find()

while (cursorNew.hasNext()) { 
    obj = cursorNew.next();
    print(obj['name'])
}


db.getCollection('dogs').save({ name: "Bars", age: 3 })

db.getCollection('dogs').deleteOne({})
db.getCollection('dogs').count({})
db.getCollection('dogs').deleteMany({})


db.getCollection('dogs').updateOne(
    { name: "Azor" },
    { $set: { name: 'Tom' }, $inc: { age: 2 } },
    {}
)

db.getCollection('dogs').updateMany(
    { },
    { $inc: { age: 1 } }
)


/* upsert */
// inserting
db.getCollection('dogs').updateOne(
    { name: "Azor" },
    { $set: { name: 'Azor', age: '15', features: ['nie lubi wychodzić w deszczu'] } },
    { upsert: true }
)

// updating
db.getCollection('dogs').updateOne(
    { name: "Azor" },
    { $set: { name: 'Azor', age: '10', features: ['nie lubi wychodzić w deszczu'], updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } },
    { upsert: true }
)

// $set, $setOnInsert