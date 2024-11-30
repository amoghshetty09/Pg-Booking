const pgModel =require("../models/AddPGdetails")

const userScheduledVisits = async (req, res) => {
    console.log("newwwww",req.body)
    try {
        // Extract email from the request body
        const { email } = req.body;
        console.log(email)
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
    
    
        // Find the PG details associated with the user by matching the user object id
        const pgDetails = await pgModel.findOne({ "scheduledVisits.email": email });
        console.log("detttt",pgDetails)
        if (!pgDetails) {
            return res.status(404).json({ message: 'No PG found for this user' });
        }
    
        // Find the bookings of the user within the PG details by matching the user's email
        const visits = pgDetails.scheduledVisits.filter(visit => visit.email === email);
    
        if (visits.length === 0) {
            return res.status(404).json({ message: 'No bookings found for this user' });
        }
    
        // Return the bookings
        return res.status(200).json(visits);
    } catch (error) {
        console.error('Error fetching user bookings:', error.message);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}
module.exports = {userScheduledVisits};