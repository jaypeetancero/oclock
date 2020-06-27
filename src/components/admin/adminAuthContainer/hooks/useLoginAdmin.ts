import { useState, useEffect } from "react";

interface AuthProps {
  username: string;
  password: string;
}

interface Props {
  auth?: AuthProps;
  companyCode?: string;
}

export const useLoginAdmin = () => {
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [response, setResponse] = useState();

  return { status, error, response };
};

export default useLoginAdmin;
