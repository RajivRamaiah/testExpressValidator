// controllers/usersController.js
import usersStorage from "../storages/usersStorage.js";
import { body } from "express-validator";
import { validationResult } from "express-validator";

const letterError = "Must only contain letters.";
const lengthError = "Must be between 1 and 10 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${letterError}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthError}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${letterError}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthError}`),
];

export function usersListGet(req, res) {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
}

export function usersCreateGet(req, res) {
  res.render("createUser", {
    title: "Create user",
  });
}

// export function usersCreatePost(req, res) {
//   const { firstName, lastName } = req.body;
//   usersStorage.addUser({ firstName, lastName });
//   res.redirect("/");
// }

export const usersCreatePost = [
  validateUser, // this works because it's an array of middleware
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }

    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });
    res.redirect("/");
  },
];

export const usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

export const usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect("/");
  }
];

// Tell the server to delete a matching user, if any. Otherwise, respond with an error.
export const usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};
