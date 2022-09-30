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

const showMonth = (el, bulan) => {
    if (typeof bulan !== "string") return console.log('Invalid Data')
}

consol.log(getMonth(showMonth()))