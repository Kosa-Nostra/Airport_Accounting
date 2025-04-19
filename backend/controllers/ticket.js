import {
  getTickets,
  getTicketById,
  insertTicket,
  updateTicketById,
  deleteTicketById,
} from "../models/ticketModel.js";

export const showTickets = (req, res) => {
  getTickets((err, results) => {
    if (err) res.send(err);
    else res.json(results);
  });
};

export const showTicketById = (req, res) => {
  getTicketById(req.params.id, (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
};

export const createTicket = (req, res) => {
  const data = req.body;
  insertTicket(data, (err, result) => {
    if (err) res.status(400).json({ error: err });
    else res.json(result);
  });
};

export const updateTicket = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateTicketById(data, id, (err, result) => {
    if (err) res.status(400).json({ error: err });
    else res.json(result);
  });
};

export const deleteTicket = (req, res) => {
  deleteTicketById(req.params.id, (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
};
