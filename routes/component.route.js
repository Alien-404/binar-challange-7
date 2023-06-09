const component = require('../controllers/component.controller');
const { rbacHandler } = require('../middleware');
const { rbacModule } = require('../utils/enum');

// modules
require('dotenv').config();
const router = require('express').Router();

// GET
router.get(
  '/',
  rbacHandler(rbacModule.authorization, true, false),
  component.show
);
router.get(
  '/:component_uuid',
  rbacHandler(rbacModule.authorization, true, false),
  component.index
);
router.post(
  '/',
  rbacHandler(rbacModule.authorization, true, true),
  component.store
);
router.put(
  '/:component_uuid',
  rbacHandler(rbacModule.authorization, true, true),
  component.update
);
router.delete(
  '/:component_uuid',
  rbacHandler(rbacModule.authorization, true, true),
  component.destroy
);

module.exports = router;
