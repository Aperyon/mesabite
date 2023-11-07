import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Folder } from "../types";

function getFolder(id: string): Promise<Folder> {
  return axios.get(`/api/folders/${id}/`);
}

export function useFolder(folderId: string | undefined) {
  return useQuery({
    queryKey: ["folder", folderId],
    queryFn: () => getFolder(folderId!),
    enabled: !!folderId,
  });
}
