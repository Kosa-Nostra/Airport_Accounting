import db from "../config/database.js";

export const getTickets = (result) => {
  db.query("SELECT * FROM ticket", (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const getTicketById = (id, result) => {
  db.query("SELECT * FROM ticket WHERE TicketID = ?", [id], (err, res) => {
    if (err) return result(err, null);
    result(null, res[0]);
  });
};

export const insertTicket = (data, result) => {
  db.query("INSERT INTO ticket SET ?", [data], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const updateTicketById = (data, id, result) => {
  db.query("UPDATE ticket SET ? WHERE TicketID = ?", [data, id], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

export const deleteTicketById = (id, result) => {
  db.query("DELETE FROM ticket WHERE TicketID = ?", [id], (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};
