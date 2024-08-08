console.log("Hello, World");

var object = "Hallo";
console.log(object);

//ini adalah declaration dengan var dan init dengan value "rendi"
var name = "Rendi";
console.log (name)

name = "Roni"
console.log (name)

/*
Let sama dengan fungsi var, hanya saja let lebih modern
dan sering digunakan saat ini
*/
let data ="this is a simple string"
console.log  (data)

data = "Roni"
console.log (data)

let empty
console.log (empty)

//"count" adalah variabel konstanta yang nilainya tidak bisa dirubah
const phi = 3.14 // => variabel dengan tipe data float (desimal)
const area = 10000 // => variabel dengan tipe data interger (bilangan bulat)
const description = "Ini adalah deskripsi" // => variabel dengan tipe data string (text)

console.log (typeof area); //"typeof" untuk memastikan tipe data apakah dari veriabel area
console.log (typeof description);

console.log (phi);
console.log (area);
console.log (description);

const sudahistirahat = true; // => variabel dengan tipe data boolean (true/false)
console.log(typeof sudahistirahat);
console.log(sudahistirahat);

// "object bisa menambahkan banyak data"
const profile = {
    name : "Roni", //tipe data dari property name adalah string
    age : 22, //tipe data dari age adalah number
    address : "Lampung", //tipe data dari address adalah string
    ismarried : false, //tipe data dari ismarried adalah false
    school : {
        name : 'ITERA',
        year : 2014,
        address : 'Sukarame'
    }
};

console.log(profile);
console.log(profile.name); //=> menampilkan property name di dalam object profile
console.log(typeof profile);

//Array => untuk menyimpan data dalam jumlah banyak
const sampleArray = [
    100, // => Data pertama dalam tipe data array, dan selanjutnya adalah data urutan selanjutnya
    "A",
    true,
    {name:"Rendi"} // => Array of Object
];

console.log(typeof sampleArray);

const scores = [60,70,80,90,100] // => 60 adalah elemen dari array yang berlokasi di index ke-0
/**
 * Setiap data di dalam Array memiliki index sebagai urutan atau lokasi data tersebut berada
 * Dan array itu selalu dimulai dengan index 0 yang artinya data pertama dalam array
 * dalam contoh di atas index ke 0 adalah 60
 */
console.log(scores[2]); // => Akses Array menggunakan index
console.log(typeof scores);

scores[0] = 65; // => merubah isi element dari array index ke-0
console.log(scores[0]); // output: 65

const fruits = ['apple', 'banana', 'kiwi'];

console.log(fruits);//=> output: aplle, banana, kiwi

fruits.push("orange"); // Menambahkan elemen di bagian akhir Array
console.log(fruits); // => output: aplle, banana, kiwi, orange

fruits.unshift("mango") // Menambahkan elemen di bagian awal Array
console.log(fruits); //=> output: mango, aplle, banana, kiwi, orange

fruits.pop(); // Menghapus element di bagian akhir Array
console.log(fruits); //=> output: mango, aplle, banana, kiwi

fruits.shift(); // Menghapus element di bagian awal Array
console.log(fruits); //=> output: aplle, banana, kiwi

console.log(fruits.length); //Memastikan panjang dari Array terakhir

const morefruits = ["grape", "orange"]

const allfruits = fruits.concat(morefruits); // "concat" => Menggabungkan 2 Array menjadi 1
console.log(allfruits); // => output: aplle, banana, kiwi, grape, orange

/**
 * let i = 0 adalah definisi dari index array yang mau kita mulai perulangan nya, jika i ini isinya 0
 * maka array akan di akses dari index ke 0
 * 
 * i < food.length adalah condition, yang berarti variable i itu tidak boleh kurang dari
 * food.length atau dalam kasus ini index itu tidak boleh melibihi panjang array
 * 
 * i++ adalah post statement yang berarti, ketika condition i < food.length itu terpenuhi,
 * maka nilai i akan ditambah 1
 * 
 * ++ merupakan increment (atau menambah 1)
 * -- merupakan dicrement (atau mengurang 1)
 */

const food = ["Mie", "telur", "nasi"]
for (let i =0; i < food.length; i++) {
    console.log(food[i]);;
}

console.log("Perulangan Berhasil");

//Dua dimensi Array
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[1][1]); //=> output: 5

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       console.log(matrix[i][j]);
    }
}

//Multi dimensi Array
const matrixs = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ],
];

console.log(matrixs[0][1][2]); //=> output: 6

// segitiga kanan
for (let i = 0; i < 5; i++) {
   let string = "*"

   console.log(string.repeat(i));   
}

// segitiga kanan
let x = 5
for (let i = 0; i < x; i++) {
    let string = "* "
    let space = "  "
    console.log(space.repeat((x-i)) + string.repeat(i));
}

// segitiga
let a = 5
for (let i = 0; i < a; i++) {
    let string = "* "
    let space = " "
    console.log(space.repeat((a-i)) + string.repeat(i));
}
/**
 * Ketika variabel dalam kondisi if () bernilai boolean cukup gunakan nama variabel jika ingin,
 * memeriksa bahwa itu benar atau true. Jika ingin memeriksa jika itu salah cukup gunakan !namaVariabel
 * yang artinya ! melambangkan negative value dalam kasus boolean negative adalah falses
 */
