"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variants";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      className=" bg-hero bg-no-repeat relative xl:bg-cover  xl:h-[750px] py-20 pb-10 xl:py-0 "
      id="home"
    >
      <div className="container mx-auto">
        {/* text & img */}
        <div className="flex xl:h-[700px] items-center xl:mb-[-70px]">
          {/* text */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-left pt-[50px] ">
            <motion.h1
              className="text-white mb-5"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              A taste of local <br /> flavours
            </motion.h1>

            <motion.p
              className="text-white font-semibold mb-5"
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              by: <span className="text-orange">Wildan Wari</span>
            </motion.p>

            <motion.p
              className="text-white mb-10 max-w-lg mx-auto xl:max-w-none xl:mx-0"
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              Posuere amet, sed vitae condimentum accumsan aliquam et, aliquam.
              Tellus in fusce vel gravida lobortis diam dis ut. Bibendum
              senectus urna, in ultricies sed lorem natoque. Risus pharetra
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>Let's eat</Button>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            className=" hidden xl:flex xl:absolute xl:top-[100px] xl:right-0 "
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Image
              src="/hero/plate.png"
              width={650}
              height={550}
              alt=""
              quality={80}
            />
          </motion.div>
        </div>
      </div>
      {/* coffee img */}
      <motion.div
        className="hidden xl:flex xl:relative "
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Image
          src="/hero/coffee.png"
          alt=""
          width={300}
          height={250}
          quality={80}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
