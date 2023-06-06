const { UserInputError } = require("apollo-server-errors");
const Joi = require("joi");
const datasources = require("../../datasource");
const generateToken = require("../../../utils/generateToken");

function registerInputValidation(input) {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    full_name: Joi.string().required(),
    role: Joi.string().required(),
    specialization: Joi.string(),
  });

  const { error } = schema.validate(input);

  if (error) throw new UserInputError(error);
}

async function action(input) {
  const { full_name, email, password, role, specialization } = input;
  const avatar = `https://ui-avatars.com/api/?name=${full_name}&bold=true&background=7263CC&color=FFFFFF`;
  try {
    const user = await datasources.newUser({
      full_name,
      email,
      password,
      avatar,
      role,
      specialization,
    });

    return user;
  } catch (error) {
    if (error.code === 11000 || error.code === 11001)
      throw new Error(`There is an existing account with this email ${email}`);
    throw new Error(error);
  }
}

async function registerUserService(input) {
  registerInputValidation(input);

  const user = await action(input);

  const token = generateToken(user._id);
  return {
    token: token,
    user,
  };
}

module.exports.registerUserService = registerUserService;
