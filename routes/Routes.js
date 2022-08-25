const express = require("express")
const router = express.Router()
const room=[]
var ID =0
const listOfcustomer= []

router.post("/",(req,res)=>{
    const {numberOfSeats,amenities,perHrPrice,isBooked} =req.body
    room.push({
        id:ID+1,
        numberOfSeats,
        amenities,
        perHrPrice,
        isBooked
    })
    res.status(201).send("data is collected")

})

router.post("/booked",(req,res)=>{
    room.push(req.body)
    res.status(201).send("room is booked..😍")
})

router.get("/list",(req,res)=>{
    try {
        const listBookedrooms= room.filter((room)=>room.isBooked===true)
    res.status(200).send(listBookedrooms);
    } catch (error) {
        console.log(error)
    }
    
})
router.get("/customerlist",(req,res)=>{
    const listBookedrooms= room.filter((room)=>room.isBooked===true)
     listBookedrooms.forEach((item)=>{
        listOfcustomer.push({
            customerName:item.customerName,
            roomID :item.roomID,
            date: item.date,
            startTime:item.startTime,
            endTime:item.endTime
        })
     })
     res.status(200).send(listOfcustomer)
    
})






module.exports = router;