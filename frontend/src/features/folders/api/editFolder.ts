import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Folder } from "../types";
import toast from "react-hot-toast";
import { queryClient } from "../../../lib/react-query";

function editFolder(url: string, data: Partial<Folder>): Promise<Folder> {
  return axios.patch(url, data);
}

export function useEditFolder() {
  return useMutation({
    mutationFn: ({ folder, data }: { folder: Folder; data: Partial<Folder> }) =>
      editFolder(folder.url, data),
    onSuccess: (resp, vars) => {
      toast.success("Folder editet successfully!");
      queryClient.invalidateQueries({
        queryKey: ["folders"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["folder", vars.folder.uuid],
        refetchType: "all",
      });
    },
    onError: () => {
      toast.error("Failed to edit Folder!");
    },
  });
}
