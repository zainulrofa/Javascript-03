fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => {
        return Response.json()
    })
    .then(hasil => {
        hasil.forEach(nama => console.log(nama.name));
    }).catch(error => {
        console.log(error)
    })