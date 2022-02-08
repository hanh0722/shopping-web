import { Image, Overlay, Button, Grid } from "..";
import styles from './styles.module.scss';
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../constants/routes";
import { FC } from "react";
const SuccessAuth: FC<{condition: boolean}> = (props) => {
    return(
        <>
            <Overlay conditionActive={props.condition} isClickOutSide initialValue={false}>
                <Grid className={`text-center ${styles.container}`}>
                    <Image src="/image/success-icon.svg"/>
                    <h3>Xác minh thành công!</h3>
                    <p>Bạn đã đăng ký thành công tài khoản Tiki của mình.</p>
                    <Link to={HOME_PAGE}><Button className={styles.button}>Trải nghiệm ngay!</Button></Link>
                </Grid>
            </Overlay>
        </>
    )
}

export default SuccessAuth;