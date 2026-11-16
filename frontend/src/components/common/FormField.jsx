function FormField({
  label, name, type = "text", value, onChange, error,
  required = false, as = "input", options = [], placeholder = "", rows = 5,
}) {
  const id = `field-${name}`;
  const common = {
    id,
    name,
    value,
    onChange,
    placeholder,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
  const invalid = error ? " is-invalid" : "";

  let control;
  if (as === "textarea") {
    control = <textarea rows={rows} className={`form-control${invalid}`} {...common} />;
  } else if (as === "select") {
    control = (
      <select className={`form-select${invalid}`} {...common}>
        <option value="">Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    );
  } else {
    control = <input type={type} className={`form-control${invalid}`} {...common} />;
  }

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-semibold">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      {control}
      {error && (
        <div id={`${id}-error`} className="invalid-feedback d-block">
          {error}
        </div>
      )}
    </div>
  );
}

export default FormField;