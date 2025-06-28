import { useRef, useState } from "react";
import stylesbg from "../styles/background.module.css";
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(
        "service_8kodu14",
        "template_isgkobu",
        form.current,
        "i4xL3wKbhCajbjElb"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent!", {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.error("Email failed:", error.text);
          toast.error("Failed to send message.", {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className={`flex justify-around md:px-20 px-8 font-montserrat h-[100vh] ${stylesbg.anibg} items-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.5, ease: "easeIn" },
        }}
        className="bg-black/40 backdrop-blur-2xl w-[25em] min-h-[30em] p-6 rounded-xl mt-20 gap-6 flex flex-col"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-appricon-500 via-pink-800 to-cherry-500">
          Get me hired
        </h1>

        <p className="text-gray-400 text-sm">You can directly email me from here.</p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="relative flex items-center">
            <img width={26} className="absolute opacity-80 top-[19%] left-[1%]" src="/person.svg" alt="" />
            <input
              name="name"
              className="px-2 w-full py-4 pl-10 outline-0 bg-gray-950/30 rounded-xl"
              type="text"
              placeholder="Username"
              required
              disabled={isSending}
            />
          </div>
          <div className="relative flex items-center">
            <img width={26} className="absolute opacity-80 top-[19%] left-[1%]" src="/email.svg" alt="" />
            <input
              name="email"
              className="px-2 w-full py-4 pl-10 outline-0 bg-gray-950/30 rounded-xl"
              type="email"
              placeholder="Your Email"
              required
              disabled={isSending}
            />
          </div>
          <div className="relative flex items-center">
            <img width={26} className="absolute opacity-80 top-[8%] left-[2%]" src="/comment.svg" alt="" />
            <textarea
              name="message"
              className="px-2 w-full h-[12em] max-h-[12em] py-4 pl-10 outline-0 bg-gray-950/30 rounded-xl"
              placeholder="Enter Message"
              required
              disabled={isSending}
            />
          </div>

          {/* Hidden time field */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <motion.button
            whileHover={{ scale: isSending ? 1 : 1.06 }}
            whileTap={{ scale: isSending ? 1 : 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            type="submit"
            disabled={isSending}
            className={`${
              isSending ? "opacity-70 cursor-not-allowed" : "hover:bg-appricon-600"
            } bg-appricon-500/20 backdrop-blur-2xl text-white py-3 rounded-xl transition-all`}
          >
            {isSending ? "Sending..." : "Submit"}
          </motion.button>
        </form>
      </motion.div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  );
};

export default Contact;

