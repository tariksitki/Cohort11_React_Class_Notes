// import { useState } from "react";

import { useState } from "react";

const UseStateExample = () => {
  const [dog, setDog] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchDog = () => {
    setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const { message } = data;
        setDog(message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <h1>Loading ...</h1>}

      <div>
        <img src={dog} alt="" /> <br /> <br />
        <button onClick={fetchDog} disabled={loading}>
          Fetch Dog
        </button>
      </div>

      {error && <h1>{error} </h1>}
    </>
  );
};

export default UseStateExample;
