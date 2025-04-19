import db from "../config/database.js";

export const getPassengers = (result) => {
  db.query("SELECT * FROM passenger", (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const getPassengerById = (id, result) => {
  db.query("SELECT * FROM passenger WHERE PassengerID = ?", [id], (err, res) => {
    if (err) return result(err, null);
    result(null, res[0]);
  });
};

export const insertPassenger = (data, result) => {
  db.query("INSERT INTO passenger SET ?", [data], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const updatePassengerById = (data, id, result) => {
  db.query("UPDATE passenger SET ? WHERE PassengerID = ?", [data, id], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const deletePassengerById = (id, result) => {
  db.query("DELETE FROM passenger WHERE PassengerID = ?", [id], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};
