import { useState } from "react";
import { useUserContext } from "../context/UserContextProvider";

const User = ({ user }) => {
  const { id, login, avatar_url, width } = user;
  const [imageWidth, setImageWidth] = useState();

  const {changeWidth} = useUserContext();
  console.log(changeWidth);

  return (
    <div>
      <h3>{login}</h3>
      <img src={avatar_url} alt="" width={width} />
      <div>
        <label htmlFor="width">Image width(px)</label>
          {/* önemli: burada e.target.value olarak veriyoruz func da bunu width olarak yakaliyoruz */}
        <input id="width" type="number" value={width} onChange={(e) => changeWidth(id, e.target.value)} />
      </div>
    </div>
  );
};

export default User;
