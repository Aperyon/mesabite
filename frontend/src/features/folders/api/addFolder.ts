import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Folder } from "../types";
import toast from "react-hot-toast";
import { queryClient } from "../../../lib/react-query";

function addFolder(data: Partial<Folder>): Promise<Folder> {
  return axios.post("/api/folders/", data);
}

export function useAddFolder() {
  return useMutation({
    mutationFn: ({ data }: { data: Partial<Folder> }) => addFolder(data),
    onSuccess: () => {
      toast.success("Folder added successfully!");
      queryClient.invalidateQueries({
        queryKey: ["folders"],
        refetchType: "all",
      });
    },
    onError: () => {
      toast.error("Failed to add Folder!");
    },
  });
}
