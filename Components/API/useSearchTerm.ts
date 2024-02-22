import { useQuery } from "react-query";
import { BASE_URL } from "../../constants";

async function getAllDoctors(_searchTerm: string, token: string) {
  const response = await fetch(BASE_URL + "api/v1/doctor", {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    method: "GET",
    mode:'cors'
    
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  const data = response.json();
  return data;
}

function useSearchTerm(searchTerm: string, token: string) {
  return useQuery({
    queryKey: ["getDoctors", searchTerm],
    queryFn: () => {
      return getAllDoctors(searchTerm, token);
    },
  });
}

export default useSearchTerm;
