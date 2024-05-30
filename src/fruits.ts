import axios from "axios";

export interface fruits {
  id: number;
  name: string;
  filename: string;
  description: string;
  type: string;
  roman_name: string;
  technicalFile: string;
}

const instance = axios.create({
  baseURL: "https://api.api-onepiece.com/v2/",
});
// const API_URL = "https//api.api-onepiece.com/v2/fruits/fr";

export async function fetchOnePieceList(): Promise<fruits[]> {
  try {
    // Effectue une requête GET à l'API et récupère les données
    const response = await instance.get("fruits/fr");
    console.log(response);
    return response.data;
  } catch (error) {
    // En cas d'erreur, affiche un message d'erreur dans la console et relance l'erreur

    console.error("Error fetching OnePiece data", error);
    throw error;
  }
}

fetchOnePieceList();
