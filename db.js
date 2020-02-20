const { Client } = require("pg");
const UUID = require("uuid");
const client = new Client("postgres://localhost/AcmeUserDepartments");

const sync = async () => {
	const SQL = `DROP TABLE IF EXISTS users;
	  CREATE TABLE users(
	    id UUID PRIMARY KEY,
	    name VARCHAR
	  );
	  INSERT INTO users (name) VALUES ('Potato');`;
	return await client.query(SQL);
	//DROP and RECREATE TABLES
	//remember "departmentId" will need to be in quotes
};

const readDepartments = async () => {
	return [];
};

const readUsers = async () => {
	return [];
};

module.exports = {
	sync,
	readDepartments,
	readUsers
};
//you will eventually need to export all of these
/*
module.exports = {
  sync,
  readDepartments,
  readUsers,
  createDepartment,
  createUser,
  deleteDepartment,
  deleteUser,
  updateUser,
  updateDepartment
};
*/
