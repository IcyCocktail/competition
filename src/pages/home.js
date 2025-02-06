import React from "react";
import { Link } from "react-router-dom";
import DateCard from "../assets/dates.js"
import Countdown from "../assets/countdown.js";
import "../assets/styles.css";
import { motion } from 'framer-motion';
import { fadeIn, containerVariants } from "../assets/animations.js"

function Home() {

    return (
        <>

            <section className="about-comp">

                <h2><span>نبذة عن </span>المسابقة:</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum atque porro repellendus, optio
                    cum,
                    quas maxime at aspernatur corrupti ad pariatur saepe recusandae exercitationem vero mollitia, laudantium
                    officiis ipsum unde omnis corporis. Ex iure rem doloremque minus. Quae, error itaque? Possimus error
                    magnam... <Link to="/about">انقر لقراءة المزيد</Link></p>
            </section>

            <section className="dates">

                <h2><span>التواريخ</span> المهمة</h2>

                <motion.div
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                >

                    <motion.div
                    variants={fadeIn}
                    >
                        <DateCard
                            day="8"
                            month="10"
                            year="1446"
                            event="بداية الترشيح"
                        />
                    </motion.div>
                    
                    <motion.div
                    variants={fadeIn}
                    >
                        <DateCard
                            day="12"
                            month="10"
                            year="1446"
                            event="نهاية الترشيح"
                        />
                    </motion.div>

                    <motion.div
                    variants={fadeIn}
                    >
                        <DateCard
                            day="22"
                            month="10"
                            year="1446"
                            event="بداية المسابقة"
                        />
                    </motion.div>

                    <motion.div
                    variants={fadeIn}
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

                <h2>رشِّح طلابك</h2>

                <div className="buttons">
                    <button className="girls">
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
                    </button>

                    <button className="boys">
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
                    </button>
                </div>

                <>
                    <Countdown />
                </>

            </section>
        </>

    );
};

export default Home;