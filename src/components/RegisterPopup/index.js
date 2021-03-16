import React, { useEffect } from 'react';
import Popup from '../Popup';
import FormInput from '../FormInput';
import Form from '../Form';
import PopupLink from '../PopupLink';
import { PlaceContext } from '../../contexts/PlaceContext';
import useForm from '../../hooks/useForm';

function RegisterPopup({
  isOpen,
  onClose,
  onLoginPopup,
  onRegister,
  setFormError,
  formError,
}) {
  const {
    handleChangeInput,
    handleSubmit,
    values,
    validationError,
    setValidationError,
    setValues,
    setIsValid,
    isValid,
    isFormValid
  } = useForm(submitForm);

  useEffect(() => {
    setValidationError({
      email: "",
      password: "",
      name: "",
    });
    setValues({
      email: "",
      password: "",
      name: "",
    });
    setIsValid({
      email: false,
      password: false,
      name: false,
    });
    setFormError('');
  }, [setValidationError, setValues, setIsValid, setFormError, isOpen]);

  function submitForm(e) {
    const { email, password, name } = values;
    onRegister(email, password, name);
  };

  return (
    <PlaceContext.Provider value="register">
      <Popup
        name="register"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Form
          formTitle="Регистрация"
          buttonText="Зарегистрироваться"
          onSubmit={handleSubmit}
          isDisabled={!isFormValid}
          formError={formError}
        >
          <FormInput
            inputName="email"
            type="email"
            name="email"
            placeholder="Введите почту"
            value={String(values.email)}
            onChange={handleChangeInput}
            isValid={isValid.email}
            error={`${values.email === ""
              ? validationError.email
              : `Неправильный формат email`
            }`}
            minLength="1"
            maxLength="40"
          />
          <FormInput
            inputName="password"
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={String(values.password)}
            onChange={handleChangeInput}
            isValid={isValid.password}
            error={validationError.password}
            minLength="1"
            maxLength="40"
          />
          <FormInput
            inputName="name"
            type="text"
            name="name"
            placeholder="Введите своё имя"
            value={String(values.name)}
            onChange={handleChangeInput}
            isValid={isValid.name}
            error={`${values.name === ""
              ? validationError.name
              : `Имя не должно быть короче 2-х символов`
            }`}
            minLength="2"
            maxLength="30"
          />
        </Form>
        <PopupLink
          onClick={onLoginPopup}
        />
      </Popup>
    </PlaceContext.Provider>
  );
}

export default RegisterPopup;