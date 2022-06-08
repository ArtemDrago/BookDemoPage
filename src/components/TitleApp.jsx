import React, { useEffect, useMemo, useState } from 'react'
import Item from './book/Item';
import CreateBook from './createbook/CreateBook';

import MyInput from './UI/input/MyInput';
import MyModal from './UI/modal/MyModal';
import MyButton from './UI/MyButton';




function TitleApp() {

  const [bookArr , setBookArr] = useState(JSON.parse(localStorage.getItem('bookArr')) || [
    {
      id:1,
      bookName: 'Робинзон Крузо',
      autor: 'Даниэль Дефо',
    },
    {
     id:2,
     bookName: 'Обломов',
     autor: 'И.А.Гончаров',
   },
   {
     id:3,
     bookName: 'Приступление и наказание',
     autor: 'Ф.М.Достаевский',
   },
  ])

   useEffect(() => {
    localStorage.setItem('bookArr' , JSON.stringify(bookArr))
   },[bookArr])
  

  const [search , setSearch] = useState('')
  const [modal , setModal] = useState(false)

  const removeBook = (book) => {
    return   setBookArr(bookArr.filter(b => b.id !== book.id)) 
    
  }
  
  const sortedBook = useMemo( () => {
    if (search) {
      return bookArr.filter(book => book.bookName.toLowerCase().includes(search.toLowerCase()) || book.autor.toLowerCase().includes(search.toLowerCase())) 
    } 
      return bookArr
  } , [search ,bookArr])

  const createBook = (newBook) => {
    setBookArr([...bookArr , newBook])
    setModal(false)
   
  }

  const [changeModal , setChangeModal] = useState(false)
  const [cur , setCur] = useState({bookName: '' , autor:''})
  const [bookState , setBookState] = useState({})
  const [select , setSelect] = useState({id: '' ,bookName: '' , autor:''})
  const changeBook = (bool) => {
    setChangeModal(bool)
   }
   
   useEffect(() => {
    setSelect({id: bookState.id , bookName: cur.bookName , autor: cur.autor})
  }, [cur ])

useEffect(() => {
  cellBook()
},[select])

 
const cellBook = () => {
  setBookArr(bookArr.map(item => {
    if (item.id === select.id) {
      return select  ;
    } else {
      return item
    }
  }))
  
}
  //при нажатии редактирования
  const handleState = (itemBook) => {
    changeBook(true)
    
    setBookState(itemBook)

   }
   //при завершении редактирования
  const trueState = (bookName , autor ) => {
  setCur({bookName: bookName , autor: autor})
  }

  
  return (
    <div className="App">
    <h1 style={{fontSize: '36px' , color: 'grey' , textAlign: 'center' , margin: '20px 0' }} >Demo-page</h1>
    <div style={{height: 1 , width: '85%' , margin: '10px auto 20px auto' , background: 'black'}}/>
   
    <div className='setings' >
    <MyInput 
    placeholder="Поиск..."
    value={search} 
    onChange={e => setSearch(e.target.value)}
    />
    <MyButton 
    onClick={() => setModal(true)}
    >
    Добавить книгу
    </MyButton>
    </div>
    <MyModal visible={modal} setVisible={setModal}>
    <CreateBook createBook={createBook}/>
    </MyModal>

    
       
       
        <Item 
        remove={removeBook} 
        items={sortedBook}
         changeBook={changeBook} 
         changeModal={changeModal} 
         setChangeModal={setChangeModal}
         handleState={handleState}
         
         trueState={trueState}
         bookState={bookState}
         />
     {/* trueState={trueState} */}
      
    </div>
  );
}

export default TitleApp;