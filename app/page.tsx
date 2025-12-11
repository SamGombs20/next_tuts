'use client'
import style from "./styles/home.module.css"
export default function Main (){
  const onButtonClick =()=>{
    alert("Button clicked")
  }
  return(
    <div>
      <div className={style.intro_container}>
        <p className={style.intro_text}>Obesi<span>Scan</span> - start your <em><strong>journey</strong></em> to better <em><strong>health</strong></em> today</p>
        <div className={style.check_container}>
          <p className={style.check_title}>Quickly check your obesity level</p>
          <p>We collect anonymous data of your personal, physical, diet and lifestyle information.</p>
          <button onClick={onButtonClick} className={style.check_btn}>Check now!</button>
        </div>
      </div>
    </div>
  )
}