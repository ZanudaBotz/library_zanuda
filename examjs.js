$(document).ready(function () {

  $('#btnDel').on('click', 'element', function(events){
    $('.GeneratedTable').find('tr').eq(0).remove();
  });
    $('#newBookBtn').on("click", function () {
        $("#dialogWind").toggle(500);
    });
   
    $("#cancelBtn").on("click", function () {
        $("#dialogWind").toggle(500);
    });
    let books = JSON.parse( localStorage.getItem('newbook') ) ? JSON.parse( localStorage.getItem('newbook')  ) : [];
    console.log(books)

    let availableBooks = [
       
    ];
    //new book 
   $("#saveBookBtn").on("click", function () {
    let idBook = $("#formId");
    let nameBook = $("#formBookName");
    let authorBook = $("#formBookauthor");
    let dateBook = $("#formBookDate");
    let bookIzd = $("#formBookIzd");
    let bookLenght = $("#formBookLenght");
    let data = {
      id: idBook.val(),
      name: nameBook.val(),
      author: authorBook.val(),
      date: dateBook.val(),
      izd: bookIzd.val(),
      lenght: bookLenght.val(),
    }
    books.push(data);
    availableBooks.push(data.name)
    let booksJSON = JSON.stringify(books);
    localStorage.setItem('newbook', booksJSON);
    console.log(localStorage.getItem('newbook')) 
     $('.GeneratedTable tbody').empty()
    for (let i = 0; i < books.length;i++) {
      console.log(books[i])
      let tr = $("<tr></tr>");
      $("<td></td>").text(books[i].id).appendTo(tr)
      $("<td></td>").text(books[i].name).appendTo(tr)
      $("<td></td>").text(books[i].author).appendTo(tr)
      $("<td></td>").text(books[i].date).appendTo(tr)
      $("<td></td>").text(books[i].izd).appendTo(tr)
      $("<td></td>").text(books[i].lenght).appendTo(tr)
      $('.GeneratedTable tbody').append(tr)
     }

    $("#dialogWind").toggle(500);
   });

   $( function() {
   
    $( "#tagsInp" ).autocomplete({
      source: availableBooks,
    });
  } );
  // localStorage.clear()
});

