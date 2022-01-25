import React, { FormEvent } from "react";
import FormLayout from "../FormLayout";
import styles from './styles.module.scss';

const LoginForm = () => {
    const submitFormHandler = (event: FormEvent) => {
        event.preventDefault();
    }
    return(
        <FormLayout onSubmitHandler={submitFormHandler} isAllowRollBack isShowLogo >
            <div className={styles.form}>
                
            </div>
        </FormLayout>
    )
}

export default LoginForm;