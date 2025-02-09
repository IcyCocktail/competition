import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import SecCard from "../assets/section-cards";
import { motion } from 'framer-motion';
import { slideRight, slideLeft, slideUp, textReveal, containerVariants, backClr } from "../assets/animations.js"

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum atque porro repellendus, optio cum, quas maxime at aspernatur corrupti ad pariatur saepe recusandae exercitationem vero mollitia, laudantium officiis ipsum unde omnis corporis. Ex iure rem doloremque minus. Quae, error itaque? Possimus error magnam ducimus beatae, sint in neque placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem enim ex sunt harum illo obcaecati molestiae reiciendis ipsam quisquam, nostrum cupiditate in, velit rem laboriosam explicabo repellendus debitis sit! Eaque ea velit modi rerum voluptatum consequatur, fugit sit! Rem esse quis atque labore delectus ipsum cum mollitia, non error? ";
const words = text.split(" "); // Split into words
function About() {

    return (
        <>

            <section className="about-comp" id="about1">

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
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{ display: "inline-block", marginRight: "5px" }} // Allow animation
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.p>
            </section>

            <section className="comp-terms">

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={slideUp}><span>شروط</span> المشاركة:</motion.h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <ol>
                        <motion.li
                            variants={slideUp}
                        >أن يكون المتسابق/ة من المستفيدين في الجهات التعليمية لجمعية تعلَم. </motion.li>
                        <motion.li
                            variants={slideUp}
                        >أن يكون المتسابق/ة قد مضى عليه فصل دراسي في الجهات التعليمية لجمعية تعلَم.</motion.li>
                        <motion.li
                            variants={slideUp}
                        >أن يكون المتسابق/ة متقن للفرع المشارك فيه.</motion.li>
                        <motion.li
                            variants={slideUp}
                        >لا يحق للمتسابق/ة الاشتراك في فرعين للسنة الواحدة.</motion.li>
                        <motion.li
                            variants={slideUp}
                        >لا يحق لمعلمي الجهات التعليمية المشاركة في المسابقة.</motion.li>
                        <motion.li
                            variants={slideUp}
                        >يحق للمتسابق/ة الفائز أن يشارك في الأعوام القادمة بفرع أعلى وليس أقل من الفرع الذي فاز فيه.</motion.li>
                        <motion.li
                            variants={slideUp}
                        >يحق للمتسابق/ة الذي ترشح للتصفيات النهائية ولم يفز ،المشاركة العام القادم في الفرع نفسه.</motion.li>
                        <motion.li
                            variants={slideUp}
                        >لا يحق للمتسابق/ة الفائز في المسابقات المحلية والدولية أن يشارك في نفس الفرع الذي فاز فيه، ويحق له
                            المشاركة بفرع أعلى.</motion.li>
                        <motion.li
                            variants={slideUp}
                        >يحق للمتسابق/ة الذي ترشح للتصفيات النهائية في المسابقات المحلية أو الدولية يفز أن يترشح لمسابقة
                            تعلَم في نفس الفرع.</motion.li>
                        <motion.li
                            variants={slideUp}
                        >أن يوافق المتسابق/ة على المشاركة في أي من المسابقات المحلية أو الدولية التي يرشح لها من قبل الجمعية.
                        </motion.li>
                    </ol>
                </motion.div>

            </section>

            <section className="comp-prize">

                <motion.div
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                >
                    <motion.h2 variants={slideUp}><span>جوائز</span> المسابقة:</motion.h2>
                </motion.div>

                <motion.div
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                >
                    <motion.table variants={slideUp}>
                        <thead>
                            <tr>
                                <th>الفرع</th>
                                <th>المركز الأول</th>
                                <th>المركز الثاني</th>
                                <th>المركز الثالث</th>
                                <th>المركز الرابع</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>الفرع الأول</td>
                            <td>10000 ريال</td>
                            <td>8000 ريال</td>
                            <td>6000 ريال</td>
                            <td>5000 ريال</td>
                        </tr>
                        <tr>
                            <td>الفرع الثاني</td>
                            <td>8000 ريال</td>
                            <td>6000 ريال</td>
                            <td>5000 ريال</td>
                            <td>4000 ريال</td>
                        </tr>
                        <tr>
                            <td>الفرع الثالث</td>
                            <td>6000 ريال</td>
                            <td>5000 ريال</td>
                            <td>4000 ريال</td>
                            <td>3000 ريال</td>
                        </tr>
                        <tr>
                            <td>الفرع الرابع</td>
                            <td>5000 ريال</td>
                            <td>4000 ريال</td>
                            <td>3000 ريال</td>
                            <td>2500 ريال</td>
                        </tr>
                        <tr>
                            <td>الفرع الخامس</td>
                            <td>3000 ريال</td>
                            <td>2000 ريال</td>
                            <td>1500 ريال</td>
                            <td>1000 ريال</td>
                        </tr>
                    </motion.table>
                </motion.div>

            </section>

            <section className="sections" id="sections">

                <motion.div
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                >
                    <motion.h2 variants={slideUp}><span>فروع</span> المسابقة:</motion.h2>
                </motion.div>

                <motion.div className="sections-card"
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                >

                    <motion.div variants={slideUp}>
                        <SecCard
                            sec="الفرع الأول"
                            details="ثلاثون جزءًا، مع تفسير كلمات سورة النور"
                        />
                    </motion.div>
                    <motion.div variants={slideUp}>
                        <SecCard
                            sec="الفرع الثاني"
                            details='من الجزء الحادي عشر (سورة التوبة آية ٩٣) إلى نهاية الجزء الثلاثين (آخر
                                    سورة الناس)، وتفسير كلمات سورة يس'
                        />
                    </motion.div>
                    <motion.div variants={slideUp}>
                        <SecCard
                            sec='الفرع الثالث'
                            details='من الجزء الحادي والعشرين (سورة العنكبوت آية ٤٦) إلى نهاية الجزء الثلاثين
                                    (آخر سورة الناس)، وتفسير كلمات سورة الحجرات'
                        />
                    </motion.div>
                    <motion.div variants={slideUp}>
                        <SecCard
                            sec='الفرع الرابع'
                            details='الخمسة أجزاء الأخيرة (من أول سورة الأحقاف) إلى (آخر سورة الناس)، مع
                                    تفسير كلمات جزء عم'
                        />
                    </motion.div>
                    <motion.div variants={slideUp}>
                        <SecCard
                            sec='الفرع الخامس'
                            details='حفظ جزء عم (خاص بالمستفيدين دون سن السابعة)'
                        />
                    </motion.div>

                </motion.div>

            </section>

        </>
    )

}

export default About;