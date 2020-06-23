const getBillsStats = require('../../queries/getBillsStats');
const { User } = require('../../models');

const getStats = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { typeId, billingMonth, billingYear } = req.query;
    const userData = await User.findByPk(userId);
    const { is_married: isMarried, family_count: familyCount } = userData;
    const data = await User.findAll({
      where: { is_married: isMarried, family_count: familyCount },
    });
    const usersId = data.map((user) => user.id);
    const statsPromises = usersId.map((id) =>
      getBillsStats(id, typeId, billingMonth, billingYear)
    );

    const stats = await Promise.all(statsPromises);
    res.json(stats.map(({ amount }) => amount));
  } catch (err) {
    next(err);
  }
};

module.exports = getStats;
