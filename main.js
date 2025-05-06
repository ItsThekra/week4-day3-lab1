let book = {
    title : "7 habits of successful people",
    author : "Stephen",
    year :  1989,
    isAvailable : true,

    borrow : function (){
        return false;
    },
    publisher:
    {
        name : "Mark",
        location: 
        {
            city : "Otako",
            country: "Japan"
        }

    }
}
// console.log(book.borrow());
// 01: 
console.log(book)
// 02: 
console.log(book.title);
// 03:
let changeYear = book.year = 2025;
console.log(changeYear);
console.log(book)
// 04:
console.log(delete book.author);
console.log(book)
// 05:
console.log(!book.borrow())
// 06:
console.log(book.publisher)
//07:
console.log(book.publisher.location.city)

