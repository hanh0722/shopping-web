import { FC } from "react";
import { ErrorResponse } from "../../types/Error";
import { convertStringToCapitalize } from "../../utils/string";
import styles from './styles.module.scss';
const ErrorResponseService: FC<{errorObject: ErrorResponse}> = (props) => {
    console.log(convertStringToCapitalize(props.errorObject.message));
    return(
        <div className={styles.error}>
            <p className="text-center">{props.errorObject?.message || "Có lỗi xảy ra, xin thử lại sau"}</p>
        </div>
    )
}

export default ErrorResponseService;