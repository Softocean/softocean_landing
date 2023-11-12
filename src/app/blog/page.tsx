'use client';

import { useEffect, useState } from 'react';
import { cache, use } from 'react';
import { useRouter } from 'next/navigation';
import CardArticle from '@/components/cardArticle/CardArticle';
import PromoArticle from '@/components/promoArticle/promoArticle';
import { mokData } from '@/data/blog';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/getPosts');
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

/*const getTodos = cache(() =>
  fetch('http://localhost:3000/api/createTodo').then((res) => res.json())
);*/

const Blog = () => {
  const router = useRouter();
  //const posts = use(getTodos());
  //console.log('todos', todos);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  console.log(posts);

  function createPost(e: any) {
    e.preventDefault();
    fetch('http://localhost:3000/api/createPost', {
      method: 'POST',
      body: JSON.stringify({ title }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        router.refresh();
      })
      .catch((error) => {
        console.log('Error:', error.message);
      });
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await getPosts();
        setPosts(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);

  const deletePost = async (postId: number) => {
    try {
      await fetch(`http://localhost:3000/api/deletePost?id=${postId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  /*function deletePost(id: any) {
    fetch(`http://localhost:3000/api/getPost` + id, {
      method: 'DELETE',
    })
      .then(() => {
        //setPosts(posts.filter((post) => post.id !== id));
        console.log('удалено!');
      })
      .catch((error) => {
        console.log('Error:', error.message);
      });
  }*/

  /*async function deletePost(id: any) {
    await fetch(`http://localhost:3000/api/getPosts/${id}`, {
      method: 'DELETE',
    });*/
  /*res = await res.json();
    if (res) {
      setPosts(posts.filter((post) => post.id !== id));
    }*/
  /*}*/

  return (
    <div className="px-2">
      <form onSubmit={createPost}>
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
      {posts.map((item: { id: number; title: string }) => (
        <div className="flex" key={item.id}>
          <h4 className="mr-[10px]">{item.title}</h4>
          <button onClick={() => deletePost(item.id)} type="button" aria-label="delete">
            Х
          </button>
        </div>
      ))}
      <div>
        {mokData.slice(0, 1).map((item, index) => (
          <PromoArticle key={index} mokData={item} />
        ))}
      </div>
      <div className="mx-auto flex flex-wrap justify-between lg:gap-y-10">
        {mokData.slice(1).map((item, index) => (
          <CardArticle key={index} mokData={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
