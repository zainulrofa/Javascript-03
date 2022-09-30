// then catch version
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
// di tahap ini berada pada keadaan pending dimana nilai masih belum diketahui antara resolve atau reject

cekHariKerja('rabu').then((solved) => {
        console.log(`${solved} adalah hari kerja`)
    })
 //.then tempat kita memasukkan cb function untuk nilai resolve  
    .catch((err) => {
        console.log(err.message)
    })
//.catch tempat kita memasukkan cb function untuk nilai rejected 

// try catch version
async function hariKerja(cek, hariKerjaFunc) {
    try {
        if (typeof hariKerjaFunc !== "function") throw new Error('Invalid Parameter')
        const response = await hariKerjaFunc(cek)
        return console.log(`${response} adalah hari kerja`)
 // try digunakan untuk menyimpan code yang masih memungkinkan terjadinya error
    } catch (err) {
        return console.log(err.message)
// catch digunakan untuk menangkap error yang muncul di try
    }
}

hariKerja('selasa', cekHariKerja)
hariKerja('minggu', cekHariKerja)
hariKerja('selasa', 'cekHariKerja')
