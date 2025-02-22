import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    if (formData.fullName.trim() === "") {
      document.getElementById("fullName-warning").classList.remove("hidden");
      isValid = false;
    }
    if (formData.email.trim() === "") {
      document.getElementById("email-warning").classList.remove("hidden");
      isValid = false;
    }
    if (formData.message.trim() === "") {
      document.getElementById("message-warning").classList.remove("hidden");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    // Since no API call is required, simply display a success message
    setStatus("Message received! Thank you.");
    
    // Reset the form fields
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="name"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={() => {
                if (formData.fullName.trim() === "") {
                  document.getElementById("fullName-warning").classList.remove("hidden");
                } else {
                  document.getElementById("fullName-warning").classList.add("hidden");
                }
              }}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <p id="fullName-warning" className="text-red-500 hidden">Name is required</p>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={() => {
                if (formData.email.trim() === "") {
                  document.getElementById("email-warning").classList.remove("hidden");
                } else {
                  document.getElementById("email-warning").classList.add("hidden");
                }
              }}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <p id="email-warning" className="text-red-500 hidden">Email is required</p>
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={() => {
                if (formData.message.trim() === "") {
                  document.getElementById("message-warning").classList.remove("hidden");
                } else {
                  document.getElementById("message-warning").classList.add("hidden");
                }
              }}
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
            <p id="message-warning" className="text-red-500 hidden">Message is required</p>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-gray-900 py-3 px-8 text-base font-semibold text-gray-300 hover:text-blue-400 outline-none"
            >
              Submit
            </button>
          </div>
          {status && (
            <div className="mt-4 text-center">
              <p className={status.includes("Failed") ? "text-red-500" : "text-green-500"}>{status}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
