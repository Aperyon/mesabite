import { useNavigate } from "react-router-dom";
import Page from "../../../components/Page";
import PageTitle from "../../../components/PageTitle";
import { useAddCategory } from "../api/addCategory";
import CategoryForm from "../components/CategoryForm";
import { useFolders } from "../../folders/api/getFolders";
import Loader from "../../../components/Loader";

export default function CategoryAddPage() {
  const navigate = useNavigate();
  const addCategory = useAddCategory();
  const foldersQuery = useFolders();

  function onSubmit(values: any) {
    addCategory.mutate(
      { data: { ...values, image: values.imageFile } },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  }

  if (foldersQuery.isLoading) return <Loader />;

  const folders = foldersQuery.data || [];

  return (
    <Page>
      <PageTitle>Create New Category</PageTitle>
      <CategoryForm onSubmit={onSubmit} folders={folders} />
    </Page>
  );
}
