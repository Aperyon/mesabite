import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Category } from "../types";
import toast from "react-hot-toast";
import { queryClient } from "../../../lib/react-query";

function deleteCategory(url: string) {
  return axios.delete(url);
}

export function useDeleteCategory() {
  return useMutation({
    mutationFn: ({ category }: { category: Category }) =>
      deleteCategory(category.url),
    onSuccess: () => {
      toast.success("Category deleted successfully!");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
        refetchType: "all",
      });
    },
    onError: () => {
      toast.error("Failed to delete Category");
    },
  });
}
