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

cekHariKerja('rabu').then((solved) => {
        console.log(`${solved} adalah hari kerja`)
    })
    .catch((err) => {
        console.log(err.message)
    })

// try catch version
async function hariKerja(cek, hariKerjaFunc) {
    try {
        if (typeof hariKerjaFunc !== "function") throw new Error('Invalid Parameter')
        const response = await hariKerjaFunc(cek)
        return console.log(`${response} adalah hari kerja`)
    } catch (err) {
        return console.log(err.message)
    }
}

hariKerja('selasa', cekHariKerja)
hariKerja('minggu', cekHariKerja)
hariKerja('selasa', 'cekHariKerja')