import { Link } from "react-router-dom";
import { Image, SocialLogin } from "../../..";
import { REGISTER } from "../../../../constants/routes";
import FormLayout from "../FormLayout";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../model/store-model";
import { PageFormActions, PAGE_TYPE } from "../../../../store/PageFormSlice";

const BannerSignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const backToSignIn = () => {
      dispatch(PageFormActions.changePageHandler(PAGE_TYPE.SIGN_IN_FORM));
  }
  return (
    <FormLayout isShowLogo>
      <div className={styles.form}>
        <div className={styles.image}>
          <Image src="/image/person-form.svg" />
        </div>
        <div className={styles.options}>
          <SocialLogin
            titleFacebook="Đăng nhập bằng Facebook"
            titleGoogle="Đăng nhập bằng Google"
            className={`grid grid-cols-1 ${styles.socialize}`}
          >
            <div onClick={backToSignIn} className={styles["user-login"]}>
              <Image src="/image/person-icon.svg" />
              <p>Đăng nhập bằng Email/SĐT</p>
            </div>
          </SocialLogin>
          <p className={`text-center ${styles.register}`}>
            Bạn chưa có tài khoản? <Link to={REGISTER}>Đăng ký</Link>
          </p>
          <p className={`text-center ${styles.notify}`}>
            Ứng dụng không truy cập thông tin cá nhân của bạn trên mạng xã hội
          </p>
        </div>
      </div>
    </FormLayout>
  );
};

export default BannerSignIn;