// => Untuk tipe data boolean kita hanya cukup memasukkan kondisi true atau false
const isloggedin = true;

if (isloggedin) {
    console.log("Hallo Admin");
} else {
    console.log("Harap Login");
}

// => Utuk tipe datanya bukan boolean kita harus pakai operasi == atau !==
const baju = "Coklat"

if (baju == "Putih") {
    console.log("Baju Bersih");
} else if (baju == "merah") {
    console.log("Baju bewarna Merah");
} else {
    console.log("Baju Kotor");
}

/**
 * 
 * ini merupakan declaration dari sebuah function sederhana
 * decleration function di tulis dengan keywords function namaFunction()
 * jika function tidsk memiliki keyword return dia merupakan void function
 * yang berarti function tersebut tidak mengembalikan nilai apapun ketika digunakan
 * age = 23 merupakan iniliazation parameter dengan nilai awal atau default value,
 * ketika kita melakukan pemanggilan function tanpa mengirim parameter age, maka secara default
 * age itu bernilai 23 dan jika kita memasukan nilai parameter ke 2 nilai age akan sesuai berdasarkan
 * parameter kedua yang dikirim dari pemanggilan function
 * 
 * 
 * @return String
*/

function greet (name, age = 23) {
    // penggunaan string literal atau ' ketika ingin menggunakan variabel/parameter harus dengan${}
   return `hello, ${name}. My age is ${age} yo`;
}

const greeting = greet("akbar", 24); // => jika function memiliki keywords return didalamnya bisa menggunakan variable

console.log(greeting);

console.log(greet("akbar")); // => function bisa digunakan langsung tanpa variable seperti contoh berikut

/**
 * * perkalian
 * / pembagian
 * + penjumlahan
 * - pengurangan
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
    if (a > 2) {
        return a * b;
    }
    return a + b;
}

console.log(add(5, 3)); // => Output selalu a + b dalam kasus ini argument nya bernilai 5 dan 3 dan hasilnya 8

function fizzbuzz(number) {
    if (number % 2 == 0) {
        return "fizz";
    }

    if (number % 3 == 0) {
        return "buzz";
    }

    if (number % 5 == 0) {
        return "fizzbuzz";
    }

    return "failed";
}
console.log(fizzbuzz(2)); // => output fizz
console.log(fizzbuzz(3)); // => output buzz
console.log(fizzbuzz(5)); // => output fizzbuzz
console.log(fizzbuzz(7)); // => output failed
// anonymous function
const greetanon = function(name){
    return `hello, ${name} from anonymous function`;
}

console.log(greetanon("akbar"));

// arrow function
const greatarrow = (name) => `hello, ${name} from Arrow function`;

console.log(greatarrow("akbar"));

/**
 * class itu didefinisikan dengan keyword class
 * class juga memiliki constructor dimana cinstructor diakses di awal ketika
 * kita melakukan pembuatan object baru dari class dengan keyword new car ("toyota", "camry" 2020)
 * pada dalam constructor kita menggunakan keyword this. untuk mendefinisikan sebuah property,
 * didalam object. Mirip dengan tipe data object lainnya class juga punya properti
 */
class car {
    constructor(name, brand, year) {
      this._name = name;
      this._brand = brand;
      this._year = year;
    }

    information() {
        return `${this.name} have brand from ${this._brand} and build in ${this._year}`;
    }
    //Ini adalah setter untuk merubah nilai dari sebuah property
    setName(name) {
        this._name = name;
    }

    //Ini adalah setter untuk mengambil data dari sebuah
    getName() {
        return this.name;
    }

    //Ini merupakan contoh penggunaan setter dengan keyword set
    set name(value) {
        if (value !== "") {
            this._name = value;
        } else {
            console.log("The value must be not  empty string.");
        }
    }

    //Ini merupakan contoh penggunaan getter dengan keyword get
    get name() {
        return this._name;
    }
}

const mycar = new car("toyota", "camry", 2020);
console.log(mycar.information());
//mycar.setName ("daihatsu");
mycar.name = "Honda"; //Menggunakan setter untuk merubah data dari property yang ada di class
console.log(mycar.information());
console.log(mycar.name);


/**
 * Animal merupakan sebuah perent class yang memiliki property name dan method speak
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

/**
 * Dog merupakan sebuah children class yang mewarisi semua yang ada di dalam class Animal.
 * Baik itu property maupun method.
 */
class Dog extends Animal {
    speak() {
        console.log("What this dog do'in");
    }
 }

const dog = new Dog("Holly");
dog.speak();
/**
 * Keywords Super digunakan untuk mengakses isi dari parent class
 */
class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color;
    }

    speak() {
        super.speak();
        console.log(`${this.name} meows.`);
    }
}

const cat = new Cat("Whisker", "Gray")
cat.speak();

class Mathutil {
    static penjumlahan(a, b) {
        return a + b;
    }

    static perkalian(a, b) {
        return a * b;
    }
}

console.log(Mathutil.penjumlahan(1, 2)); // output: 3
console.log(Mathutil.perkalian(5, 3)); // output: 15

/**
 * Naming convention Class biasanya menggunakan PascalCase atau sebagai contoh LoanDisbursement
 * Naming convention variable biasanya itu camelCase atau variableName
 * Naming convention function biasanya itu camelCase atau functionName
 */

