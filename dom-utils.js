const GOOGLE_BOOKS = "https://www.googleapis.com/books/v1/volumes?q="
;



const getBooks = async (query) => {
  const response = await fetch(`${GOOGLE_BOOKS}${query}&orderBy=relevance&maxResults=8`);
  const data = await response.json();
  return data.items;
};

export default getBooks;
