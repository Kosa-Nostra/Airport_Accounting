// import connection
import db from "../config/database.js";
 
// Get All Airlines
export const getAirline = (result) => {
    db.query("SELECT * FROM airline", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single airline
export const getAirlineById = (id, result) => {
    db.query("SELECT * FROM airline WHERE AirlineID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Airline to Database
export const insertAirline = (data, result) => {
    db.query("INSERT INTO airline SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Airline to Database
export const updateAirlineById = (data, id, result) => {
    db.query("UPDATE airline SET Name = ?, Rating = ? WHERE AirlineID = ?", [data.Name, data.Rating, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Airline to Database
export const deleteAirlineById = (id, result) => {
    db.query("DELETE FROM airline WHERE AirlineID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}