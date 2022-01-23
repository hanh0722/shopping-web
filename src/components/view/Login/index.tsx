import styles from "./styles.module.scss";
import { Input } from "../..";
import {
  isValidEmail,
  isValidLength,
  isValidPassword,
  isValidPhone,
} from "../../../utils/input";

const Login = () => {
  return (
    <form
      className={`flex flex-col items-center justify-between ${styles.form}`}
    >
      <h3 className="text-center">Đăng ký</h3>
      <div className="w-full">
        <Input
          validate
          validateInput={(value) => isValidLength(value, 1)}
          className="w-full mb-3"
          id="username"
          type="text"
          placeholder="Tên người dùng"
          message="Tên người dùng không hợp lệ"
        >
          <i className="far fa-signature"></i>
        </Input>
        <Input
          validate
          validateInput={(value) =>
            isValidLength(value, 1) && !!isValidPassword(value)
          }
          className="w-full mb-3"
          id="password"
          type="password"
          placeholder="Password..."
          message="Mật khẩu tối thiểu 8 ký tự, chứa ít nhất 1 chữ cái thường, 1 chữ cái in hoa và 1 số từ [0-9]"
        >
          <i className="far fa-lock"></i>
        </Input>
        <Input
          validate
          validateInput={(value) =>
            isValidLength(value, 1) && isValidEmail(value)
          }
          className="w-full mb-3"
          id="email"
          placeholder="Email..."
          message="Email không hợp lệ"
        >
          <i className="fal fa-envelope"></i>
        </Input>
        <Input
          validate
          validateInput={(value) =>
            isValidLength(value, 1) && isValidPhone(value)
          }
          message="Số điện thoại không hợp lệ"
          placeholder="Số điện thoại..."
          className="w-full"
        >
          <i className="far fa-mobile-android"></i>
        </Input>
      </div>
      <div className={styles.button}>
        <button>Đăng ký ngay</button>  
      </div>
    </form>
  );
};

export default Login;
