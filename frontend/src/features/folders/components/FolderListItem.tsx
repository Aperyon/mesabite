import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { useDeleteFolder } from "../api/deleteFolder";
import { Folder } from "../types";
import { Category } from "../../categories/types";
import CategoryList from "../../categories/components/CategoryList";

export default function FolderListItem({
  folder,
  categories,
}: {
  folder: Folder;
  categories: Category[];
}) {
  const navigate = useNavigate();
  const deleteFolder = useDeleteFolder();

  const actions = [
    { key: "delete", icon: "trash", onClick: onDeleteClick },
    { key: "edit", icon: "pencil", onClick: onEditClick },
  ];

  function onDeleteClick(folder: Folder) {
    deleteFolder.mutate({ folder });
  }

  function onEditClick(folder: Folder) {
    navigate(`/folders/edit/${folder.uuid}`);
  }

  return (
    <li>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">
          <Icon icon="folder" /> {folder.name}
        </h3>
        <ul className="flex space-x-2">
          {actions.map((action) => (
            <li key={action.key}>
              <Button onClick={() => action.onClick(folder)}>
                <Icon icon={action.icon} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link to={`/categories/add?folder_id=${folder.uuid}`}>
          <Icon icon="plus" /> Add Category to Folder
        </Link>
      </div>
      <CategoryList categories={categories} />
    </li>
  );
}
