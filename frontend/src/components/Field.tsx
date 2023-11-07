import classNames from "classnames";
import { ErrorMessage, Field as FormikField, useFormikContext } from "formik";
import { ReactNode } from "react";

interface FieldProps {
  label: string | ReactNode;
  type?: string;
  name: string;
  id?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  imageSrc?: string;
  autosubmit?: boolean;
  max?: number;
}
export default function Field({
  label,
  type = "text",
  name,
  id,
  placeholder,
  options,
  imageSrc,
  autosubmit,
  max,
}: FieldProps) {
  const { errors, touched } = useFormikContext();
  const hasError = !!errors[name] && !!touched[name];

  const labelClasses = classNames("block", [hasError && "text-red-500"]);
  const fieldClasses = classNames("bg-transparent block w-full", [
    hasError && "border-red-500 text-red-500",
  ]);
  return (
    <div className="mb-4">
      <label className={labelClasses}>{label}</label>
      <DynamicField
        className={fieldClasses}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        options={options}
        imageSrc={imageSrc}
        autosubmit={autosubmit}
        max={max}
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
  imageSrc?: string;
  autosubmit?: boolean;
  max?: number;
}

function DynamicField({
  type,
  name,
  id,
  placeholder,
  className,
  options,
  imageSrc,
  autosubmit,
  max,
}: DynamicFieldProps) {
  const { handleChange, submitForm, setFieldValue, values } =
    useFormikContext();

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
  } else if (type === "file") {
    return (
      <div>
        {values[name] ? (
          <img src={URL.createObjectURL(values[name])} />
        ) : imageSrc ? (
          <img src={imageSrc} />
        ) : null}
        <input
          name={name}
          id={id}
          type="file"
          placeholder={placeholder}
          className={className}
          onChange={(e: any) => {
            setFieldValue(name, e.currentTarget.files[0]);
          }}
        />
      </div>
    );
  }

  return (
    <>
      <FormikField
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        onChange={(e: any) => {
          handleChange(e);
          if (autosubmit) {
            submitForm();
          }
        }}
        maxLength={max}
      />
      {!!max && (
        <p className="text-right text-sm">
          {values[name].length}/{max}
        </p>
      )}
    </>
  );
}
