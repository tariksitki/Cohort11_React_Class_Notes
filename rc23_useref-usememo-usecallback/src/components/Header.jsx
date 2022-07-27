import React, {memo} from "react";
import cw from "../assets/cw_logo.png";

  //// React memo birinci kullanim:
  // not: sarmallamak icin memo yu import ederken destructure ederek direkt memo olarak da sarmallama olabilir. Yani react objectinden almayiz direkt almis oluruz. 

// const Header = React.memo(({ img }) => {
//   console.log("Rendering : Header Comp.");

//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="cw_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });


  ///////////////  ikinci kullanim: 


const Header = ({ img }) => {
  console.log("Rendering : Header Comp.");

  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default memo(Header);

/// bunlara high order component denir. interview de gelebilir. 
// daha cok class componentlar da hook lar olmadigi icin orada kullanilirdi. 