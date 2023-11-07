import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";
import Page from "../../../components/Page";
import PageTitle from "../../../components/PageTitle";
import { useFolders } from "../api/getFolders";
import FolderList from "../components/FolderList";
import { useCategories } from "../../categories/api/getCategories";
import CategoryList from "../../categories/components/CategoryList";
import OmniSearch from "../../../components/OmniSearch";
import { useState } from "react";

export default function FolderListPage() {
  const foldersQuery = useFolders();
  const categoriesQuery = useCategories();
  const [search, setSearch] = useState("");

  function onSubmitSearch(values: any) {
    setSearch(values.search);
  }

  if (foldersQuery.isLoading) return <Loader />;
  if (categoriesQuery.isLoading) return <Loader />;

  let folders = foldersQuery?.data || [];
  let categories = categoriesQuery?.data || [];

  folders =
    search !== ""
      ? folders.filter(
          (f) =>
            f.name.toLowerCase().includes(search.toLowerCase()) ||
            categories.find(
              (c) =>
                c.name.toLowerCase().includes(search.toLowerCase()) &&
                c.folder === f.url
            )
        )
      : folders;

  categories =
    search !== ""
      ? categories.filter(
          (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            folders
              .find((f) => f.url === c.folder)
              ?.name.toLowerCase()
              .includes(search.toLowerCase())
        )
      : categories;

  const categoriesWithoutFolder = categories.filter((c) => !c.folder);

  return (
    <Page>
      <PageTitle>Your Menu</PageTitle>
      <OmniSearch onSubmit={onSubmitSearch} />
      <Link
        to="/folders/add"
        className="mb-4 inline-block font-bold bg-yellow-300 border-red-900 border-2 py-2 px-4 rounded-full"
      >
        <Icon icon="plus" /> Add Folder
      </Link>
      <FolderList folders={folders} categories={categories} />
      <h3 className="text-xl font-bold mb-2">Categories without folder</h3>
      <CategoryList categories={categoriesWithoutFolder} />
    </Page>
  );
}
