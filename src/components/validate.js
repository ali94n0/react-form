export const validate = (data, type) => {
  const errors = {};

  if (type === "signup") {
    if (data.name.trim().length < 3) {
      errors.name = "name need to be at least 3 charachter";
    } else {
      delete errors.name;
    }

    if (!data.email) {
      errors.email = "enter your email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "email incorrect";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "enter your password";
    } else if (data.password.length < 8) {
      errors.password = "password must be at least 8 charachter";
    } else {
      delete errors.password;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm your password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Confirmation password is wrong ...";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept Our Regulations";
    }
  }

  if (!data.email) {
    errors.email = "enter your email";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email incorrect";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "enter your password";
  } else if (data.password.length < 8) {
    errors.password = "password must be at least 8 charachter";
  } else {
    delete errors.password;
  }

  return errors;
};
