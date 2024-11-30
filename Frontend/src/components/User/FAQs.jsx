function FAQ()
{
    return (
      <div className="bg-gradient-to-br from-black via-red-600 to-black min-h-screen py-8">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-semibold text-center text-white mb-8">FAQ's</h1>
  
          <div className="faq-container space-y-6">
            {/* General Questions Section */}
            <div className="faq-item bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">General Questions</h3>
              <div className="space-y-4 mt-4 text-white">
                <p><strong>1. What is a paying guest (PG) accommodation?</strong><br />
                  PG accommodation is a type of lodging where individuals rent a room in a house or apartment and share common facilities with the owner or other tenants.
                </p>
                <p><strong>2. How does booking a PG work?</strong><br />
                  Guests can search for available PG accommodations based on their location, budget, and other preferences. Once they find a suitable option, they can book it directly through the website.
                </p>
              </div>
            </div>
  
            {/* Booking Process Section */}
            <div className="faq-item bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Booking Process</h3>
              <div className="space-y-4 mt-4 text-white">
                <p><strong>3. How do I make a booking?</strong><br />
                  Choose your desired PG listing, select your dates, and complete the booking form. Payment may be required to confirm your reservation.
                </p>
                <p><strong>4. Can I cancel my booking?</strong><br />
                  Cancellation policies differ by host. Check the specific policy on the property listing or in your confirmation email.
                </p>
                <p><strong>5. Is a security deposit required?</strong><br />
                  Many PGs require a security deposit, which will be detailed during the booking process.
                </p>
              </div>
            </div>
  
            {/* Payment and Fees Section */}
            <div className="faq-item bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Payment and Fees</h3>
              <div className="space-y-4 mt-4 text-white">
                <p><strong>6. What payment methods are accepted?</strong><br />
                  We accept various payment methods, including credit/debit cards and sometimes other platforms like PayPal.
                </p>
                <p><strong>7. Are there any additional fees?</strong><br />
                  Some listings may have cleaning fees, maintenance charges, or utility costs. All fees will be displayed before you finalize your booking.
                </p>
              </div>
            </div>
  
            {/* During Your Stay Section */}
            <div className="faq-item bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">During Your Stay</h3>
              <div className="space-y-4 mt-4 text-white">
                <p><strong>8. What amenities are typically offered in PG accommodations?</strong><br />
                  Amenities can vary, but many PGs provide Wi-Fi, meals, laundry facilities, and common living areas. Check the specific listing for details.
                </p>
                <p><strong>9. What should I do if I have issues during my stay?</strong><br />
                  If you experience any problems, contact the host directly through the messaging system on the website or reach out to customer support for assistance.
                </p>
              </div>
            </div>
  
            {/* Safety and Security Section */}
            <div className="faq-item bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Safety and Security</h3>
              <div className="space-y-4 mt-4 text-white">
                <p><strong>10. How do you ensure guest safety?</strong><br />
                  We verify listings through a review process and encourage guests to read feedback from previous tenants. Always ensure to communicate through our platform for security.
                </p>
                <p><strong>11. Is my payment information secure?</strong><br />
                  Yes, we use secure encryption protocols to protect your payment information during transactions.
                </p>
              </div>
            </div>
  
            {/* Reviews and Feedback Section */}
            <div className="faq-item bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Reviews and Feedback</h3>
              <div className="space-y-4 mt-4 text-white">
                <p><strong>12. Can I leave a review?</strong><br />
                  Yes! After your stay, you’ll have the opportunity to leave a review to help future guests make informed decisions.
                </p>
                <p><strong>13. How can I report a problem with a listing?</strong><br />
                  If you notice any issues with a listing, please contact our support team with details for further investigation.
                </p>
              </div>
            </div>
  
            {/* Miscellaneous Section */}
            <div className="faq-item bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Miscellaneous</h3>
              <div className="space-y-4 mt-4 text-white">
                <p><strong>14. Can I bring pets?</strong><br />
                  Pet policies vary by PG. Check the listing for details on whether pets are allowed.
                </p>
                <p><strong>15. How can I contact customer support?</strong><br />
                  You can reach our customer support team through the "Contact Us" section on the website, via email, or through live chat.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Section */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          &copy; 2024 BeMyPG. All rights reserved.
        </footer>
      </div>
    );
  }
  
  export default FAQ;
  