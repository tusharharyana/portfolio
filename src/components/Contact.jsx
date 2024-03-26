import React,{useState} from "react";
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("xzbnvova");
  const [showMessage, setShowMessage] = useState(false);
  if (state.succeeded) {
    return (
      <div id="contacts" className="flex justify-center items-center h-screen">
        <div className="p-2 mx-14 my-14 bg-cyan-50 rounded-lg">
          <p>Thanks for joining!</p>
        </div>
      </div>
    );
  }
  return (
    <div id="contacts" className="flex justify-center items-center h-screen">
      <div className="p-2 mx-14 my-14 bg-cyan-50 rounded-lg">
        <div>
          <h1>Contact Me</h1>
        </div>
        <p className="font-mono mt-3 mb-3">
          Ready to start a conversation? Drop me a message!
        </p>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            setShowMessage(true);
          }}
          action="https://formspree.io/f/xzbnvova"
          method="POST"
          className="w-full max-w-lg"
        >
          <div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
               id="name"
               name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                type="text"
              />
            </div>
            <div>
              <label
                htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
               id="email"
               name="_replyto"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                type="email"
              />
            </div>
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
               id="subject"
               name="subject"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea   
              id="message"
              name="message" className="shadow appearance-none border rounded w-full py-2  px-3 text-gray-700 leading-tight focus:shadow-outline"></textarea>
            </div>

            <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Send Message
            </button>
          </div>
        </form>
        {showMessage && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
              <p>Thanks for your message!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
