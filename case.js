/* Umur seorang ayah adalah empat
kali umur
anaknya. Jika jumlah umur
ayah dan anak saat
itu adalah 80
tahun, berapakah umur si anak?*/

//Soal 1

let psonAge = 1  
let pdadAge = 4;
let totalAge = 80;

let total =psonAge + pdadAge;
let sonAge = totalAge / total;  
console.log(sonAge) // print 16


//Soal 2
/*tampilkanlah tanggal bulan da
n tahun hari ini, besok dan kemarin*/

//Hari ini
const today = new Date()
const year = today.getFullYear() 
console.log(year); // print 2022
const month = today.getMonth() ;
console.log(month); // print 10 > 0-11 -> januari-desember
const day = today.getDay();
console.log(day); //print 5 ==> 0-6 > minggu-sabtu
const date = today.getDate();
console.log(date); //print 11
console.log(`hari ini hari ${day}, tanggal ${date} bulan ${month} tahun ${year}.`);

//Kemarin
const today1 = new Date()
const year1 = today1.getFullYear() ;
console.log(year1); // print 2022
const month1 = today1.getMonth() ; 
console.log(month1); // print 10 > 0-11 -> januari-desember
const day1 = today1.getDay() -1;
console.log(day1); //print 4 ==> 0-6 > minggu-sabtu
const date1 = today1.getDate() -1;
console.log(date1); //print 10
console.log(`hari ini hari ${day1}, tanggal ${date1} bulan ${month1} tahun ${year1}.`);

//Besok
const today2 = new Date()
const year2 = today2.getFullYear() ;
console.log(year2); // print 2022
const month2 = today2.getMonth() ; 
console.log(month2); // print 10 > 0-11 -> januari-desember
const day2 = today2.getDay() +1;
console.log(day2); //print 6 ==> 0-6 > minggu-sabtu
const date2 = today2.getDate() +1;
console.log(date2); //print 12
console.log(`hari ini hari ${day2}, tanggal ${date2} bulan ${month2} tahun ${year2}.`);