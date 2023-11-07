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
    return (
      <div>
        <h2>No Category Folders were found</h2>
        <Link to="/folders/add">Add your first Category Folder</Link>
      </div>
    );
  }

  return (
    <ul className="p-4 border">
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
