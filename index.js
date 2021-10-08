const GOOGLE_BOOKS = "https://www.googleapis.com/books/v1/volumes?q="
;
const input = document.querySelector("#search");
let SEARCH = "slaughterhouse five";


const getBooks = async () => {
  const response = await fetch(`${GOOGLE_BOOKS}${SEARCH}&orderBy=relevance`);

  const data = await response.json();
  console.log(data);
  return data.items;
}

getBooks();


const getInfo = async (query) => {
  const info = await getBooks();
  console.log(info);
  const bookArray = info.map((query) => {
    const bookObject = {
      title: query.volumeInfo.title,
      author: query.volumeInfo.authors,
      description: query.volumeInfo.description
    }
    console.log(bookObject);
    return bookObject;
  })
};

getInfo();

const button = document.querySelector("#getBooks");

button.addEventListener("click", async(event) => {
  const books = await getBooks();
  console.log(books);})

  const bookItems = () => {
    const element = document.createElement('li');
    const bookText = `${book}`;
    const textNode = document.createTextNode(bookText);

    element.appendChild(textNode);
    return element;
  };

  const list = document.querySelector("#books");

  const append = parent => child => parent.appendChild(child);

  listItems.forEach(append(list));
