import { Form, Formik } from "formik";
import Field from "../../../components/Field";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import * as Yup from "Yup";
import { Folder } from "../types";

const schema = Yup.object().shape({
  name: Yup.string().required().max(50),
  description: Yup.string(),
});

export default function FolderForm({
  onSubmit,
  folder,
}: {
  onSubmit: any;
  folder?: Folder;
}) {
  const initialValues = !!folder
    ? folder
    : { name: "", description: "", photo_file: "" };

  const saveText = !!folder ? "Edit" : "Add";
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field name="name" label="Name" placeholder="Example Folder" />
        <Field
          name="description"
          label="Description"
          type="textarea"
          placeholder="Write a short and easy to read description"
        />

        <div className="flex justify-center space-x-8 items-center">
          <Link to="/">Cancel</Link>
          <Button type="submit">{saveText}</Button>
        </div>
      </Form>
    </Formik>
  );
}
