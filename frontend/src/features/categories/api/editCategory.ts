import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Category } from "../types";
import toast from "react-hot-toast";
import { queryClient } from "../../../lib/react-query";

function editCategory(url: string, data: Partial<Category>): Promise<Category> {
  return axios.patch(url, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export function useEditCategory() {
  return useMutation({
    mutationFn: ({
      category,
      data,
    }: {
      category: Category;
      data: Partial<Category>;
    }) => editCategory(category.url, data),
    onSuccess: (resp, vars) => {
      toast.success("Category editet successfully!");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["category", vars.category.uuid],
        refetchType: "all",
      });
    },
    onError: () => {
      toast.error("Failed to edit Category!");
    },
  });
}
