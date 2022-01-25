import React, { useState } from 'react';
import { Header } from './Header';
import { Memories } from './Memories';
import { Body } from './Body';
import { Footer } from './Footer';
import { Counter } from './Counter/Counter';

function App() {
  const [text, setText] = useState('')

  const onChangeText = (event) => {
   setText(event.target.value);
  };

  const onClickAdd = () => {
      alert('Hello ' + text)
  }

  const onClickDel = () => {
    setText('')
  }

  return (
    <div>
      <Header name={'Andrei'} surname={'Kuzuro'} />
      <Memories/>
      <Body/>
      <Footer/>
      {/*<button onClick={onClickDel}>Стереть всё</button>*/}
      {/*<button onClick={onClickAdd}> Добавить </button>*/}
      {/*<input value={text} onChange={onChangeText} />*/}
      {/*<Counter/>*/}
    </div>
  );
}

export default App;
