import { Facebook } from './Facebook';
import { posts } from './FacebookPosts';

export const AddFacebook = () => {
  return (posts.map((post) => {
    return (
      <Facebook
        key={post.id}
        name={post.name}
        backgroundImageUrl={post.backgroundImageUrl}
        postDescription={post.postDescription}
        location={post.location}
        timeText={post.timeText}
        onClickLike={post.onClickLike}
        onClickReply={post.onClickReply}
      />
    )
  }))
}