import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";
import Page from "../../../components/Page";
import PageTitle from "../../../components/PageTitle";
import { useFolders } from "../api/getFolders";
import FolderList from "../components/FolderList";
import FolderSearch from "../components/FolderSearch";
import { useCategories } from "../../categories/api/getCategories";
import CategoryList from "../../categories/components/CategoryList";

export default function FolderListPage() {
  const foldersQuery = useFolders();
  const categoriesQuery = useCategories();

  if (foldersQuery.isLoading) return <Loader />;
  if (categoriesQuery.isLoading) return <Loader />;

  const folders = foldersQuery?.data || [];
  const categories = categoriesQuery?.data || [];

  const categoriesWithoutFolder = categories.filter((c) => !c.folder);

  return (
    <Page>
      <PageTitle>Your Menu</PageTitle>
      <FolderSearch />
      <Link to="/folders/add">
        <Icon icon="plus" /> Add Folder
      </Link>
      <FolderList folders={folders} categories={categories} />
      <CategoryList categories={categoriesWithoutFolder} />
    </Page>
  );
}
