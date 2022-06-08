import React, { useEffect, useMemo, useState } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/MyButton';


function ChangeBook({  changeBook  ,trueState, bookState}) {
   const [booking , setBooking] = useState({bookName: '' , autor: '' })
useEffect(() => {
   setBooking({bookName: `${bookState.bookName}` , autor: `${bookState.autor}`})
}, [bookState])



const changeFalse = (e) => {
e.preventDefault()
trueState(booking.bookName , booking.autor )
   
   changeBook(false)
   setBooking({bookName: '' , autor: ''})
}

   return ( 
   <div>
<form >
   <h3>Редактировать</h3>
   <br/>
   
      <MyInput 
      value={booking.bookName}
      onChange={e => setBooking({...booking,bookName: e.target.value})}
      />
      <br/>
      <MyInput
      value={booking.autor}
      onChange={e => setBooking({...booking,autor: e.target.value})}
      />
      <br/>
      <MyButton 
      onClick={changeFalse}
      >
        Изменить
      </MyButton>
   </form>
   </div>
    );
}

export default ChangeBook;