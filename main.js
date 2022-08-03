const books = [
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    path: "images/don_quixote"
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    path: 'images/lord_of_the_rings'
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    path: 'images/harry_potter'
  },
  {
    title: 'Alice\'s Adventures in Wonderland',
    author: 'Lewis Carroll',
    path: 'images/alice_adventures_in_wonderland'
  },
  {
    title: 'Twenty Thousand Leagues Under the Sea',
    author: 'Jules Verne',
    path: 'images/twenty_thousand_leagues_under_the_sea'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    path: 'images/moby_dick'
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    path: 'images/the_picture_of_dorian_gray'
  }
]
let tablemassive = [];
books.forEach((el, index, array) => {
  tablemassive.push(`<tr><td><img src=${el.path}.jpeg></td><td>${el.title}</td><td>${el.author}</td></tr>`)
});
document.write(
  `<table class ="table">
  <tr>
<th class="cover">Cover</th>
 <th>Title</th>
<th>Author</th>
</tr>
<tr>${tablemassive}<tr>
  </table>`
);
