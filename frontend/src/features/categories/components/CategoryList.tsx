import { Category } from "../types";
import CategoryListItem from "./CategoryListItem";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  if (categories.length === 0) {
    return <p>No categories to show</p>;
  }

  return (
    <ul className="">
      {categories.map((category) => (
        <CategoryListItem key={category.uuid} category={category} />
      ))}
    </ul>
  );
}
