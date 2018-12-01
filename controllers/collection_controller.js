const Collection = require('../models/collection');

exports.create = async (request, response) => {
  let disk = await Collection.create({
    name: request.body.name,
    disks: request.body.disks
  });

  response.send(disk);
}

exports.getAll = async (request, response) => {
  let collections = await Collection.findAll();

  response.send(collections);
}
