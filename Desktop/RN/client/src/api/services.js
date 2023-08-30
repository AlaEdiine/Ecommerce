import { useContext, useEffect, useState } from "react";
import axios from "@/api/axios";
import { UserContext } from "../HOOK/Context/AuthorizationContext";

export const Call_allFournisseur = () =>{
    const [load, setLoad] = useState(false);
    const [listFournisseur, setlistFournisseur] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        setLoad(true);
        axios.get(`/FOURNISSEUR/GET_ALL/${user}`).then((result) => {
          console.log(result.data);
          setLoad(false);
          setlistFournisseur(result.data);
        });
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
      // Pagination

      return [listFournisseur];

    
}