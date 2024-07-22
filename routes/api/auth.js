import STATUS_CODES from "../../utils/statusCodes.js";
import User from "../../models/User.js";
import express from "express";
import handleError from "../../utils/handleError.js";
import authController from "../../controller/authController.js";

const router = express.Router();

function checkRegisterPayload(data) {
  if (!data?.email || !data?.password) {
    return false;
  }
  return true;
}

router.post("/signup", async (req, res, next) => {
  try {
    const isValid = checkRegisterPayload(req.body);

    if (!isValid) {
      throw handleError("The signup payload is not valid");
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(STATUS_CODES.CONFLICT)
        .json({ message: "User already exists" });
    }

    const newUser = await authController.signup({ email, password });
    console.log(newUser);
    res.status(STATUS_CODES.CREATED).json(newUser);
  } catch (error) {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: "There was an error to the validation library" });
  }
});

export default router;
