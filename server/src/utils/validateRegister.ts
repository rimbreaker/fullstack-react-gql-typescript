import { UserNamePasswordInput } from "src/resolvers/UserNamePasswordInput";

export const validateRegister = (options: UserNamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "email incorrect",
      },
    ];
  }
  if (options.username.length < 2) {
    return [
      {
        field: "username",
        message: "username too short",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "invalid username ",
      },
    ];
  }
  if (options.password.length < 3) {
    return [
      {
        field: "password",
        message: "password has to be at least length 3 ",
      },
    ];
  }
  return null;
};
