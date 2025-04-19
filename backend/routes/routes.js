import express from "express";
const router = express.Router();

// Airline
import {
  showAirline,
  showAirlineById,
  createAirline,
  updateAirline,
  deleteAirline,
} from "../controllers/airline.js";

// Flight
import {
  showFlights,
  showFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
} from "../controllers/flight.js";

// Passenger
import {
  showPassengers,
  showPassengerById,
  createPassenger,
  updatePassenger,
  deletePassenger,
} from "../controllers/passenger.js";

// Ticket
import {
  showTickets,
  showTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../controllers/ticket.js";

// Payment
import {
  showPayments,
  showPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
} from "../controllers/payment.js";

// Airline routes
router.get("/airline", showAirline);
router.get("/airline/:id", showAirlineById);
router.post("/airline", createAirline);
router.put("/airline/:id", updateAirline);
router.delete("/airline/:id", deleteAirline);

// Flight routes
router.get("/flight", showFlights);
router.get("/flight/:id", showFlightById);
router.post("/flight", createFlight);
router.put("/flight/:id", updateFlight);
router.delete("/flight/:id", deleteFlight);

// Passenger routes
router.get("/passenger", showPassengers);
router.get("/passenger/:id", showPassengerById);
router.post("/passenger", createPassenger);
router.put("/passenger/:id", updatePassenger);
router.delete("/passenger/:id", deletePassenger);

// Ticket routes
router.get("/ticket", showTickets);
router.get("/ticket/:id", showTicketById);
router.post("/ticket", createTicket);
router.put("/ticket/:id", updateTicket);
router.delete("/ticket/:id", deleteTicket);

// Payment routes
router.get("/payment", showPayments);
router.get("/payment/:id", showPaymentById);
router.post("/payment", createPayment);
router.put("/payment/:id", updatePayment);
router.delete("/payment/:id", deletePayment);

export default router;
