import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Folder } from "../types";
import toast from "react-hot-toast";
import { queryClient } from "../../../lib/react-query";

function deleteFolder(url: string) {
  return axios.delete(url);
}

export function useDeleteFolder() {
  return useMutation({
    mutationFn: ({ folder }: { folder: Folder }) => deleteFolder(folder.url),
    onSuccess: () => {
      toast.success("Folder deleted successfully!");
      queryClient.invalidateQueries({
        queryKey: ["folders"],
        refetchType: "all",
      });
    },
    onError: () => {
      toast.error("Failed to delete Folder");
    },
  });
}
