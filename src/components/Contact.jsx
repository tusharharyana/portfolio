import React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="p-2 mx-14 my-14 ">
      <div>
        <h1>Contact Me</h1>
      </div>
      <p className="font-mono mt-3 mb-3">
        Ready to start a conversation? Drop me a message!
      </p>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="email" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" type="text" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea className="shadow appearance-none border rounded w-full py-7 px-3 text-gray-700 leading-tight focus:shadow-outline"></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Send Message
        </button>
      </div>
    </div>
    </div>
  );
}

export default Contact;
