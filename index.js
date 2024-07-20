const dbConnect = require('./mongodb')

const main = async () => {
     const db = await dbConnect()
     const response = await db.find({}).toArray()
    console.log('response', response);
}

main()