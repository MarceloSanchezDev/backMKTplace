import z from "zod";

const UserLogin = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const UserRegister = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const UserLoginSchema = (object) => {
  console.log("UserLoginSchema, object:", object);
  console.table({
    Username: object.username,
    Password: object.password,
  });
  return UserLogin.safeParse(object);
};

export const UserRegisterSchema = (object) => {
  console.log("UserRegisterSchema, object:", object);
  console.table({
    Username: object.username,
    Password: object.password,
  });
  return UserRegister.safeParse(object);
};
