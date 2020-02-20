const { Client } = require("pg");
const UUID = require("uuid");
const client = new Client("postgres://localhost/AcmeUserDepartments");

client.connect();

const sync = async () => {
	const SQL = `DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS departments;
	CREATE TABLE users(
	  id SERIAL,
	  name VARCHAR NOT NULL
  );
  CREATE TABLE departments(
	  id UUID,
	  name VARCHAR NOT NULL
	);
  INSERT INTO users (name) VALUES ('Potato');
  INSERT INTO departments (id, name) VALUES ('${UUID()}','Potato');`;
	return await client.query(SQL);
	//DROP and RECREATE TABLES
	//remember "departmentId" will need to be in quotes
};

const readDepartments = async () => {
	const SQL = `SELECT * FROM departments`;
	const response = await client.query(SQL);
	return response.rows;
};

const readUsers = async () => {
	const SQL = `SELECT * FROM users`;
	const response = await client.query(SQL);
	return response.rows;
};

const createUser = async name => {
	const SQL = `INSERT INTO users(id, name) values( $1, $2)`;
	await client.query(SQL, [uuid(), name]);
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
