const dbConnect = require('./mongodb')

const deleteOne = async () => {
     const db = await dbConnect()
     const response = await db.deleteOne({name: "samsumng 2640"})
    console.log('response', response);
}

deleteOne()