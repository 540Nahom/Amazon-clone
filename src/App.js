// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useStateValue } from "./StateProvider";
// import { auth } from "./Firebase";
// import Header from "./Header";
// import Home from "./Home";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import Payment from "./Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { Switch } from "@mui/material";
// import Orders from "./Orders";

// const promise = loadStripe(
//   "pk_test_51NvkBhBtzaOQiY4QUtfL3SPjiEoiota4vUPubU8IOj4I51yaTT6GZ19tHbnuPG40GD8RwmA99sx1lxJ83eIX8EaE00ZlnVosx4"
// );

// function App() {
//   const [, dispatch] = useStateValue();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });

//     return () => {
//       // Unsubscribe from the auth state listener when the component unmounts
//       unsubscribe();
//     };
//   }, [dispatch]);

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/payment"
//             element={
//               <>
//               <Header />
//                 <Elements stripe={promise}>
//                   <Payment />
//                 </Elements>
//               </>
//             }
//           />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;








import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51NvkBhBtzaOQiY4QUtfL3SPjiEoiota4vUPubU8IOj4I51yaTT6GZ19tHbnuPG40GD8RwmA99sx1lxJ83eIX8EaE00ZlnVosx4"
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Unsubscribe from the auth state listener when the component unmounts
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/Orders" element={<Orders />} /> 
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
