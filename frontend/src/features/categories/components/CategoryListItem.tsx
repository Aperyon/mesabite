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
    <li
      className={`block bg-no-repeat bg-cover bg-center w-full h-64 rounded overflow-hidden mb-4`}
      style={{ backgroundImage: `url(${category.image})` }}
    >
      <div className="bg-gradient-to-t from-black/75 to-black/0 p-4 h-full flex justify-end flex-col">
        <div className="flex">
          <div className="bg-black/25 px-2 py-1 rounded-full text-white">
            {Math.floor(Math.random() * 10)} items
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white text-shadow">
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
        <p className="truncate text-white">{category.description}</p>
      </div>
    </li>
  );
}
