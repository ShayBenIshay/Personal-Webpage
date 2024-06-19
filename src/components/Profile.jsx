import "./styles/Profile.css";
import { profileData } from "../data/profileData";

const Profile = () => (
  <section className="profile">
    <h2>{profileData.title}</h2>
    <div className="description">{profileData.description}</div>
  </section>
);

export default Profile;
