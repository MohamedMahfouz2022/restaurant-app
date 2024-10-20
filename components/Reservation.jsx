"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variants";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <section
      className="xl:my-32 xl:h-[760px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col xl:justify-end xl:items-end"
      id="reservation"
    >
      <motion.div
        className="bg-black w-full xl:max-w-[860px] min-h-[500] p-10 xl:p-12 xl:mb-8"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="text-white mb-9 capitalize">Book a table</h2>
        <ReservationForm />
      </motion.div>
    </section>
  );
};

export default Reservation;
