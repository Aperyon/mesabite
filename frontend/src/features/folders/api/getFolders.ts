import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Folder } from "../types";

function getFolders(): Promise<Folder[]> {
  return axios.get("/api/folders/");
}

export function useFolders() {
  return useQuery({ queryKey: ["folders"], queryFn: getFolders });
}
