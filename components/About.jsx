"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variants";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
    >
      {/* text */}
      <motion.div
        className="xl:pl-[100px]"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="mb-8">Let's Talk About W'Food</h1>
        <p className="mb-8">
          Mauris nam et ipsum ipsum in. Risus nullam in sit mi est justo at
          fringilla. Consequat ac fringilla quis enim, sit ipsum. Laoreet eget
          metus morbi convallis gravida elementum facilisis. Neque enim quis
          fusce amet. Pellentesque netus vel eu
        </p>
        <p className="mb-10">
          posuere ultrices facilisi. Senectus velit lobortis velit arcu varius
          lectus mattis. Dictum aenean duis aliquet Tortor purus egestas urna
          scelerisque vel ornare lectus ultricies. Nisi, eu ut ultricies enim
          enim amet porttitor. Volutpat ac tellus volutpat eget volutpat orci
          enim, ut a. Turpis adipiscing eleifend dignissim viverra euismod
          ultrices.
        </p>
        <Button>Read more</Button>
      </motion.div>
      {/* img */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={700}
          height={770}
          alt=""
          className="hidden xl:flex "
        />
      </motion.div>
    </section>
  );
};

export default About;
