import cn from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={cn.item}>
      <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
      {props.message}
    </div>
  );
};

export default Post;
