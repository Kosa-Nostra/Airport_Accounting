import db from "../config/database.js";

export const getFlights = (result) => {
  db.query("SELECT * FROM flight", (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const getFlightById = (id, result) => {
  db.query("SELECT * FROM flight WHERE FlightID = ?", [id], (err, res) => {
    if (err) return result(err, null);
    result(null, res[0]);
  });
};

export const insertFlight = (data, result) => {
  db.query("INSERT INTO flight SET ?", [data], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const updateFlightById = (data, id, result) => {
  db.query("UPDATE flight SET ? WHERE FlightID = ?", [data, id], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const deleteFlightById = (id, result) => {
  db.query("DELETE FROM flight WHERE FlightID = ?", [id], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};
