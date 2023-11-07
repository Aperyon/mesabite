import { Form, Formik } from "formik";
import Field from "../../../components/Field";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import * as Yup from "Yup";
import { Category } from "../types";
import { Folder } from "../../folders/types";
import { useQueryParams } from "../../../lib/query-params";

const schema = Yup.object().shape({
  name: Yup.string().required().max(10),
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
        image: "",
        imageFile: null,
      };

  const saveText = !!category ? "Edit Category" : "Add Category";
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
        <Field
          name="imageFile"
          type="file"
          label="Photo"
          imageSrc={!!category ? category.image || "" : ""}
        />
        <Field
          name="name"
          label="Name"
          placeholder="Example Category"
          max={50}
        />
        <Field
          name="description"
          label="Description"
          type="textarea"
          placeholder="Write a short and easy to read description"
        />

        <div className="flex justify-center space-x-8 items-center">
          <Link
            to="/"
            className="border-2 border-red-900 bg-gray-200 px-4 py-2 rounded-full "
          >
            Cancel
          </Link>
          <Button type="submit">{saveText}</Button>
        </div>
      </Form>
    </Formik>
  );
}
