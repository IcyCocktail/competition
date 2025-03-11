import { React, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DateCard from "../assets/dates.js"
import Countdown from "../assets/countdown.js";
import "../assets/styles.css";
import { motion } from 'framer-motion';
import { slideRight, slideLeft, slideUp, textReveal, containerVariants, backClr, lineVariants } from "../assets/animations.js"

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const target = document.getElementById(location.hash.substring(1));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const text = [
        "الحمد لله وحده، والصلاة والسلام على من لا نبي بعده، أما بعد:",
        "فإن جمعية المركز الخيري لتعليم القران الكريم وعلومه ممثلةً بإدارة الشؤون التعليمية، تتشرف بإقامة المسابقاتِ القرآنيةَ للجهات التابعة لها، وتدعمها خدمة لكتاب الله... "
    ]; // Keep text as an array of lines instead of splitting from a string

    return (

        <>
            <body className="home-body">
                <section className="about-comp">
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.h2 variants={slideUp}>
                            <span>نبذة عن </span>المسابقة:
                        </motion.h2>
                    </motion.div>

                    {/* Animated Paragraph with Line Breaks */}
                    <motion.p
                        variants={containerVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        style={{ display: "flex", flexDirection: "column", gap: "10px" }} // Ensure proper spacing
                    >
                        {text.map((line, lineIndex) => {
                            const words = line.split(" ");
                            return (
                                <div key={lineIndex} style={{ display: "flex", flexWrap: "wrap" }}>
                                    {words.map((word, wordIndex) => (
                                        <motion.span
                                            key={`${lineIndex}-${wordIndex}`}
                                            custom={wordIndex + lineIndex * words.length} // Ensure sequential animation
                                            variants={textReveal}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            style={{ display: "inline-block", marginRight: "5px" }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}

                                    {/* Append the link at the end of the 3rd line */}
                                    {lineIndex === 1 && (
                                        <motion.span
                                            custom={words.length + lineIndex * words.length} // Delay link animation
                                            variants={textReveal}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            style={{ display: "inline-block", marginLeft: "5px" }}
                                        >
                                            <Link to="/about#about-comp">انقر لقراءة المزيد</Link>
                                        </motion.span>
                                    )}
                                </div>
                            );
                        })}
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
            </body>
            
        </>

    );
};

export default Home;