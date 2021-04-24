import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, images: "/images/Shaurya.jpg", name: "Akki_631" },
    { id: 2, images: "/images/db2.jpg", name: "its_Aryan" },
    { id: 3, images: "/images/db3.jpg", name: "Dk_456" },
    { id: 4, images: "/images/db4.jpg", name: "Sarvesh39" },
    { id: 5, images: "/images/dboy1.jpg", name: "shukla076" },
    { id: 6, images: "/images/style.jpg", name: "Reyan_743" },
    { id: 7, images: "/images/girls.jpg", name: "Akriti_312" },
    { id: 8, images: "/images/simple.jpg", name: "Ravi_64" },
    { id: 9, images: "/images/shiv.jpg", name: "Shiv_06" }
  ]);
  return (
    <div className="stories">
      {state.map((user) => {
        return (
          <div className="stories_info" key={user.id}>
            <div className="stories_img">
              <span>
                <img src={user.images} alt="user" />
              </span>
            </div>
            <div className="stories_name"> {user.name}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Stories;
