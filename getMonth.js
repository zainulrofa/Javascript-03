const getMonth = (cb) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if (!error) {
            cb(null, month)
        } else {
            cb(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

const showMonth = (err, inputMonth) => {
    if (err) {
        return console.log(err.message)
    }
    const allMonth = inputMonth.map(print)
}

const print = (month) => {
    return console.log(month)
}

getMonth(showMonth)
