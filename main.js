//1. Створити сутність "Людина".
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

function{
    Person (name, age) {
        this. name = name;
        this. age = age;
        this. information = function () {
            console. log (`Name: ${this.name}, age: ${this.age}`);
}
//2. Створити сутність "Автомобіль".
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

        function Car(produc, model, year, number)
        this. produc = produc;
        this.model = model;
        this. year = year;
        this.number = number;


        this.Man = function (newMan){
            if (newMan instanceof Person){
                if(newMan.age >= 18){
                    return this.man = newMan;
                }
                else{
                alert(`власник мал`)
                }
                else {
                alert(`не підходить`)
                 }
        }
 //В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.
const person1=new Person(`Felix`,33);
const person2=new Person(`Ira`,40) ;
const person3=new Person(`Alik`,45);

const sedan=new Car(`Nissan`,`Juke`,2020,`BH23078OD`);
const jeep=new Car(`Citroen`,`Picasso`,2022,`BH7777OD`);

sedan.addMan(driver);
jeep.addMan(driverFather);

