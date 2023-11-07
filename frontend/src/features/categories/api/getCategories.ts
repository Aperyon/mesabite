import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Category } from "../types";

function getCategories(): Promise<Category[]> {
  return axios.get("/api/categories/");
}

export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn: getCategories });
}
