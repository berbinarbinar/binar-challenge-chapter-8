const { hashPassword } = require("../utils/passwordHandler");
const { Player } = require("../models");
const { Op } = require("sequelize");
const LEVEL_BAR = 1000;

class PlayerController {
  static async createPlayer(req, res, next) {
    try {
      const { username, email, password, experience } = req.body;
      if (!username || !email) {
        return res.status(400).json({
          result: "Failed",
          message: "username or email cannot empty",
        });
      }
      if (!password) {
        return res.status(400).json({
          result: "Failed",
          message: "password cannot be empty",
        });
      }
      const newPlayer = {
        username,
        email,
        password: await hashPassword(password),
        experience: experience ? experience : 0,
        lvl: experience ? Math.floor(experience / LEVEL_BAR) : 0,
      };
      const createdPlayer = await Player.create(newPlayer);
      if (createdPlayer) {
        return res.status(201).json({
          result: "Success",
          data: createdPlayer,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getPlayers(req, res, next) {
    try {
      let conditions = [];
      const { username, email, experience, lvl } = req.query;
      if (username) {
        conditions.push({ username });
      }
      if (email) {
        conditions.push({ email });
      }
      if (experience) {
        conditions.push({ experience });
      }
      if (lvl) {
        conditions.push({ lvl });
      }

      const data = await Player.findAll({
        where: {
          [Op.and]: conditions,
        },
      });
      if (data) {
        return res.status(200).json({
          result: "Success",
          data,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getPlayerById(req, res, next) {
    try {
      const { id } = req.params;
      const player = await Player.findByPk(id);
      if (player) {
        return res.status(200).json({
          result: "Success",
          data: player,
        });
      } else {
        return res.status(404).json({
          result: "Not found",
          message: `Player with ${id} not found`
        })
      }
    } catch (error) {
      next(error);
    }
  }

  static async updatePlayer(req, res, next) {
    try {
      const { id } = req.params;
      const player = await Player.findByPk(id)
      if (!player) return res.status(404).json({ result: "Not found", message: `Player with ${id} not found` })
      const updatedPlayer = await Player.update(req.body, {
        where: { id: id },
      });
      if (updatedPlayer == 1) {
        return res.status(200).json({
          result: "Success",
          message: `Player with id: ${id} successfully updated`,
        });
      } else {
        return res.status(500).json({
          result: "failed",
          message: "Failed to update",
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async updateExperience(req, res, next) {
    try {
      const { exp } = req.body;
      const { id } = req.params;
      if (!exp) {
        return res.status(400).json({
          result: "Failed",
          message: "Exp field cannot be empty",
        });
      }

      const player = await Player.findByPk(id);
      if (!player) return res.status(404).json({ result: "Not found", message: `Player with ${id} not found` })

      if (player) {
        let expValue = player.experience + parseInt(exp);
        let lvlValue =
          Math.floor(expValue / LEVEL_BAR) == player.lvl
            ? player.lvl
            : player.lvl + 1;

        const updateLvl = await Player.update(
          {
            experience: expValue,
            lvl: lvlValue,
          },
          { where: { id: id } }
        );
        if (updateLvl == 1) {
          res.status(200).json({
            result: "SUCCESS",
            message: `Player with id = ${id} gain ${exp} experience. Total experience = ${player.experience}`,
          });
        } else {
          res.status(400).json({
            result: "FAILED",
            message: `Cannot update Player with id=${id}!`,
          });
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async deletePlayer(req, res, next) {
    try {
      const { id } = req.params;

      const destroyed = await Player.destroy({
        where: { id: id },
      });
      if (destroyed == 1) {
        res.status(200).json({
          result: "Success",
          message: `Player with id: ${id}, was deleted successfully`,
        });
      } else {
        res.status(400).json({
          result: "FAILED",
          message: `Cannot delete Player with id=${id}. Maybe Player was not found!`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PlayerController;
