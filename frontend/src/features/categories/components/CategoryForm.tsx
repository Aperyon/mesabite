import { Form, Formik } from "formik";
import Field from "../../../components/Field";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import * as Yup from "Yup";
import { Category } from "../types";
import { Folder } from "../../folders/types";
import { useQueryParams } from "../../../lib/query-params";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string(),
});

export default function CategoryForm({
  onSubmit,
  category,
  folders,
}: {
  onSubmit: any;
  category?: Category;
  folders: Folder[];
}) {
  const queryParams = useQueryParams();
  const defaultFolderId = queryParams.get("folder_id");
  const initialValues = !!category
    ? category
    : {
        folder: folders.find((f) => f.uuid == defaultFolderId)?.url || "",
        name: "",
        description: "",
        photo_file: "",
      };

  const saveText = !!category ? "Edit" : "Add";
  const folderOptions = folders.map((folder) => ({
    value: folder.url,
    label: folder.name,
  }));
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field
          name="folder"
          label="Folder"
          type="select"
          options={folderOptions}
          placeholder="Select folder"
        />
        <Field name="name" label="Name" placeholder="Example Category" />
        <Field
          name="description"
          label="Description"
          type="textarea"
          placeholder="Write a short and easy to read description"
        />

        <div>
          <Link to="/">Cancel</Link>
          <Button type="submit">{saveText}</Button>
        </div>
      </Form>
    </Formik>
  );
}