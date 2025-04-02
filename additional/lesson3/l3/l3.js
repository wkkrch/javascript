let books = [
    {
        title: "The Silent Patient",
        pageCount: 336,
        authors: ["Alex Michaelides"],
        genres: ["Thriller", "Psychological Fiction"]
    },
    {
        title: "1984",
        pageCount: 328,
        authors: ["George Orwell"],
        genres: ["Dystopian", "Political Fiction", "Science Fiction"]
    },
    {
        title: "Good Omens",
        pageCount: 512,
        authors: ["Terry Pratchett", "Neil Gaiman"],
        genres: ["Comedy", "Fantasy", "Apocalyptic Fiction"]
    },
    {
        title: "To Kill a Mockingbird",
        pageCount: 281,
        authors: ["Harper Lee"],
        genres: ["Southern Gothic", "Coming-of-age"]
    },
    {
        title: "The Hobbit",
        pageCount: 310,
        authors: ["J.R.R. Tolkien"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "The Great Gatsby",
        pageCount: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Tragedy"]
    },
    {
        title: "A Game of Thrones",
        pageCount: 694,
        authors: ["George R.R. Martin"],
        genres: ["Fantasy", "Epic Fantasy", "Adventure"]
    },
    {
        title: "The Brothers Karamazov",
        pageCount: 824,
        authors: ["Fyodor Dostoevsky"],
        genres: ["Philosophical Fiction", "Psychological Fiction"]
    },
    {
        title: "The Name of the Wind",
        pageCount: 662,
        authors: ["Patrick Rothfuss"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "The Expanse: Leviathan Wakes",
        pageCount: 561,
        authors: ["James S.A. Corey"],
        genres: ["Science Fiction", "Space Opera", "Adventure"]
    }
];
let maxGenres = books[0];
for (let book of books){
    if (maxGenres.genres.length < book.genres.length){
        maxGenres = book;
        console.log(maxGenres);
    }
}