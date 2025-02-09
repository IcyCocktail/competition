import React from "react";
import { Link } from "react-router-dom";
import DateCard from "../assets/dates.js"
import Countdown from "../assets/countdown.js";
import "../assets/styles.css";
import { motion } from 'framer-motion';
import { slideRight, slideLeft, slideUp, textReveal, containerVariants, backClr } from "../assets/animations.js"

function Home() {

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum atque porro repellendus, optio cum, quas maxime at aspernatur corrupti ad pariatur saepe recusandae exercitationem vero mollitia... ";
    const words = text.split(" "); // Split into words

    return (
        <>

            <section className="about-comp">

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={slideUp}><span>نبذة عن </span>المسابقة:</motion.h2>
                </motion.div>

                {/* Animated Paragraph */}
                <motion.p
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    style={{ display: "flex", flexWrap: "wrap" }} // Ensure words wrap properly
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            variants={textReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ display: "inline-block", marginRight: "5px" }} // Allow animation
                        >
                            {word}
                        </motion.span>
                    ))}
                    <motion.span
                        custom={words.length}
                        variants={textReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: "inline-block", marginLeft: "5px" }}
                    >
                        <Link to="/about">انقر لقراءة المزيد</Link>
                    </motion.span>
                </motion.p>

            </section>

            <section className="dates">

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        variants={slideUp}
                    ><span>التواريخ</span> المهمة</motion.h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >

                    <motion.div
                        variants={slideRight}
                    >
                        <DateCard
                            day="8"
                            month="10"
                            year="1446"
                            event="بداية الترشيح"
                        />
                    </motion.div>

                    <motion.div
                        variants={slideRight}
                    >
                        <DateCard
                            day="12"
                            month="10"
                            year="1446"
                            event="نهاية الترشيح"
                        />
                    </motion.div>

                    <motion.div
                        variants={slideRight}
                    >
                        <DateCard
                            day="22"
                            month="10"
                            year="1446"
                            event="بداية المسابقة"
                        />
                    </motion.div>

                    <motion.div
                        variants={slideRight}
                    >
                        <DateCard
                            day="17"
                            month="11"
                            year="1446"
                            event="إعلان النتائج"
                        />
                    </motion.div>

                </motion.div>

            </section>

            <section className="nominating" id="nominating">

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        variants={backClr}
                    >رشِّح طلابك</motion.h2>
                </motion.div>

                <motion.div className="buttons"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.button className="girls"
                    variants={slideRight}
                    >
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                            </path>
                        </svg>
                        <span className="text">بنات</span>
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                            </path>
                        </svg>
                    </motion.button>

                    <motion.button className="boys"
                    variants={slideLeft}
                    >
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                            </path>
                        </svg>
                        <span className="text">بنين</span>
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                            </path>
                        </svg>
                    </motion.button>
                </motion.div>

                <motion.div className="countdown"
                variants={slideUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                >
                    <Countdown />
                </motion.div>

            </section>
        </>

    );
};

export default Home;