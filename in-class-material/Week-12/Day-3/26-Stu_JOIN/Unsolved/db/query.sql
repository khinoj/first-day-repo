-- Add your code below and execute file in MySQL Shell --
select favorite_books.book_name, book_prices.price
from favorite_books
join 
book_prices ON favorite_books.book_price = book_prices.id