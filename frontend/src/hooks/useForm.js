import { useState } from "react";

export function useForm(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const message = await onSubmit(values);
      setStatus({ type: "success", message });
      setValues(initialValues);
    } catch (err) {
      if (err.fieldErrors) setErrors(err.fieldErrors);
      setStatus({ type: "error", message: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return { values, errors, status, loading, handleChange, handleSubmit };
}