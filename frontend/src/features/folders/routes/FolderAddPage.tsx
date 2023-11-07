import { useNavigate } from "react-router-dom";
import Page from "../../../components/Page";
import PageTitle from "../../../components/PageTitle";
import { useAddFolder } from "../api/addFolder";
import FolderForm from "../components/FolderForm";

export default function FolderAddPage() {
  const navigate = useNavigate();
  const addFolder = useAddFolder();

  function onSubmit(values: any) {
    addFolder.mutate(
      { data: values },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  }

  return (
    <Page>
      <PageTitle>Create New Category Folder</PageTitle>
      <p className="text-center">
        Here you can create Category Folder that <br />{" "}
        <strong>includes other Categories under it.</strong>{" "}
      </p>
      <FolderForm onSubmit={onSubmit} />
    </Page>
  );
}
