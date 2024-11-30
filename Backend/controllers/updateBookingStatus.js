const pgModel = require("../models/AddPGdetails");

const updateBookingStatus = async(req,res) => {
    const { pgId, bookingId, newStatus, roomType } = req.body;
    console.log(req.body)
    try {
        const pg = await pgModel.findById(pgId);
        const booking = pg.pgBookings.id(bookingId);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        const numObj = {
            "single occupancy": 0,
            "double occupancy": 1,
            "triple occupancy": 2,
        };
        const num = numObj[roomType];
        if (newStatus === 'confirmed' && booking.bookingStatus !== 'confirmed') {
            const room = pg.Rooms[num];
            console.log("roooom",room);
            if (room && room.VacantRooms > 0) {
                room.VacantRooms -= 1; // Decrement room count
            } else {
                return res.status(400).json({ message: 'No vacant rooms available' });
            }
        }

        booking.bookingStatus = newStatus; // Update status
        await pg.save();

        return res.json({ success: true, redirect: "http://localhost:5173/OwnerHome" });
    } catch (error) {
        console.error('Error updating booking status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {updateBookingStatus}