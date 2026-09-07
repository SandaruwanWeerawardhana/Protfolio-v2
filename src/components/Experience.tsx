import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/*================================ Education =============================================*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center mb-6">
              <GraduationCap
                className="w-6 h-6 text-primary-400 mr-3"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold text-white">
                Education
              </h3>
            </div>
            <SpotlightCard
              className="glass-card p-8"
              spotlightColor="rgba(100, 121, 167, 0.15)"
            >
              <div className="flex-1 mt-5">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Bachelor of Information Technology "(UG)"
                </h4>
                <p className="text-gray-400 mb-0">
                  2025 - Present
                </p>
                <p className="text-gray-400 mb-4">
                  University of Moratuwa
                </p>
                {/* <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Relevant Coursework:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                </ul> */}
              </div>
              <hr className="border-white/10 my-6" />
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Diploma in Software Engineering
                </h4>
                <p className="text-gray-400 mb-4">
                  2024 - 2025 <br />
                  Institute of Computer Engineering Technology (iCET)

                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Spring Boot</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Angular</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Version Control Tool</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>MySQL</span>
                  </li>
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Hibernate</span>
                  </li>
                </ul>
              </div>
              <hr className="border-white/10 my-6" />
              <div className="flex-1 mt-5">
                <h4 className="text-xl font-semibold text-white mb-2">
                  GCE A/L
                </h4>
                <p className="text-gray-400 mb-0">
                  2021-2024
                </p>
                <p className="text-gray-400 mb-4">
                  Mihindu Central College, Agalawatta
                </p>
                {/* <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Relevant Coursework:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                </ul> */}
              </div>

              <hr className="border-white/10 my-6" />
              <div className="flex-1 mt-5">
                <h4 className="text-xl font-semibold text-white mb-2">
                  GCE O/L
                </h4>
                <p className="text-gray-400 mb-0">
                  2015-2020
                </p>
                <p className="text-gray-400 mb-4">
                  Meril Kariyawasam Central College, Meegahathanna
                </p>
                {/* <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Relevant Coursework:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span
                      className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                </ul> */}
              </div>
            </SpotlightCard>
          </motion.div>

          {/*================================= Certifications ================================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award
                className="w-6 h-6 text-primary-400 mr-3"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold text-white">
                Certifications
              </h3>
            </div>
            <SpotlightCard
              className="glass-card p-8"
              spotlightColor="rgba(70, 199, 255, 0.15)"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg shadow-sm mr-4 border border-white/5">
                    <img
                      src="https://www.google.com/imgres?q=Micro%20Front-End%20Architecture%20with%20React&imgurl=https%3A%2F%2Fb4130876.smushcdn.com%2F4130876%2Fwp-content%2Fuploads%2F2024%2F02%2FUnderstand-Micro-frontend-Architecture.webp%3Flossy%3D2%26strip%3D1%26webp%3D1&imgrefurl=https%3A%2F%2Feluminoustechnologies.com%2Fblog%2Freact-micro-frontend-guide%2F&docid=sJPGxhQidDMXRM&tbnid=A28aWGo_Eb9jtM&vet=12ahUKEwjXmdGmh6WUAxVx3TgGHZn2G6QQnPAOegQIOBAB..i&w=908&h=441&hcb=2&ved=2ahUKEwjXmdGmh6WUAxVx3TgGHZn2G6QQnPAOegQIOBAB"
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Micro Front-End Architecture with React
                    </h4>
                    <p className="text-gray-400 text-sm">
                      <a
                        href="https://www.linkedin.com/learning/certificates/a3dabe725483f9acdd3739b87b7e7264152284cdab15d2819886b6d441a0a03a?trk=share_certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 hover:underline inline-flex items-center"
                      >
                        Micro Front-End Architecture <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg shadow-sm mr-4 border border-white/5">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
                      alt=""
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Introduction to Containerization
                    </h4>
                    <p className="text-gray-400 text-sm">
                      <a
                        href="https://1drv.ms/b/c/7096e17f88b7be67/EVzBs3pDmvVKrpxusRkrV_MBIhuHNxSDhXCfOYxnSFqcAA?e=Hl2Mre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 hover:underline inline-flex items-center"
                      >
                        CoDeKu DevOps Academy
                        <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg shadow-sm mr-4 border border-white/5">
                    <img
                      src="https://png.pngtree.com/element_our/sm/20180410/sm_5acd1797b5783.jpg"
                      alt="Logo"
                      className="w-10 h-10 object-contain rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Cloud Computing for Beginners
                    </h4>
                    <p className="text-gray-400 text-sm">
                      <a
                        href="https://1drv.ms/b/c/7096e17f88b7be67/EYnPRJ61OZVPt3rt95WXgmkBoy5scXFBrnpb1yk7V1VaWg?e=jDskgt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 hover:underline inline-flex items-center"
                      >
                        CoDeKu DevOps Academy
                        <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg shadow-sm mr-4 border border-white/5">
                    <img
                      src="https://cdn1.vectorstock.com/i/1000x1000/77/50/sql-database-icon-logo-design-ui-or-ux-app-vector-17507750.jpg"
                      alt="Logo"
                      className="w-10 h-10 object-contain rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      SQL Basic
                    </h4>
                    <p className="text-gray-400 text-sm">
                      <a
                        href="https://www.hackerrank.com/certificates/iframe/f96297e0c07e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 hover:underline inline-flex items-center"
                      >
                        HackerRank
                        <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
