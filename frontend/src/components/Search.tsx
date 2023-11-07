import { Form, Formik } from "formik";
import Field from "./Field";
import Icon from "./Icon";

export default function OmniSearch() {
  const initialValues = { name: "" };

  function onSubmit(values) {
    console.log("submitted");
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="mb-4 block">
        <Field
          name="search"
          label={
            <>
              <Icon icon="magnifying-glass" /> Search
            </>
          }
          placeholder="Search for Category Folders"
        />
      </Form>
    </Formik>
  );
}
