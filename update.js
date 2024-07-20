const dbConnect = require('./mongodb')

const update = async () => {
     const db = await dbConnect()
     const response = await db.updateOne({name: "samsumng 2640"}, {$set: {price: 1000}})
    console.log('response', response);
}

update()