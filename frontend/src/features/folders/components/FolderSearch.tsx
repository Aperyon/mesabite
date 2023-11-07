import { Form, Formik } from "formik";
import Field from "../../../components/Field";

export default function FolderSearch() {
  const initialValues = { name: "" };

  function onSubmit(values) {
    console.log("submitted");
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field
          name="search"
          label="Search"
          placeholder="Search for Category Folders"
        />
      </Form>
    </Formik>
  );
}
