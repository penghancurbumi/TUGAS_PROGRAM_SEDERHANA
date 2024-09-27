// keliling lingkaran
const jari = prompt("masukan jari jari :")
const keliling =2*Math.PI*jari
console.log(`keliling lingkaran adalah${keliling}`)

// luas persegi panjang
const panjang = prompt("masukan panjang :");
const lebar = prompt("masukan lebar :");
const luas =  panjang*lebar;
console.log(`luas persegi panjang adalah ${luas}`)

//volume kubus
const sisi = prompt("masukan sisi :")
const volume = sisi*sisi*sisi;
console.log(`volume kubus adalah ${volume}`)

// menghitung suhu
const suhu = prompt("masukan suhu :")
const celcius = (suhu*(9/5))+32;
console.log(celcius)

// menghitung harga telur  
const telurperkg = 28000;
const totalbeli = prompt("masukan total beli telur :")
const totalharga = telurperkg * totalbeli
const uangbayar = prompt("masukan uang bayar :")
const kembalian = uangbayar - totalharga
console.log(kembalian)





