import React, { useState, useMemo } from 'react';
import AppHeader from './AppHeader';
import SearachPanel from './searchPanel';
import Todolist from './Todolist';
import AddList from './addList';

const App = () => {
  const initState = [
    { label: 'Learn React', importent: true, id: '1asass' },
    { label: 'Learn javascript', importent: false, id: '2asd' },
    { label: 'Learn Bootstrap', importent: false, id: '3zxs' },
  ];

  const [todo, setTodo] = useState(initState);
  const [term, setTerm] = useState(' ');

  const deletItem = (id) => {
    const index = todo.findIndex((el) => el.id === id);
    let newArray = [...todo.slice(0, index), ...todo.slice(index + 1)];
    setTodo(newArray);
  };

  const additem = (text) => {
    const newItem = {
      label: text,
      importent: false,
      id: Math.random() + 1,
    };

    let newArr = [...todo, newItem];
    setTodo(newArr);
  };

  const onSearchChange = (term) => {
    setTerm(term);
  };

  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const visibItems = search(todo, term);

  return (
    <div className="container">
      <AppHeader />
      <SearachPanel onSearchChange={onSearchChange} />
      <Todolist AppData={visibItems} onDeleted={(id) => deletItem(id)} />
      <AddList add={additem} />
    </div>
  );
};
export default App;
