import React, { useCallback } from "react";

//хук управления формой и валидации формы
export function FormValidation() {
  const [values, setValues] = React.useState({}); // Объект значений инпутов
  const [errors, setErrors] = React.useState({}); // Объект ошибок инпутов
  const [isValid, setIsValid] = React.useState(false); // Валиден ли инпут

  const handleChange = (event) => {
    const target = event.target;
    const { name, value} = target
    console.log(name, value);
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetForm };
}