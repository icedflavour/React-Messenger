import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_City_London.jpg/640px-The_City_London.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
