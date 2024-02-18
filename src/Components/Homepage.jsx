import { motion } from "framer-motion";
import earth from "../images/earth.png";
import leaf from "../images/human.png";
import reward from "../images/reward.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto h-[90vh]">
        <div className="flex flex-col items-center justify-center gap-4 h-full ">
          <motion.div
            variants={{
              initial: {
                opacity: 0,
                scale: 0,
              },
              show: {
                opacity: 1,
                scale: 1,
              },
            }}
            initial="initial"
            animate="show"
            transition={{
              duration: 0.75,
            }}
          >
            <img src={earth} className="w-[120px]" />
          </motion.div>
          <motion.div
            variants={{
              initial: {
                y: 20,
                opacity: 0,
              },
              show: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="initial"
            animate="show"
            transition={{
              duration: 0.75,
            }}
            className="flex flex-col items-center gap-3"
          >
            <div className="text-center">
              <h1 className="text-[40px] font-bold text-green-800">
                Our Mission
              </h1>
              <h1 className="text-[50px] font-bold text-green-800">
                Care For Clean India E-waste Locator
              </h1>
            </div>
            <div className="max-w-3xl text-center my-3">
              <p className="text-gray-600 text-2xl">
                Welcome to the E-Waste Facility Locator Website! Our mission is
                to promote responsible e-waste disposal and environmental
                awareness.Visit our E-Waste Locator to find the nearest e-waste
                stores near you. When you recycle your items with us, you will
                earn rewards for your contribution towards a greener
                environment!
              </p>
            </div>
            <div>
              <motion.button
                whileHover={{
                  scale: 1.11,
                  backgroundColor: "rgb(74 222 128)",
                }}
                className="text-white bg-green-600 p-3 w-full"
              >
                <Link to="recycle">Start Recycling</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Us */}
      <div className="max-w-[1280px] mx-auto h-[60vh]">
        <div className="w-[full] flex items-center justify-evenly p-6">
          <motion.div
            variants={{
              initial: {
                x: -40,
                opacity: 0,
              },
              show: {
                x: 0,
                opacity: 1,
              },
            }}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
            }}
            className="w-[50%] flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-[30px] text-green-600 font-semibold my-4">
              About us
            </h1>
            <p className="text-gray-700 text-xl">
              Our project is an innovative E-Waste Facility Locator Website
              designed to bridge the gap between consumers and e-waste recycling
              facilities. This user-friendly platform not only provides the
              location of the nearest e-waste collection and recycling facility
              but also educates users about the harmful components of their
              e-waste and their potential environmental and health impacts if
              not disposed of correctly Explore our extensive Education section
              to gain insights into responsible e-waste disposal. We provide
              comprehensive resources, including articles and guides, to help
              you understand the environmental impact of e-waste and the
              importance of recycling.
            </p>
          </motion.div>
          <motion.div
            variants={{
              initial: {
                x: 40,
                opacity: 0,
              },
              show: {
                x: 0,
                opacity: 1,
              },
            }}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
            }}
            className="p-4 flex justify-center"
          >
            <img src={leaf} className="w-[300px] h-[300px]" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto h-[60vh]">
        <div className="w-[full] flex items-center justify-evenly p-6">
          <motion.div
            variants={{
              initial: {
                x: -40,
                opacity: 0,
              },
              show: {
                x: 0,
                opacity: 1,
              },
            }}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
            }}
            className="p-4 flex justify-center"
          >
            <img src={reward} className="w-[300px] h-[300px]" />
          </motion.div>
          <motion.div
            variants={{
              initial: {
                x: 40,
                opacity: 0,
              },
              show: {
                x: 0,
                opacity: 1,
              },
            }}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
            }}
            className="w-[50%] flex flex-col items-center justify-center text-center gap-3"
          >
            <h1 className="text-[30px] text-green-600 font-semibold my-4">
              Unlock Rewards for Responsible Disposal
            </h1>
            <p className="text-gray-700 text-xl">
              We believe in recognizing and incentivizing responsible e-waste
              disposal. Our rewards program offers exciting benefits to
              encourage users to participate in our mission. Earn points for
              each proper disposal and unlock exclusive perks.
            </p>
            <button className="text-white bg-green-600 p-3 rounded-sm">
              <Link to="reward">Rewards</Link>
            </button>
          </motion.div>
        </div>
      </div>

      <footer className="bg-green-800">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe our newsletter to get update.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md"
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 bg-black rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Resources
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Support Centers
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Company
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
        </div>
      </footer>
    </>
  );
};

export default Homepage;
