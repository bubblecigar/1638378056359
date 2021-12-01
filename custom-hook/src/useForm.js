import { useState, useCallback } from 'react'

export const useForm = ({
  initialValues,
  validate,
  onSubmit
}) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const field = e.target.name
    switch (field) {
      case 'account': {
        setValues({ ...values, account: e.target.value })
        break
      }
      case 'password': {
        setValues({ ...values, password: e.target.value })
        break
      }
      case 'rememberMe': {
        setValues({ ...values, rememberMe: e.target.checked })
        break
      }
      default: {
        throw Error('unhandled field')
      }
    }
  }

  const handleSubmit = () => {
    const errorObject = validate(values)
    setErrors(errorObject)
    const hasError = Object.keys(errorObject).length > 0
    if (hasError) {
      // by pass
    } else {
      onSubmit(values)
    }
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}