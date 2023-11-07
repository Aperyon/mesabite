import { Link } from "react-router-dom";
import { Folder } from "../types";
import FolderListItem from "./FolderListItem";
import { Category } from "../../categories/types";

export default function FolderList({
  folders,
  categories,
}: {
  folders: Folder[];
  categories: Category[];
}) {
  if (folders.length === 0) {
    return null;
  }

  return (
    <ul className="p-4 border border-2 border-red-900 rounded mb-4">
      {folders.map((folder) => {
        const categoriesForFolder = categories.filter(
          (c) => c.folder === folder.url
        );
        return (
          <FolderListItem
            key={folder.uuid}
            folder={folder}
            categories={categoriesForFolder}
          />
        );
      })}
    </ul>
  );
}
