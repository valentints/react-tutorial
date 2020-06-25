import React from 'react';
import TodolistItem from './TodolistItem/';
import './style.scss';

const Todolist = ({ AppData, onDeleted }) => {
  const elements = AppData.map((item) => {
    const { id, ...items } = item;
    return (
      <li key={id} className="list-group-item">
        <TodolistItem {...items} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default Todolist;
