import db from "../config/database.js";

export const getPayments = (result) => {
  db.query("SELECT * FROM payment", (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const getPaymentById = (id, result) => {
  db.query("SELECT * FROM payment WHERE paymentID = ?", [id], (err, res) => {
    if (err) return result(err, null);
    result(null, res[0]);
  });
};

export const insertPayment = (data, result) => {
  db.query("INSERT INTO payment SET ?", [data], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const updatePaymentById = (data, id, result) => {
  db.query("UPDATE payment SET ? WHERE paymentID = ?", [data, id], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const deletePaymentById = (id, result) => {
  db.query("DELETE FROM payment WHERE paymentID = ?", [id], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};
