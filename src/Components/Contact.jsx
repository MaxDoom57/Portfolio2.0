import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9ac205f0-c41d-48a8-9e96-75c8073acac0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="text-c5 ">
      <h1 className="text-center m-4 text-4xl font-roboto">Contact Me</h1>
      <div className="flex  w-full ">
        <div className="items-center justify-center flex flex-col w-full max-w-4xl p-8 mt-2 space-y-6 rounded-lg shadow-lg  bg-c6 ring-1 ring-slate-700  md:flex-row md:space-x-2 md:space-y-0">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-wide text-white ">
                Get In Touch
              </h1>
              <p className="pt-2 text-sm text-white ">
                Feel free to reach out for collaboration, project inquiries,
                career opportunities or even just to connect and share ideas!
              </p>
            </div>

            <div className="flex flex-col pt-5 space-y-4">
              <div className="inline-flex items-center space-x-2 text-white ">
                <i class="fa-solid fa-envelope"></i>
                <span /> Sandaruwanr57@gmail.com
              </div>
              <div className="inline-flex items-center space-x-2 text-white ">
                <i class="fa-solid fa-phone"></i>
                <span /> 077 294 8708
              </div>

              <div className="inline-flex items-center space-x-2 text-white ">
                <i class="fa-solid fa-location-dot"></i>
                <span /> No.125 Dambagahapitiya Kahataliyadda
              </div>
            </div>

            <div className="flex mt-5 space-x-4 text-xl text-white ">
              <a href="www.facebook.com">
                <i class="fa-brands fa-linkedin hover:"></i>
              </a>
              <a href="www.facebook.com">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="www.facebook.com">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="www.facebook.com">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>

          <div className="p-8 bg-c3 shadow-lg rounded-xl md:mr-30 ring-1 ring-slate-700">
            <h1 className="text-white mb-8 text-center text-3xl">
              Say Something
            </h1>
            <form
              onSubmit={onSubmit}
              className="flex flex-col space-y-4 md:w-80"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-slate-700"
              />

              <input
                type="text"
                name="email"
                required
                placeholder="Your e-mail"
                className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-slate-700 "
              />

              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-slate-700 "
              />

              <button className="px-4 py-2 rounded-lg bg-c4 mt-10 text-white w-fit ">
                Send message
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
