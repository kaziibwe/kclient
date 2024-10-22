// import { createContext, useEffect, useState } from "react";

// export const AppContext = createContext();

// export default function AppProvider({ children }) {
//   const [token, setToken] = useState(localStorage.getItem("access_token"));
//   const [user, setUser] = useState(null);

//   async function getUser() {
//     const res = await fetch("/api/profileAdmin", {
//       method:'Post',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await res.json();

//     if (res.ok) {
//       setUser(data);
//     }
//   }

//   useEffect(() => {
//     if (token) {
//       getUser();
//     }
//   }, [token]);


//   return (
//     <AppContext.Provider value={{ token, setToken, user, setUser,name:"alfred" }}>
//       {children}
//     </AppContext.Provider>
//   );
// }



import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Start with loading as true

  async function getUser() {
    const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

    setLoading(true); // Start loader when fetching begins
    const res = await fetch("https://testapi.cognospheredynamics.com/api/v1/profileAdmin", {
      method:'Post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    console.log(data)
    if (res.ok) {
      setUser(data);
    }
    setLoading(false); // Stop loader when fetching completes
  }

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <AppContext.Provider value={{ token, setToken, user, setUser, loading }}>
      {children}
    </AppContext.Provider>
  );
}
