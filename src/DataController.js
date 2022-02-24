const DataController = (function () {
    const URL = "../data/users.json"

    async function getData() {
        var response = await fetch(URL)
        var data = await response.text()
        var users = await JSON.parse(data)
        return users
    }

    async function postData(data) {
        var response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err))
    }

    return {
        getData,
        postData
    }
})()