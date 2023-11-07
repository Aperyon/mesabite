import classNames from "classnames";
import { ErrorMessage, Field as FormikField, useFormikContext } from "formik";

interface FieldProps {
  label: string;
  type?: string;
  name: string;
  id?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}
export default function Field({
  label,
  type = "text",
  name,
  id,
  placeholder,
  options,
}: FieldProps) {
  const { errors, touched } = useFormikContext();
  const hasError = !!errors[name] && !!touched[name];

  const labelClasses = classNames("block", [hasError && "text-red-500"]);
  const fieldClasses = classNames([hasError && "border-red-500 text-red-500"]);
  return (
    <div>
      <label className={labelClasses}>{label}</label>
      <DynamicField
        className={fieldClasses}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        options={options}
      />
      {hasError && (
        <p className="text-red-500">
          <ErrorMessage name={name} />
        </p>
      )}
    </div>
  );
}

interface DynamicFieldProps {
  type: string;
  name: string;
  id?: string;
  placeholder?: string;
  className?: string;
  options?: { value: string; label: string }[];
}

function DynamicField({
  type,
  name,
  id,
  placeholder,
  className,
  options,
}: DynamicFieldProps) {
  if (type === "textarea") {
    return (
      <FormikField
        name={name}
        id={id}
        placeholder={placeholder}
        as="textarea"
        className={className}
      />
    );
  } else if (type === "select") {
    return (
      <FormikField
        name={name}
        id={id}
        placeholder={placeholder}
        as="select"
        className={className}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options!.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </FormikField>
    );
  }

  return (
    <FormikField
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
    />
  );
}
