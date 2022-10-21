var mongoclient= require('mongodb').MongoClient;

var url="mongodb+srv://ashekdemo:MgtCZAgtlmwmUPFc@cluster0.dmoycrj.mongodb.net?retryWrites=true&w=majority";


var config={useUnifiedTopology: 'True'};

mongoclient.connect(url,config,function (error,MyMongoClient){

    if(error){
        console.log("connection Fail")
    }
    else {
        console.log("connection Success")
        // InsertData(MyMongoClient)
        // DeletOneItem(MyMongoClient)
        // DeletAllItem(MyMongoClient)
        // FindItemWithOutCondition(MyMongoClient)
        // FindItemWithCondition(MyMongoClient)
        // FindAllData(MyMongoClient)
        FindAllDataByProjection(MyMongoClient)
        // FindAllDataByQuery(MyMongoClient)
        // FindAllDataByLimit(MyMongoClient)
        // FindAllDataBySort(MyMongoClient)
        // UpdateMyData(MyMongoClient)
        // CreatMyCollection(MyMongoClient)
        // DeleteMyCollection(MyMongoClient)




    }
});

function InsertData(MyMongoClient){

    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students")
    var MyData={name:"Ashek",Roll:"01",Class:"12",};


    MyCollection.insertOne(MyData,function (error){
        if(error){
            console.log("Data Insert FAil")
        }
        else {
            console.log("Data Insert Success")
        }
    })

}

function DeletOneItem(MyMongoClient){
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("students")
    var DeleteItem={Roll:"02"}

    MyCollection.deleteOne(DeleteItem,function (error){
        if(error){
            console.log("Data Delete Fail")
        }
        else{
            console.log("Data Delete Success")
        }
    })
}

function DeletAllItem(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("students")

    MyCollection.deleteMany(function (error,){
        if(error){
            console.log("Delete Fail")
        }
        else {
            console.log("Item Deleted")
        }
    })


}

function FindItemWithOutCondition(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("students")
    var FindObj={}
    MyCollection.findOne(FindObj,function (error,result){

        console.log(result)
    })
}

function FindItemWithCondition(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("students")
    var FindObj={Roll:"03"}
    MyCollection.findOne(FindObj,function (error,result){

        console.log(result)
    })
}

function FindAllData(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("students")

    MyCollection.find().toArray(function (error,result){

        console.log(result)
    })
}

function FindAllDataByProjection(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("students")
    var ItemObj={};
    var ItemProjection={projection:{class:"",Roll:""}};

    MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result){

        console.log(result)
    })
}


function FindAllDataByQuery(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("students")

    var Query={Class:"12",city:"Noakhali"};

    MyCollection.find(Query).toArray(function (error,result){

        console.log(result)
    })
}


function FindAllDataByLimit(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("students")


    MyCollection.find().limit(20).toArray(function (error,result){

        console.log(result)
    })
}


function FindAllDataBySort(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("students")

    var SortPattern={Roll:-1}
    MyCollection.find().sort().toArray(function (error,result){

        console.log(result)
    })
}



function CreatMyCollection(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");

    MyDataBase.createCollection('teachers',function (error,result){
        console.log(result)
    })
}



function DeleteMyCollection(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");

    MyDataBase.dropCollection('teachers',function (error,result){
        console.log(result)
    })
}



