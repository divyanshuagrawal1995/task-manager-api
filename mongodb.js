// const mongodb=require('mongodb');
// const MongoClient=mongodb.MongoClient
const {MongoClient,ObjectID}=require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const dataBaseName='task-manager'
// const id=new ObjectID()
//     console.log(id.id.length);
//     console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database')
    
    }
    const db=client.db(dataBaseName)
    // const updatedPromise=db.collection('users').updateOne({
    //     _id:new ObjectID("5d246cdc3b33b42d98b46dea")
    // },{
    //     $set:{
    //         name:'Mike Taylor'
    //     }

    // })
    // updatedPromise.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // db.collection('tasks').updateMany({
    //    completed:false
    // },{
    //    $set:{
    //      completed:true
    //    }
    // }).then((results)=>{
    //     console.log(results)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // db.collection('users').deleteMany({
    //     age:24
    // }).then((results)=>{
    //     console.log(results)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    

    db.collection('tasks').deleteOne({
        desciption:"Pot plants"
    }).then((results)=>{
        console.log(results)

    }).catch((error)=>{
        console.log(error)
    })
})
