import React, { useState } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

function CreateBook({createBook}) {
   const [book , setBook] = useState({bookName: '' , autor: ''})

   const addNewBook = (event) => {
      event.preventDefault()
            
           
    
         const newBook = {
         ...book , id: new Date()
      }
      createBook(newBook)
    

  setBook({bookName: '' , autor: ''})
}

   return (
      <form >
         <h3>Создать</h3>
      <MyInput 
      value={book.bookName}
      onChange={e => setBook({...book,bookName: e.target.value})}
      />
      <br/>
      <MyInput
      value={book.autor}
      onChange={e => setBook({...book,autor: e.target.value})}
      />
      <br/>
      <MyButton 
      onClick={addNewBook}
      >
         Добавить
      </MyButton>
   </form>
   
   );
}

export default CreateBook;