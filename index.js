const GOOGLE_BOOKS = "https://www.googleapis.com/books/v1/volumes?q="
;



const getBooks = async (query) => {
  const response = await fetch(`${GOOGLE_BOOKS}${query}&orderBy=relevance&maxResults=8`);
  const data = await response.json();
  return data.items;
}



const button = document.querySelector("#getBooks");

let list = {};

button.addEventListener("click", async(event) => {
  // create function to reset result

  const input = document.querySelector("#search");
  const query = input.value; 

  if(!query) {
    alert("Type in a keyword and click search!");
    return;
  }

  const gotBooks = await getBooks(query);


  list = gotBooks.map((book) => {

  const element = document.createElement('li');
  element.classList.add("gridItem");

  const title = document.createElement('h3');
  title.classList.add("title")
  const titleText = `${book.volumeInfo.title}`;
  const titleNode = document.createTextNode(titleText);
  title.appendChild(titleNode);

  const author = document.createElement('h5');
  author.classList.add("author");
  const authorText = `${book.volumeInfo.authors}`;
  const authorNode = document.createTextNode(authorText);
  author.appendChild(authorNode);
  

  const cover = document.createElement('img');
  cover.classList.add("cover");
  if (!book.volumeInfo.imageLinks){
    cover.src = "./images/default_book_cover.jpg";      
  } else {
    cover.src = `${book.volumeInfo.imageLinks.smallThumbnail}`;

  };
  
  // const modal = document.createElement('button');
  // modal.classList.add("modal-button");
  // const buttonText = "description";
  // const buttonNode = document.createTextNode(buttonText);
  // modal.appendChild(buttonNode);


  const description = document.createElement('div');
  description.classList.add("description");
  const descriptionText = `${book.volumeInfo.description}`;
  const descriptionNode = document.createTextNode(descriptionText);
  description.appendChild(descriptionNode);


  element.appendChild(cover);
  element.appendChild(title);
  element.appendChild(author)
  // element.appendChild(modal);
  element.appendChild(description);
  // console.log(element)
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

// const getDescription = querySelector(".title-button");

// let description = {};

// getDescription.addEventListener("click", async (event) => {
  
//   const query = getDescription.innerHTML; 

//   const gotBooks = await getBooks(query);

//   description = gotBooks.map((book) => {
    
//     const desElement = document.createElement('div');
//     desElement.classList.add("overlay")

//     const description = document.createElement('div')
//     const descriptionText = `${book.volumeInfo.description}`;
//     const descriptionNode = document.createTextNode(descriptionText);
//     description.appendChild(descriptionNode);

//     desElement.appendChild(description);
//     return desElement;
//   })

//   const description__overlay = document.getElementById(".description__overlay");


//   const append = (parent) => (child) => parent.appendChild(child);

//   list.forEach(append(description__overlay))});