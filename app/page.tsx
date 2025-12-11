'use client'
import style from "./styles/home.module.css"
import { BsPersonCircle } from "react-icons/bs"
export default function Main (){
  const onButtonClick =()=>{
    alert("Button clicked")
  }
  return(
    <div className={style.home_container}>
      <div className={style.intro_main_container}>
        <div className={style.intro_container}>
        <p className={style.intro_text}>Obesi<span>Scan</span> - start your <em><strong>journey</strong></em> to better <em><strong>health</strong></em> today</p>
        <div className={style.check_container}>
          <p className={style.check_title}>Quickly check your obesity level</p>
          <p>We collect anonymous data of your personal, physical, diet and lifestyle information.</p>
          <button onClick={onButtonClick} className={style.check_btn}>Check now!</button>
        </div>
      </div>
      </div>
      <div className={style.how_container}>
        <div className={style.container}>
          <p className={style.title_text}>How it works</p>
          <p>Our model predicts a person's likelihood of being  overweight or obese based on various lifestyle habits, physical characteristics and daily routines.</p>
          <div className={style.how_components_container}>
            <div className={style.how_component}>
              <div className={style.how_content_title}>
                <BsPersonCircle className={style.icon}/>
                <p>Personal and Physical Information</p>
              </div>
              <ul>
                <li><span>Gender & Age</span>: Influence metabolism and body composition.</li>
                <li><span>Height & Weight</span>: Used to calculate BMI, a key weight idicator.</li>
                <li><span>Family History</span>: Genetics may contribute to obesity risks.</li>
              </ul>
            </div>
            <div className={style.how_component}>
              <div className={style.how_content_title}>
                <BsPersonCircle className={style.icon}/>
                <p>Personal and Physical Information</p>
              </div>
              <ul>
                <li><span>Gender & Age</span>: Influence metabolism and body composition.</li>
                <li><span>Height & Weight</span>: Used to calculate BMI, a key weight idicator.</li>
                <li><span>Family History</span>: Genetics may contribute to obesity risks.</li>
              </ul>
            </div>
            <div className={style.how_component}>
              <div className={style.how_content_title}>
                <BsPersonCircle className={style.icon}/>
                <p>Personal and Physical Information</p>
              </div>
              <ul>
                <li><span>Gender & Age</span>: Influence metabolism and body composition.</li>
                <li><span>Height & Weight</span>: Used to calculate BMI, a key weight idicator.</li>
                <li><span>Family History</span>: Genetics may contribute to obesity risks.</li>
              </ul>
            </div>
            <div className={style.how_component}>
              <div className={style.how_content_title}>
                <BsPersonCircle className={style.icon}/>
                <p>Personal and Physical Information</p>
              </div>
              <ul>
                <li><span>Gender & Age</span>: Influence metabolism and body composition.</li>
                <li><span>Height & Weight</span>: Used to calculate BMI, a key weight idicator.</li>
                <li><span>Family History</span>: Genetics may contribute to obesity risks.</li>
              </ul>
            </div>
            <div className={style.how_component}>
              <div className={style.how_content_title}>
                <BsPersonCircle className={style.icon}/>
                <p>Personal and Physical Information</p>
              </div>
              <ul>
                <li><span>Gender & Age</span>: Influence metabolism and body composition.</li>
                <li><span>Height & Weight</span>: Used to calculate BMI, a key weight idicator.</li>
                <li><span>Family History</span>: Genetics may contribute to obesity risks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}