// Import function from airline Model
import { getAirline, getAirlineById, insertAirline, updateAirlineById, deleteAirlineById } from "../models/airlineModel.js";
 
// Get All Airlines
export const showAirline = (req, res) => {
    getAirline((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Airline
export const showAirlineById = (req, res) => {
    getAirlineById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Airline
export const createAirline = (req, res) => {
    const data = req.body;
    insertAirline(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Airline
export const updateAirline = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateAirlineById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Airline
export const deleteAirline = (req, res) => {
    const id = req.params.id;
    deleteAirlineById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
