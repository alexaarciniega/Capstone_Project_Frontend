import React from "react";
import Navbar from "../components/Navbar"
import "../styles/extra.css";

const AboutUs = () => {
  return (
  <div>
      <Navbar />
    <h1 id = "title">About us</h1>
      <div className = "container">
        <img 
          className = "ceo-img"
          src = "https://cdn0.iconfinder.com/data/icons/occupation-woman-1/64/architect-woman-occupation-female-engineer-512.png"
          alt = "CEO"
        />
        <p>Duis posuere dui vitae accumsan posuere. Morbi lacinia mauris odio, ultrices congue urna consequat quis. Curabitur tempus rhoncus turpis. Aliquam sodales turpis a molestie dignissim. Nunc nunc sem, volutpat eget felis ut, porttitor tincidunt enim. Integer sed interdum leo. Quisque tristique nisi ut tristique malesuada. Fusce tempus, dui eu vehicula tempor, eros ligula luctus nisi, molestie consequat nunc risus in leo. Nullam in venenatis justo, in consectetur massa. Integer euismod sodales porta.</p>

        <p>Praesent semper aliquet cursus. In sollicitudin est ut tellus pulvinar, eget congue arcu vulputate. Phasellus nec augue ac dolor rhoncus sodales. Etiam dapibus aliquet egestas. Mauris sollicitudin accumsan velit, laoreet molestie odio tempor vel. Vestibulum vitae nibh purus. Ut pretium volutpat fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed odio in sem porta auctor. Donec euismod, lacus ut luctus lobortis, urna ex efficitur lorem, quis consectetur sem ante non elit. Aenean placerat dictum nibh, placerat volutpat eros tincidunt at.</p>
      
        <p>Donec id placerat mauris, id malesuada risus. Nulla elementum rutrum lacus, ut commodo dolor facilisis eget. Curabitur porttitor vehicula luctus. Suspendisse eget placerat velit. Nulla tristique tristique finibus. Donec quis turpis at urna semper commodo eget sollicitudin odio. Suspendisse pellentesque nibh mauris, vitae egestas ante ultrices vel. Nam finibus nisl leo, ultrices tincidunt sem sagittis eu. In id massa ipsum. Nullam non purus diam. Nunc a nunc eu magna ornare sollicitudin eu vitae leo.</p>
      </div>
  </div>
  );
};

export default AboutUs