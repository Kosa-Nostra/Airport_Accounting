import {
    getPayments,
    getPaymentById,
    insertPayment,
    updatePaymentById,
    deletePaymentById,
  } from "../models/paymentModel.js";
  
  export const showPayments = (req, res) => {
    getPayments((err, results) => {
      if (err) res.send(err);
      else res.json(results);
    });
  };
  
  export const showPaymentById = (req, res) => {
    getPaymentById(req.params.id, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  };
  
  export const createPayment = (req, res) => {
    const data = req.body;
    insertPayment(data, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  };
  
  export const updatePayment = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updatePaymentById(data, id, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  };
  
  export const deletePayment = (req, res) => {
    deletePaymentById(req.params.id, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  };
  