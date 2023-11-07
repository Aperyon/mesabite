import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Category } from "../types";
import toast from "react-hot-toast";
import { queryClient } from "../../../lib/react-query";

function addCategory(data: Partial<Category>): Promise<Category> {
  return axios.post("/api/categories/", data);
}

export function useAddCategory() {
  return useMutation({
    mutationFn: ({ data }: { data: Partial<Category> }) => addCategory(data),
    onSuccess: () => {
      toast.success("Category added successfully!");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
        refetchType: "all",
      });
    },
    onError: () => {
      toast.error("Failed to add Category!");
    },
  });
}
