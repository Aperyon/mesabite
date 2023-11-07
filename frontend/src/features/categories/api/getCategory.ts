import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Category } from "../types";

function getCategory(id: string): Promise<Category> {
  return axios.get(`/api/categories/${id}/`);
}

export function useCategory(categoryId: string | undefined) {
  return useQuery({
    queryKey: ["category", categoryId],
    queryFn: () => getCategory(categoryId!),
    enabled: !!categoryId,
  });
}
