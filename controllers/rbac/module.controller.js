const { Module } = require('../../db/models');

module.exports = {
  store: async (req, res) => {
    try {
      const { name, description } = req.body;
      if (!name) {
        return res.status(400).json({
          status: false,
          message: 'role name is required!',
          data: null,
        });
      }

      const role = await Module.findOne({ where: { name } });
      if (role) {
        return res.status(400).json({
          status: false,
          message: `role ${name} is already exist!`,
          data: role,
        });
      }

      const newModule = await Module.create({ name, description });
      return res.status(201).json({
        status: true,
        message: `role ${name} created!`,
        data: newModule,
      });
    } catch (error) {
      throw error;
    }
  },

  index: async (req, res) => {
    try {
      const roles = await Module.findAll();
      return res.status(200).json({
        status: true,
        message: `success!`,
        data: roles,
      });
    } catch (error) {
      throw error;
    }
  },

  show: async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Module.findOne({ where: { id } });
      if (!role) {
        return res.status(404).json({
          status: false,
          message: `role with id ${id} is not exist!`,
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: `success!`,
        data: role,
      });
    } catch (error) {
      throw error;
    }
  },
};
