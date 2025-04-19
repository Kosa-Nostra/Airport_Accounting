import {
  getFlights,
  getFlightById,
  insertFlight,
  updateFlightById,
  deleteFlightById,
} from "../models/flightModel.js";

export const showFlights = (req, res) => {
  getFlights((err, results) => {
    if (err) res.send(err);
    else res.json(results);
  });
};

export const showFlightById = (req, res) => {
  getFlightById(req.params.id, (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
};

export const createFlight = (req, res) => {
  const data = req.body;
  insertFlight(data, (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
};

export const updateFlight = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateFlightById(data, id, (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
};

export const deleteFlight = (req, res) => {
  deleteFlightById(req.params.id, (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
};
