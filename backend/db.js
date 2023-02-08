const sql = require("mssql/msnodesqlv8");
var connection = {
  database: "RentBicycle",
  user: "sa",
  password: "12345678",
  server: "LAPTOP-3J1H8OJL\\SQLEXPRESS",
  driver: "msnodesqlv8",
  option: {
    trustedConnection: true,
    enableArithAbort: true,
  },
};

module.exports = connection;
