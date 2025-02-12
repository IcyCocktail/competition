import React from "react";
import "../assets/styles.css";
import { motion } from 'framer-motion'
import { slideUp, containerVariants } from "../assets/animations";

function SignIn() {
    return (
        <section className="sign-box">
            <motion.div
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.form className="form" variants={slideUp}>
                    <h3>تـسـجـيـــــل الــــــدخـول</h3>
                    <div className="inputGroup">
                        <input type="text" required autoComplete="off" id="username" />
                        <label className="usenm" htmlFor="username">اسم المستخدم</label>
                    </div>
                    <div className="inputGroup">
                        <input type="password" required autoComplete="off" />
                        <label className="pass" htmlFor="username">كلمة المرور</label>
                    </div>
                    <button type="submit">تسجيل الدخول</button>
                </motion.form>
            </motion.div>
        </section>
    )
}

export default SignIn;
