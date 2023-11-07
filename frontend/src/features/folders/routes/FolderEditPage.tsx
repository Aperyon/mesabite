import { useNavigate, useParams } from "react-router-dom";
import Page from "../../../components/Page";
import PageTitle from "../../../components/PageTitle";
import { useFolder } from "../api/getFolder";
import Loader from "../../../components/Loader";
import toast from "react-hot-toast";
import FolderForm from "../components/FolderForm";
import { useEditFolder } from "../api/editFolder";

export default function FolderEditPage() {
  const { folderId } = useParams();
  const navigate = useNavigate();
  const folderQuery = useFolder(folderId);
  const editFolder = useEditFolder();

  if (folderQuery.isLoading) return <Loader />;
  if (!folderQuery.data) {
    toast.error("Folder was not found, redirecting to list");

    navigate("/");
    return null;
  }

  const folder = folderQuery.data;

  function onSubmit(values: any) {
    editFolder.mutate(
      { folder, data: values },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  }

  return (
    <Page>
      <PageTitle>{folder.name}</PageTitle>
      <FolderForm onSubmit={onSubmit} folder={folder} />
    </Page>
  );
}
