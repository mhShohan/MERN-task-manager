const zodMessage = (fieldName: string, type: string = 'string') => {
  return {
    invalid_type_error: `${fieldName} must be a ${type}!`,
    required_error: `${fieldName} is required!`,
  };
};

export default zodMessage;
