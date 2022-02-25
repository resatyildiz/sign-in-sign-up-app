const AppController = (function (DataCTRL) {

    async function test2() {
        var testtt = await DataCTRL.getData()
        console.log(testtt);
    }
    var test = { "id": 4, "email": "teest", "username": "test", "password": "123" }
    DataCTRL.postData(test);

})