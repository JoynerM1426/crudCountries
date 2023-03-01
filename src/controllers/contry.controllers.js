const catchError = require('../utils/catchError');
const Contry = require('../models/Country');
const City = require('../models/City');

const getAll = catchError(async(req, res) => {
  const contries = await Contry.findAll({raw: true})
  console.log(contries)
    return res.json(contries)
});
const getOne = catchError(async(req, res) => {
  const {id} = req.params
  const contry = await Contry.findByPk(id);
   return res.json(contry)
})

const create =catchError(async (req, res) => {
  const {name, languaje, currency, flagUrl,continentId} = req.body
  const contry =  await Contry.create({name, languaje, currency, flagUrl, continentId});
  return res.status(201).json(contry)
});
const remove = catchError(async (req, res) => {
  const {id} = req.params;
   await Contry.destroy({where: {id}});
  return res.sendStatus(204)
});
const update = catchError(async (req , res) => {
  const {name, languaje, currency, flagUrl, continentId} = req.body;
  const {id} = req.params;
  const contry = await Contry.update(
    {
      name, languaje, currency, flagUrl, continentId
    },
    {where: {id}, returning: true}
  )
  if(contry[0] === 0) return res,sendStatus(404)
  return res.json(contry[1][0])

})

module.exports = {
    getAll,
    create,
    remove,
    update,
    getOne

}