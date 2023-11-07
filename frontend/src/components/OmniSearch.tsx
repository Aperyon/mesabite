import { Form, Formik } from "formik";
import Field from "./Field";
import Icon from "./Icon";

export default function OmniSearch({ onSubmit }: { onSubmit: any }) {
  const initialValues = { search: "" };

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
          autosubmit
        />
      </Form>
    </Formik>
  );
}
