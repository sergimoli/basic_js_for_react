const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// ---DESTRUCTURING---!
const book = getBook(3);
// const title = book.title;
// const author = book.author;
const { title, author, genres, publicationDate, hasMovieAdaptation } = book;

book;
title;
author;
genres;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
const [primaryGenre, secondaryGenre] = genres; //takes the first and the second element using the destructuring.
primaryGenre;
secondaryGenre;

// SPREAD OPERATOR
const [first, second, ...rest] = genres; //in this case the variable rest takes the rest of the values from the array.
first;
second;
rest;

const newGenres = [...genres, "teto"]; //important to do the spread operator. otherwise if you do[genres, 'teto'] newRenges have 1 array + teto. whth the spread operator take all the values from the array placing all them here so all the values are in the array. IMPORTANT!!
newGenres;

const updatedBook = { ...book, moviePublicationDate: "2001-12-19", pages: 22 }; //add new properties(moviePublicationDate) and a modification (pages) into the new object
updatedBook;

// TEMPLATE LITERALS --> you can write any javascript expression in the curly braces.
const summary = `${title} is a nice book that I've read ${4 + 2} times`;
summary;

// TERNARIES  avoid if else
const pages = 1001;
const pagesRange = pages > 1000 ? "over one thousand" : "lessss than 1000";
pagesRange;

// ARROW FUNCTIONS good for one line functions
// this is the 'old' way:
function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear(publicationDate));
publicationDate;

const getYear2 = (str) => str.split("-")[1];
console.log(getYear2(publicationDate));

// SHORT CIRCUITING AND LOGICCAL OPERATROS && || ??
// In this case if the 1st parameter is false it does not take the second
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "this book has a movie"); //hasMovieAdaptation is false it meansns the other text will be not written.
// falsy: 0, '', null, undefined
console.log("sergi" && "sergi is my name"); //because is not falsy the first one it takes the second.

//in the following case is different. In case the first parameter is true does NOT take the second.
console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSALTED";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount); //the values is zero.. ok
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "no data";
// this is the NULLISH COALESCING operator: will only return the second value when the first value is null or undefined BUT NO when it's zero or an empty string
console.log(count);

// OPTIONAL CHAINING OPERATOR
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  // const librarything = book.reviews.librarything.reviewsCount; //depending on the book selected like the 3 (works is 2) reviews.librarything.reviewcount = undefined, so... SOLUTION:
  // const librarything2 = book.reviews.librarything?.reviewsCount;
  // AND WHE can improve a little bit this... (just no to return undefined for librarything2)
  const librarything3 = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything3;
}
console.log(getTotalReviewCount(book));

*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
//ARRAY MAP METHOD --> map, filter, reduce. do not mutate the original but return a new arrray based on the original one.
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything3 = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything3;
}

const books = getBooks();
books;
// MAP METHOD WILL LOOP OVER AN ARRAY AND RETURN A NEW ARRAY WITH THE SAME LENGTH AND SOME OPERATION APPLIED TO EACH OF THE ELEMENTS OF THE ORIGINAL ARRAY
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
essentialData;

// if we don't want to use the return we can do...
const essentialData2 = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData2;

//FILTER METHOD to filter out some elements of the array based on a condition
const longBooks = books.filter((book) => book.pages > 500); //if it's false it's filter out..it will not make into the new array.
longBooks;
console.log(longBooks.length);
// we can improve the filter like...
const longBooks2 = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks2;

//in this case: books where genres includes adventures and gets the title.
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//REDUCED METHOD: THE most powerfull method. you can implement all methods in this.
//the most common uses are the following:

//accbook is the acumulator.
const pagesAllBooks = books.reduce((accbook, book) => accbook + book.pages, 0);
pagesAllBooks;

//SORT METHOD BE CAREFUL. THIS is not a functional method. it MUTATES THE original array!
const arr = [3, 7, 1, 9, 6];
const sortedAscc = arr.sort((a, b) => a - b);
sortedAscc;
arr; // we can see it's mutatet

const sortedDescc = arr.sort((a, b) => b - a);
sortedDescc;

//Solution, force a copy of the array with the 'slice' method:
const arr2 = [3, 7, 1, 9, 6];
const sortAgain = arr.slice().sort((a, b) => a - b);
sortAgain;
arr2;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// WORKING WITH INMUTABLE ARRAYS (add, delete, update whithout changing the original array)
// 1) add book object to Array
const newBook = {
  id: 6,
  title: "harry potter and the chamber of secrets",
  author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 02) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 03) Update book object in the array
const bookAfterUpdate = booksAfterDelete.map((book) =>
  book.id == 1 ? { ...book, pages: 1 } : book
);
bookAfterUpdate;
*/
// ASYNCRONNOUS - PROMISES

fetch("https://jsonplaceholder.typicode.com/todos") //we have a promise
  .then((res) => res.json()) //we need to pass in callback that will be executed as soon as the data has arrived. This data needs to be convered from json to a javascript object. It returns another promise. it's asyncronus operation and that's why we need to add another then.
  .then((data) => console.log(data));

// ASYNC/AWAIT  MORE CLEANER THAN BEFORE
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  // return data;
}

// const todos = getTodos();
// console.log(todos);
