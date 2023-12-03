import mongoose from 'mongoose';

const handleCastError = (error: mongoose.Error.CastError) => {
  return {
    error,
  };
};

export default handleCastError;
