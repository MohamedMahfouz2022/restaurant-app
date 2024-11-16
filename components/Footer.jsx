"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/variants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      className="bg-footer bg-cover bg-no-repeat text-white pt-16"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
    >
      <div className="container mx-0">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/logo.svg" width={90} height={36} alt="" />
            </Link>
          </div>
          {/* grid items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* blog */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h4 className="font-semibold mb-5">Blog</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">
                    Sit pellentesque neque egestas quis dolor, sit
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Tempor, volutpat nulla sed posuere orci ac diam integer
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Ultrices consectetur orci ultrices viverra mauris laoreet
                    tincidunt at
                  </Link>
                </li>
              </ul>
            </motion.div>
            {/* item */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h4 className="font-semibold mb-5">New Item</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">
                    Sit pellentesque neque egestas quis dolor, sit
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Tempor, volutpat nulla sed posuere orci ac diam integer
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Ultrices consectetur orci ultrices viverra mauris laoreet
                    tincidunt at
                  </Link>
                </li>
              </ul>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <h4 className="font-semibold mb-5">Socials</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">Youtube</Link>
                </li>
                <li>
                  <Link href="/">Facebook</Link>
                </li>
                <li>
                  <Link href="/">Instagram</Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        {/* copyright text */}
        <div className="py-4 border-t border-white/10">
          <p className="text-white/60 text-center text-sm">
            Copyright &copy; W'Food 2024
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
