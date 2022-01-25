import { Onliner } from './Onliner';
import { posts } from './OnlinerNews';

export const OnlinerList = () => {
  return (posts.map(( post ) => {
    return (
      <Onliner
        key={post.id}
        title={post.title}
        backgroundImageUrl={post.backgroundImageUrl}
        category={post.category}
        commentCount={post.commentCount}
        onClick={post.onclick}/>
    );
  }));
};