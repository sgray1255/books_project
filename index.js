const GOOGLE_BOOKS = "https://www.googleapis.com/books/v1/volumes?q="
;
const input = document.querySelector("#search");
const query = input.value; 


const getBooks = async (query) => {
  const response = await fetch(`${GOOGLE_BOOKS}${query}&orderBy=relevance&maxResults=8`);
  const data = await response.json();
  return data.items;
}



const button = document.querySelector("#getBooks");

let list = {};

button.addEventListener("click", async(event) => {
  // create function to reset result

  // const input = document.querySelector("#search");
  // const query = input.value; 

  if(!query) {
    alert("Type in a keyword and click search!");
    return;
  }

  const gotBooks = await getBooks(query);


  list = gotBooks.map((book) => {

  const element = document.createElement('h4');

  const cover = document.createElement('img');
  cover.classList.add("cover");
  if (!book.volumeInfo.imageLinks){
    cover.src = "./images/default_book_cover.jpg";      
  } else {
    cover.src = `${book.volumeInfo.imageLinks.smallThumbnail}`;

  };

  const titleText = `${book.volumeInfo.title}`;
  const titleNode = document.createTextNode(titleText);


  const description = document.createElement('p');
  const descriptionText = " " + ` Description: ${book.volumeInfo.description}`;
  const descriptionNode = document.createTextNode(descriptionText);
  description.appendChild(descriptionNode);

  const author = document.createElement('h5');
  const authorText = ` Written by: ${book.volumeInfo.authors}`;
  const authorNode = document.createTextNode(authorText);
  author.appendChild(authorNode);
  

  element.appendChild(cover);
  element.appendChild(titleNode);
  element.appendChild(author)
  // element.appendChild(description);
  console.log(element)
  element.classList.add("gridItem");
  return element; 
  });

const gridList = document.querySelector(".books__grid__list");

const append = (parent) => (child) => parent.appendChild(child);

list.forEach(append(gridList));

if (gridList.innerHTML !== "") {
  gridList.innerHTML = "";
  list.forEach(append(gridList));
} else {
  list.forEach(append(gridList));
}
});


 

