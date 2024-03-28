import express from 'express';
import {
  categoryDelete,
  categoryGet,
  categoryListGet,
  categoryPost,
  categoryPut,
} from '../controllers/categoryController';
import {body, param} from 'express-validator';
import {validationErrors} from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(categoryListGet)
  .post(
    body('category_name').notEmpty().isString().isAlpha().escape(),
    validationErrors,
    categoryPost
  );

router
  .route('/:id')
  .get(param('id').isMongoId(), validationErrors, categoryGet)
  .put(
    param('id').isMongoId().isInt(),
    body('category_name').isString().escape().optional(),
    validationErrors,
    categoryPut
  )
  .delete(param('id').isMongoId().isInt(), validationErrors, categoryDelete);

export default router;
