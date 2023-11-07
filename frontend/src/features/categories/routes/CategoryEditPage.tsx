import { useNavigate, useParams } from "react-router-dom";
import Page from "../../../components/Page";
import PageTitle from "../../../components/PageTitle";
import { useCategory } from "../api/getCategory";
import Loader from "../../../components/Loader";
import toast from "react-hot-toast";
import CategoryForm from "../components/CategoryForm";
import { useEditCategory } from "../api/editCategory";
import { useFolders } from "../../folders/api/getFolders";

export default function CategoryEditPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const categoryQuery = useCategory(categoryId);
  const editCategory = useEditCategory();
  const foldersQuery = useFolders();

  if (categoryQuery.isLoading) return <Loader />;
  if (!categoryQuery.data) {
    toast.error("Category was not found, redirecting to list");

    navigate("/");
    return null;
  }
  if (foldersQuery.isLoading) return <Loader />;

  const category = categoryQuery.data;

  function onSubmit(values: any) {
    editCategory.mutate(
      { category, data: { ...values, image: values.imageFile } },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  }

  const folders = foldersQuery.data || [];

  return (
    <Page>
      <PageTitle>{category.name}</PageTitle>
      <CategoryForm onSubmit={onSubmit} category={category} folders={folders} />
    </Page>
  );
}
