import { useState } from "react";
import { Category } from "../types";
import CategoryListItem from "./CategoryListItem";
import Paginator from "../../../components/Paginator";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  const pageSize = 2;
  const [page, setPage] = useState(0);

  if (categories.length === 0) {
    return <p>No categories to show</p>;
  }

  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedCategories = categories.slice(startIndex, endIndex);
  const pageCount = Math.ceil(categories.length / pageSize);

  return (
    <div>
      <Paginator
        page={page + 1}
        pageCount={pageCount}
        prev={() => setPage(page - 1)}
        next={() => setPage(page + 1)}
      />
      <ul className="">
        {paginatedCategories.map((category) => (
          <CategoryListItem key={category.uuid} category={category} />
        ))}
      </ul>
    </div>
  );
}
