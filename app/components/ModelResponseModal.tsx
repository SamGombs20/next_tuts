import Image from "next/image";
import style from "../styles/detail_modal.module.css"
import { FC } from "react";

interface Props{
    recommendation:string
    prediction:string
    close:()=>void
}

export const ResponseModal:FC<Props> = ({prediction, recommendation, close}) => {

    return (
        <div className={style.response_container}>
            <div className={style.title_container}>
                <Image
                    src="/result.webp"
                    loading="eager"
                    alt=""
                    width={20}
                    height={20}
                    className={style.title_icon}
                />
                <p className={`${style.title_text} gradient-text`}>Prediction Results</p>
            </div>

            <div className={style.main_content_container}>
                <div className={style.content_container}>
                <p className={style.content_title}>Obesity level</p>
                <p className={style.content}>The model predicts your obesity level to be <strong>{prediction}</strong></p>
            </div>
            <div className={style.content_container}>
                <p className={style.content_title}>Recommendation</p>
                <p className={style.content}>{recommendation}</p>
            </div>
            </div>
            <div className={style.form_buttons}>
                <button className={`${style.close_btn} btn`} onClick={close}>Close</button>
            </div>
        </div>
    );

}