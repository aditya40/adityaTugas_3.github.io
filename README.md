# adityaTugas_3.github.io

### Unit Test

#### TDD - Test Driven Development
#####  _Adalah metodologi saat kita mengembangkan suatu system dengan memastikan bahwa setiap komponen dalam sistem berjalan dengan semestinya. Proses yang dilakukan saat kita menerapkan Test Driven Development adalah:_
######   1. _Menyiapkan beberapa Testing Senario yang akan dilakukan untuk suatu komponen._
######   2. _Melakukan Development untuk komponen tersebut agar komponen tersebut lulus._
######   3. _Komponen yang telah lulus Unit Test disimpan untuk disusun dengan komponen lainya_
######   4. _Semua Fitur/Komponen/Kodingan yang telah melewati Unit Test akan digabungkan sampai seluruh sistem selesai._

#### BDD - Behavior Driven Test
#####   _merupakan kebalikan dari BDD. Metodologi BDD lebih mengedepankan behavior dari suatu sistem dimana hanya berfokus terhadap harapan dari client bahwa sistem berjalan sesuai harapan dari client._
######  Kelebihan BDD:
######  1. _Lebih berinterkasi dengan Stakeholder/Customer_
######  2. _Jika suatu Function berubah, tidak perlu dilakukan test lagi selama fungsi tersebut tidak mengubah hasil akhir._
######  3. _Behavior Test dapat dilakukan dengan Software apapun yang mirip, berbeda dengan Unit Test._
######  Kekurangan BDD:
######  1. _waktu yang lama untuk mengetest suatu_
######  2. _Kesulitan dalam melacak akar permasalahan jika terjadi suatu_

#### Unit Testing
##### _unit testing adalah pengujian bagian terkecil dari sebuah code. Dalam pemrograman prosedural unit bisa menjadi modul seluruh tetapi lebih umum fungsi individu atau prosedur._
###### Tujuan Unit Testing:
###### - _Mengisolasi setiap bagian dari program dan menunjukkan bahwa setiap bagian sudah benar_.
###### - _Mencari error di awal siklus pengembangan. Hal ini termasuk mengecek kebenaranprogrammer implementasi program dan mengatur alur atau ada bagian yang terlewat darispesifikasi yang diperlukan._
###### - _Mengurangi tingkat keraguan dalam unit tersebut dan dapat digunakan dalam pendekatantesting buttom-up._
#### Setting Up Jest
````
$ node -v
v11.5.0
Cek Versi Node

$ npm init -y
Inisasi aplikasi node baru.

$ npm i --dev jest
Install Jest Modul

$ npm i -g jsonserver
$ npm i axios
kemudian tambahkan juga jsonserver dan axios
````
#### Unit Testing Example
###### Math.js
````
const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

module.exports = { add, mul, sub, div };
````
###### Math.test.js
````
const { add, mul, sub, div } = require('./arith');

test('2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('3 * 4 = 12', () => {
  expect(mul(3, 4)).toBe(12);
});

test('5 - 6 = -1', () => {
  expect(sub(5, 6)).toBe(-1);
});

test('8 / 4 = 2', () => {
  expect(div(8, 4)).toBe(2);
});
````

### JavaScript - Functional Programming Paradigm

#### FPP
##### _Functional programming adalah paradigma pemrograman yang berkutat pada komputasi yang terjadi di dalam fungsi matematis dan menghindari terjadinya perubahan data. Yang dimaksud dengan fungsi matematis sendiri adalah sebuah hubungan antara input yang akan mengembalikan output. Contoh paling sederhana adalah sebuah fungsi kuadrat, misalnya f(x) = x * x. contohnya f(5) = 25_.

#### Pure Function
##### _Suatu fungsi disebut pure function jika selalu mengembalikan hasil yang sama untuk nilai argumen yang sama dan tidak memiliki efek samping seperti memodifikasi argumen (atau variabel global) atau menghasilkan sesuatu. Satu-satunya hasil memanggil pure function adalah return_
````
function priceAfterTax(productPrice) {
  return (productPrice * 0.20) + productPrice;
 }

 console.log(priceAfterTax(5)) //Result : 6
````

#### CallBack and High Order Function
##### _function yang dibuat dan dieksekusi didalam function lain (function yang memanggilnya). Callback function telah ada dibahasa pemrograman populer lain seperti PHP ,Node.js dll. Sedangkan High Order Function adalah fungsi yang menggunakan fungsi lain sebagai parameter atau sebagai hasil return_
````
setTimeout(function(){

   console.log("This will be written after 3 seconds");

},3000);


const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);
````

#### Recursive Funciton
##### _Function yang memanggil dirinya sendiri_
````
const countdown = function(value) {
  if (value > 0) {
      console.log(value);
      return countdown(value - 1);
  } else {
      return value;
  }
};
countdown(10);
````
