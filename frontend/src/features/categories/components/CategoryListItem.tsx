import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { useDeleteCategory } from "../api/deleteCategory";
import { Category } from "../types";

export default function CategoryListItem({ category }: { category: Category }) {
  const navigate = useNavigate();
  const deleteCategory = useDeleteCategory();

  const actions = [
    { key: "delete", icon: "trash", onClick: onDeleteClick },
    { key: "edit", icon: "pencil", onClick: onEditClick },
  ];

  function onDeleteClick(category: Category) {
    deleteCategory.mutate({ category });
  }

  function onEditClick(category: Category) {
    navigate(`/categories/edit/${category.uuid}`);
  }

  return (
    <li>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">
          <Icon icon="tag" /> {category.name}
        </h3>
        <ul className="flex space-x-2">
          {actions.map((action) => (
            <li key={action.key}>
              <Button onClick={() => action.onClick(category)}>
                <Icon icon={action.icon} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
