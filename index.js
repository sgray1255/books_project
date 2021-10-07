const GOOGLE_BOOKS = "https://www.googleapis.com/books/v1/volumes?q="
;
const input = document.querySelector("#search");
let SEARCH = "vonnegut";
const API_KEY = "key=AIzaSyCTKAC3zFG3p2sr2Ygc2_B_VI-GSs0mqQ0";

const getBooks = async () => {
  const response = await fetch(`${GOOGLE_BOOKS}${SEARCH}${API_KEY}`);

  const data = await response.json();
  console.log(data.data);
  return data.data;
  
}

getBooks();

const button = document.querySelector("#getBooks");

button.addEventListener("click", async(event) => {
  const books = await getBooks();
  console.log(books);

  // const input = document.querySelector ("#pageNumber")

  // const listItems = () => {
  //   const element = document.createElement('li');
  //   const bookText = `${book}`;
  //   const textNode = document.createTextNode(bookText);

  //   element.appendChild(textNode);
  //   return element;
  });

  // const list = document.querySelector("#books");

  // const append = parent => child => parent.appendChild(child);

  // listItems.forEach(append(list));
// })