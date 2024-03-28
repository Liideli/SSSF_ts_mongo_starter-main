import express from 'express';
import {
  userDelete,
  userGet,
  userListGet,
  userPost,
  userPut,
} from '../controllers/userController';
import {body, param} from 'express-validator';
import {validationErrors} from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(userListGet)
  .post(
    body('user_name').notEmpty().isString().isAlpha().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').escape(),
    validationErrors,
    userPost
  );

router
  .route('/:id')
  .get(param('id').isMongoId(), validationErrors, userGet)
  .put(
    param('id').isMongoId().isInt(),
    body('user_name').notEmpty().isString().isAlpha().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').escape(),
    validationErrors,
    userPut
  )
  .delete(param('id').isMongoId().isInt(), validationErrors, userDelete);

export default router;
