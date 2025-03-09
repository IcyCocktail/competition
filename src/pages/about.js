import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import SecCard from "../assets/section-cards";
import Branches from "../assets/branches";
import { motion } from 'framer-motion';
import { slideRight, slideLeft, slideUp, textReveal, containerVariants, backClr } from "../assets/animations.js"

function About() {
    const text = [
        "الحمد لله وحده، والصلاة والسلام على من لا نبي بعده، أما بعد:",
        "فإن جمعية المركز الخيري لتعليم القران الكريم وعلومه ممثلةً بإدارة الشؤون التعليمية، تتشرف بإقامة المسابقاتِ القرآنيةَ للجهات التابعة لها، وتدعمها خدمة لكتاب الله وعناية به وتعزيز مكانته في نفوس الناشئة فتقيم المسابقات السنوية لحفظ القرآن الكريم وتلاوته وتفسيره للبنين والبنات. وهذه المسابقة القرآنية التي تقيمها الجمعية تهدف من خلالها إلى تشجيع النشء على حفظ كتاب الله، وإتقان تلاوته وفهم معانيه، وذلك في إطار أجواء روحانية وتنافسية محفزة، كما أنها تشجع على ختم حفظ كتاب الله وذلك بتسلسل فروعها، وتهيئة المشاركين للمشاركة في مسابقات أعلى محلية ودولية. وقد شكلت إدارة الشؤون التعليمية لجاناً إشرافية للمسابقة، مع بقاء الدور الأساس لمديري ومديرات الجهات التعليمية والمشرفين والمشرفات والمعلمين والمعلمات في تفعيل المسابقة بين المستفيدين من الرجال والنساء، إلى جانب تشكيل فرق للتحكيم من المختصين والمختصات، وإجراء عمليات الفرز والتحكيم وفق ضوابط ومعايير موضوعية ومحددة."
    ];

    let wordCounter = 0; // Track the order of words globally

    return (
        <body className="about-body">
            <section className="about-comp">
                <motion.div variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true }} >
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
                                {words.map((word, wordIndex) => {
                                    wordCounter++; // Increment for each word globally
                                    return (
                                        <motion.span
                                            key={`${lineIndex}-${wordIndex}`}
                                            custom={wordCounter} // Ensures global sequential animation
                                            variants={textReveal}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            style={{ display: "inline-block", marginRight: "5px" }}
                                        >
                                            {word}
                                        </motion.span>
                                    );
                                })}
                            </div>
                        );
                    })}
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

                <Branches />

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

        </body>
    )

}

export default About;