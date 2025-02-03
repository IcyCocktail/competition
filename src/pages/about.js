import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import SecCard from "../assets/section-cards";

function About() {

    return (
        <>

            <section className="about-comp" id="about1">

                <h2><span>نبذة عن </span>المسابقة:</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum atque porro repellendus, optio
                    cum,
                    quas maxime at aspernatur corrupti ad pariatur saepe recusandae exercitationem vero mollitia, laudantium
                    officiis ipsum unde omnis corporis. Ex iure rem doloremque minus. Quae, error itaque? Possimus error
                    magnam
                    ducimus beatae, sint in neque placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident
                    autem enim ex sunt harum illo obcaecati molestiae reiciendis ipsam quisquam, nostrum cupiditate in,
                    velit
                    rem laboriosam explicabo repellendus debitis sit! Eaque ea velit modi rerum voluptatum consequatur,
                    fugit
                    sit! Rem esse quis atque labore delectus ipsum cum mollitia, non error?</p>
            </section>

            <section className="comp-terms">

                <h2><span>شروط</span> المشاركة:</h2>

                <ol>
                    <li>أن يكون المتسابق/ة من المستفيدين في الجهات التعليمية لجمعية تعلَم. </li>
                    <li>أن يكون المتسابق/ة قد مضى عليه فصل دراسي في الجهات التعليمية لجمعية تعلَم.</li>
                    <li>أن يكون المتسابق/ة متقن للفرع المشارك فيه.</li>
                    <li>لا يحق للمتسابق/ة الاشتراك في فرعين للسنة الواحدة.</li>
                    <li>لا يحق لمعلمي الجهات التعليمية المشاركة في المسابقة.</li>
                    <li>يحق للمتسابق/ة الفائز أن يشارك في الأعوام القادمة بفرع أعلى وليس أقل من الفرع الذي فاز فيه.</li>
                    <li>يحق للمتسابق/ة الذي ترشح للتصفيات النهائية ولم يفز ،المشاركة العام القادم في الفرع نفسه.</li>
                    <li>لا يحق للمتسابق/ة الفائز في المسابقات المحلية والدولية أن يشارك في نفس الفرع الذي فاز فيه، ويحق له
                        المشاركة بفرع أعلى.</li>
                    <li>يحق للمتسابق/ة الذي ترشح للتصفيات النهائية في المسابقات المحلية أو الدولية ولم يفز أن يترشح لمسابقة
                        تعلَم في نفس الفرع.</li>
                    <li>أن يوافق المتسابق/ة على المشاركة في أي من المسابقات المحلية أو الدولية التي يرشح لها من قبل الجمعية.
                    </li>
                </ol>

            </section>

            <section className="comp-prize">

                <h2><span>جوائز</span> المسابقة:</h2>

                <table>
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
                </table>

            </section>

            <section className="sections" id="sections">

                <h2><span>فروع</span> المسابقة:</h2>

                <div className="sections-card">

                    <div>
                        <SecCard
                            sec="الفرع الأول"
                            details="ثلاثون جزءًا، مع تفسير كلمات سورة النور"
                        />
                    </div>
                    <div>
                        <SecCard
                            sec="الفرع الثاني"
                            details='من الجزء الحادي عشر (سورة التوبة آية ٩٣) إلى نهاية الجزء الثلاثين (آخر
                                    سورة الناس)، وتفسير كلمات سورة يس'
                        />
                    </div>
                    <div>
                        <SecCard
                            sec='الفرع الثالث'
                            details='من الجزء الحادي والعشرين (سورة العنكبوت آية ٤٦) إلى نهاية الجزء الثلاثين
                                    (آخر سورة الناس)، وتفسير كلمات سورة الحجرات'
                        />
                    </div>
                    <div>
                        <SecCard
                            sec='الفرع الرابع'
                            details='الخمسة أجزاء الأخيرة (من أول سورة الأحقاف) إلى (آخر سورة الناس)، مع
                                    تفسير كلمات جزء عم'
                        />
                    </div>
                    <div>
                        <SecCard
                            sec='الفرع الخامس'
                            details='حفظ جزء عم (خاص بالمستفيدين دون سن السابعة)'
                        />
                    </div>

                </div>

            </section>

        </>
    )

}

export default About;