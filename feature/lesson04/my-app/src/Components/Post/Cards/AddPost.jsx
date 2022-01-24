import { Post } from '../Post';
import { posts } from './posts';

export const AddPost = () => {
  return posts.map(( post ) => {
    return (
        <Post
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          author={post.author}/>
    );
  });
};