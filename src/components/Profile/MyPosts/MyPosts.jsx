import cn from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <Post message="Hello, World!"/>
        <Post message="Another one."/>
        <Post message="And another one."/>
      </div>
    </div>
  );
};

export default MyPosts;
