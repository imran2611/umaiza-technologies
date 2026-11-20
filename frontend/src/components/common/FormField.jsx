import { useEffect, useRef } from "react";

function FormField({
  label, name, type = "text", value, onChange, error,
  required = false, as = "input", options = [], placeholder = "", rows = 5,
  accept, hint,
}) {
  const id = `field-${name}`;
  const fileRef = useRef(null);

  // File input ko form reset ke baad khali karo (state null hone par DOM bhi saaf)
  useEffect(() => {
    if (type === "file" && !value && fileRef.current) {
      fileRef.current.value = "";
    }
  }, [type, value]);

  const common = {
    id,
    name,
    onChange,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
  const controlled = { ...common, value, placeholder };
  const invalid = error ? " is-invalid" : "";

  let control;
  if (as === "textarea") {
    control = <textarea rows={rows} className={`form-control${invalid}`} {...controlled} />;
  } else if (as === "select") {
    control = (
      <select className={`form-select${invalid}`} {...controlled}>
        <option value="">Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    );
  } else if (type === "file") {
    // File input par value nahi lagti, isliye `common` use hota hai (`controlled` nahi)
    control = (
      <input
        type="file"
        ref={fileRef}
        accept={accept}
        className={`form-control${invalid}`}
        {...common}
      />
    );
  } else {
    control = <input type={type} className={`form-control${invalid}`} {...controlled} />;
  }

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-semibold">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      {control}
      {hint && !error && <div className="form-text">{hint}</div>}
      {error && (
        <div id={`${id}-error`} className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  );
}

export default FormField;