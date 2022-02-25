// import JsonData from "../data/users.json";

const DataController = () => {

    debugger
    async function getData() {
        var response = await fetch(URL)
        var data = await response.text()
        var users = await JSON.parse(data)
        return users
    }

    async function postData(data) {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            var data = response.json();
            console.log(data);
        }).catch(err => console.log(err))
    }

    return {
        getData,
        postData
    }
};
