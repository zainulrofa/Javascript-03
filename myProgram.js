// program 1
beratBadan dalam kg, tinggiBadan dalam meter
const hitungBmi = (beratBadan, tinggiBadan) => {
    return new Promise((resolve, reject) => {
        console.log('Menghitung...')
        setTimeout(() => {
            let bmi = Math.floor(beratBadan / Math.pow(tinggiBadan, 2))
            if (bmi) {
                resolve(bmi)
            } else {
                reject(new Error('Input salah. Silahkan coba lagi'))
            }
        }, 3000)
    })
}

hitungBmi(70, 1.7).then((hasil) => {
        if (hasil <= 18.5) {
            console.log(`Hasil BMI kamu ${hasil}`)
            console.log('Kamu kurus')
        }
        if (hasil > 18.5 && hasil <= 24.9) {
            console.log(`Hasil BMI kamu ${hasil}`)
            console.log('Kamu normal')
        }
        if (hasil > 24.9 && hasil <= 29.9) {
            console.log(`Hasil BMI kamu ${hasil}`)
            console.log('Kamu overweight')
        }
        if (hasil > 29.9) {
            console.log(`Hasil BMI kamu ${hasil}`)
            console.log('Kamu obesitas')
        }
    })
    .catch((err) => {
        console.log(err.message)
    })

// program 2
const angkaKeberuntungan = (angkaAwal, angkaAkhir) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Melihat susunan rasi bintang')
        }, 1000)
        setTimeout(() => {
            console.log('Merasakan aura tubuh')
        }, 3000)
        setTimeout(() => {
            let lucky = Math.floor(Math.random() * angkaAkhir) + angkaAwal
            if (lucky && typeof angkaAwal == 'number') {
                resolve(lucky)
            } else {
                reject(new Error('Ada yang salah nih'))
            }
        }, 5000)
    })
}

async function doLuckyNum(angkaAwal, angkaAkhir, luckyFunc) {
    try {
        if (typeof luckyFunc !== "function") throw new Error('Invalid Parameter')
        const response = await luckyFunc(angkaAwal, angkaAkhir)
        return console.log(`Pilih yang ada angka ${response} nya ya biar beruntung`)
    } catch (err) {
        return console.log(err.message)
    }
}

doLuckyNum(1, 100, angkaKeberuntungan)


// angkaKeberuntungan(1, 100).then((akhir) => {
//         console.log(`Pilih yang ada angka ${akhir} nya ya biar beruntung!`)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })
