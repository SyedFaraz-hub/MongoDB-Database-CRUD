const dbConnect = require('./mongodb')

const insert = async () => {
     const db = await dbConnect()
     const response = await db.insertOne({
        name: "Phone",
        price: 200
     })
    console.log('response', response);
}

insert()