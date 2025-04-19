import {
    getPassengers,
    getPassengerById,
    insertPassenger,
    updatePassengerById,
    deletePassengerById,
  } from "../models/passengerModel.js";
  
  export const showPassengers = (req, res) => {
    getPassengers((err, results) => {
      if (err) res.send(err);
      else res.json(results);
    });
  };
  
  export const showPassengerById = (req, res) => {
    getPassengerById(req.params.id, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  };
  
  export const createPassenger = (req, res) => {
    const data = req.body;
    insertPassenger(data, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  };
  
  export const updatePassenger = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updatePassengerById(data, id, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  };
  
  export const deletePassenger = (req, res) => {
    deletePassengerById(req.params.id, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  };
  