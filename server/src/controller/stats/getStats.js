const Boom = require('@hapi/boom');
const getBill = require('../../queries/getBill');
const { User } = require('../../models');
const statsSchema = require('../../validation/statsSchema');

const getStats = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { typeId, billingMonth, billingYear } = req.query;
    try {
      await statsSchema.validateAsync(
        {
          userId,
          typeId,
          billingMonth,
          billingYear,
        },
        { abortEarly: false }
      );
    } catch (validationError) {
      throw Boom.badRequest(validationError);
    }
    const userData = await User.findByPk(userId);
    const { is_married: isMarried, family_count: familyCount } = userData;
    const data = await User.findAll({
      attributes: ['id'],
      where: { is_married: isMarried, family_count: familyCount },
    });
    const usersId = data.map((user) => user.get('id'));
    const statsPromises = usersId.map((id) =>
      getBill(id, typeId, billingMonth, billingYear)
    );

    const stats = await Promise.all(statsPromises);
    res.json(stats.map(({ amount }) => amount));
  } catch (err) {
    next(err);
  }
};

module.exports = getStats;
