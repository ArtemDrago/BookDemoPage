import React, { useState } from 'react'
import ChangeBook from '../change/ChangeBook';
import MyInput from '../UI/input/MyInput';
import MyModal from '../UI/modal/MyModal';
import MyButton from '../UI/button/MyButton';
import './Item.css'

const Item = ({items , remove, changeBook ,changeModal , setChangeModal ,handleState ,trueState ,bookState}) => {
   if (!items.length  ) {
      return (
         <h2>Книги не найдены!</h2>
      )
   }

 return (
    <div className='bookItem'>
      {items.map(book => 
      
      <div className='book' key={book.id}>
         <div className="inform">
         <h3 className='bookTitle'> {book.bookName} </h3>
         <p className='bookAutor'> {book.autor} </p>

         

         </div>
         
         <MyButton 
        
         onClick={() => handleState(book) }
         >
         Редактировать
         </MyButton>
            
         <MyButton 
         onClick={() => remove(book)}
         >
            Удалить
         </MyButton>
         <MyModal  visible={changeModal} setVisible={setChangeModal}>
       <ChangeBook   changeBook={changeBook} trueState={trueState} bookState={bookState}/>
          
       </MyModal>
         {/* trueState={trueState} */}
      </div>
       )}
       
    </div>
 )
}
export default Item;
