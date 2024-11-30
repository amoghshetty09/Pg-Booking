function ContactUs() {
    return (
      <div className="min-h-screen bg-gradient-to-bl from-black via-red-600 to-black flex flex-col justify-between py-8">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-3xl font-semibold text-center text-white mb-8">Contact Us</h1>
          
          <div className=" bg-gray-800 p-6 rounded-lg shadow-md">
            <pre className="text-white">
              For Any Queries =&gt;
              <br/>
              Toll Free Number: 1800-000-111
              <br/>
              Mail: me@gmail.com
              <br/>
              Mob: 9999911111
            </pre>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          &copy; 2024 BeMyPG. All rights reserved.
        </footer>
      </div>
    );
  }
  
  export default ContactUs;
  