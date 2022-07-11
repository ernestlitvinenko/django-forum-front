import { useEffect, useState } from "react";
import API from "../requests";
export const useLogged = () => {
  const [logged, setLogged] = useState<boolean>(false);
  
  const apiCall = () => {
    API.checkLogged({access: localStorage.access}).then((r) => setLogged(r));
  };

  useEffect(() => {
    apiCall();
  }, []);
  return logged
};
