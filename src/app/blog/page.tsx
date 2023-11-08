'use client';

import { useState } from 'react';
import CardArticle from '@/components/cardArticle/CardArticle';
import PromoArticle from '@/components/promoArticle/promoArticle';
import { mokData } from '@/data/blog';

const Blog = () => {
  //const [todo, setTodo] = useState(props.todo);
  const [title, setTitle] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      title,
    };
    // send a request to the backend.
    fetch('app/api/createTodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // reset the title.
        setTitle('');
        // set the message.
        // add the todo.
      });
  };
  return (
    <div className="px-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title of todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Add Todo</button>
      </form>
      <div>
        {mokData.slice(0, 1).map((item, index) => (
          <PromoArticle key={index} mokData={item} />
        ))}
      </div>
      <div className="mx-auto flex flex-wrap justify-between lg:gap-y-10">
        {mokData.slice(1).map((item, index) => (
          <CardArticle key={item.title} mokData={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
