const Profile = (props) => {
  return (
    <input
      type="text"
      name="name"
      onChange={(e) => {
        props.keyupChange(e.target.value);
      }}
      placeholder="Enter Name"
    />
  );
};
export default Profile;
