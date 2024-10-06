
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

        {/* First and Last Name */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
             
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
             
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Query Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">
            Query Type
          </label>
          <div className="mt-1">
            <label className="mr-4">
              <input
                type="radio"
                name="queryType"
                value="General Enquiry"
                
                className="mr-1"
              />
              General Enquiry
            </label>
            <label>
              <input
                type="radio"
                name="queryType"
                value="Support Request"
                
                className="mr-1"
              />
              Support Request
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            name="message"
           
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          />
        </div>

        {/* Consent */}
        <div className="mb-4">
          <label className="flex items-start text-sm font-semibold text-gray-700">
            <input
              type="checkbox"
              name="consent"
              
              className="mt-1 mr-2"
              required
            />
            I consent to being contacted by the team
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md font-semibold hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App
