const GOOGLE_BOOKS = "https://www.googleapis.com/books/v1/volumes?q="
;


const getBooks = async (query) => {
  const response = await fetch(`${GOOGLE_BOOKS}${query}&orderBy=relevance&maxResults=8`);
  const data = await response.json();
  return data.items;
}



// const getInfo = async (query) => {
//   const info = await getBooks(query);
//   // console.log(info);
//   const bookArray = info.map((query) => {
//     const bookObject = {
//       title: query.volumeInfo.title,
//       author: query.volumeInfo.authors,
//       img: query.volumeInfo.imageLinks,
//       description: query.volumeInfo.description
//     }
//     // console.log(bookObject);
//     return bookObject;
//   })
//   return bookArray;
// };

// getInfo();

const button = document.querySelector("#getBooks");

let list = {};

button.addEventListener("click", async(event) => {
 
  const input = document.querySelector("#search");
  const query = input.value; 

  if(!query) {
    alert("Type in a keyword and click search!");
    return;
  }

  const gotBooks = await getBooks(query);


  list = gotBooks.map((book) => {

  const element = document.createElement('li');

  const cover = document.createElement('img');
  cover.src = `${book.volumeInfo.imageLinks.smallThumbnail}`;

  const bookText = `${book.volumeInfo.title} written by ${book.volumeInfo.authors}`;
  const textNode = document.createTextNode(bookText);

  element.appendChild(cover);
  element.appendChild(textNode);
  console.log(element)
  return element; 
  });

});

 

