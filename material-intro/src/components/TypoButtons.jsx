import * as React from "react";
import { Button, Typography } from "@mui/material";
// import LoadingButton from "@mui/lab/LoadingButton";
// import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

const TypoButtons = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleTypography = (e) => {
    console.log(e.target.children);
  };
  return (
    <div>
      <Button variant="contained">CONTAINED</Button>
      {/* <Button loading variant="text">Text</Button>
      <Button loading variant="outlined">Outlined</Button> */}

      {/* children prob u element in altinda bulunan child elementi gösterir */}
      <Typography
        variant="h3"
        component="div"
        align="center"
        children
        onClick={handleTypography}
        sx={{ width: "600px", background : "grey" }}
        noWrap
        color="error.dark"

      >
        Typography variant h3 component div Typography variant h3 component div
        Typography variant h3 component div
        <p>children</p>
      </Typography>

      
    </div>
  );
};

export default TypoButtons;


// noWrap kullanmak icin elementin bir width inin olmasi gerekir. eger bu genisligi asarsa element 3 nokta ile kesilir ve devam etmez. 

// GutterBottom  true ise element alttan marginli olur. 

// primary ve error calisir. success warning calismiyor. ama color seceneginde normal yellow gibi renkler yazabiliyoruz. 

// inline styling sx ile verilir. key value seklinde. burada backgroundColor calismiyor background ile oluyor. 

// material ui react native ile kullanilabilir. 

// 

