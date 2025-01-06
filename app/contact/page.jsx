<<<<<<< HEAD
=======
// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "(+94) 711 122 833",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "chandu.rathnayake01@gmail.com",
//   },
//   {
//     icon: <FaMapMarkedAlt />,
//     title: "Address",
//     description: "243/3/1, Batapotha, Madelgamuwa, Gampaha",
//   },
// ];

// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="text-white py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[30px]">
//           <div className="xl:w-[54%] order-2 xl:order-none">
//             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
//               <h3 className="text-4xl text-fuchsia-500">Let's work together</h3>
//               <p className="text-white/60">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Quaerat commodi quae accusamus dicta excepturi.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input type="firstname" placeholder="First Name" />
//                 <Input type="lastname" placeholder="Last Name" />
//                 <Input type="email" placeholder="Email Address" />
//                 <Input type="phone" placeholder="Phone Number" />
//               </div>
//               <Textarea
//                 className="h-[200px]"
//                 placeholder="Type your message here."
//               />
//               <Button size="md" className="max-w-40">
//                 Send Message
//               </Button>
//             </form>
//           </div>
//           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => {
//                 return (
//                   <li key={index} className="flex items-center gap-6">
//                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-fuchsia-500 rounded-md flex items-center justify-center">
//                       <div className="text-[28px]">{item.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white/60">{item.title}</p>
//                       <h3 className="text-white">{item.description}</h3>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;


"use client";
>>>>>>> 0c8240d22d68f10a6dc015f73fda8534360357d1
// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "(+94) 711 122 833",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "chandu.rathnayake01@gmail.com",
//   },
//   {
//     icon: <FaMapMarkedAlt />,
//     title: "Address",
//     description: "243/3/1, Batapotha, Madelgamuwa, Gampaha",
//   },
// ];

// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="text-white py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[30px]">
//           <div className="xl:w-[54%] order-2 xl:order-none">
//             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
//               <h3 className="text-4xl text-fuchsia-500">Let's work together</h3>
//               <p className="text-white/60">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Quaerat commodi quae accusamus dicta excepturi.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input type="firstname" placeholder="First Name" />
//                 <Input type="lastname" placeholder="Last Name" />
//                 <Input type="email" placeholder="Email Address" />
//                 <Input type="phone" placeholder="Phone Number" />
//               </div>
//               <Textarea
//                 className="h-[200px]"
//                 placeholder="Type your message here."
//               />
//               <Button size="md" className="max-w-40">
//                 Send Message
//               </Button>
//             </form>
//           </div>
//           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => {
//                 return (
//                   <li key={index} className="flex items-center gap-6">
//                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-fuchsia-500 rounded-md flex items-center justify-center">
//                       <div className="text-[28px]">{item.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white/60">{item.title}</p>
//                       <h3 className="text-white">{item.description}</h3>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;


"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 711 122 833",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "chandu.rathnayake01@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "243/3/1, Batapotha, Madelgamuwa, Gampaha",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Send email with EmailJS
    emailjs
      .send(
        "service_42phq0o", // Your EmailJS service ID
        "template_6noe88a", // Your EmailJS template ID
        formData,
        "zMp4WGpKjlzq5LbYF" // Your EmailJS user ID
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setIsSubmitting(false);
        },
        (error) => {
          setStatus("Error sending message.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="text-white py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-fuchsia-500">Let's work together</h3>
              <p className="text-white/60">
              Thank you for visiting my portfolio! If you have any questions, collaboration opportunities, or just want to connect, feel free to reach out. I look forward to hearing from you!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {status && (
              <div className="mt-4 text-white">
                <p>{status}</p>
              </div>
            )}
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-fuchsia-500 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;