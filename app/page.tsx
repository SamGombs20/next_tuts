import { GiAwareness, GiMeal } from "react-icons/gi"
import style from "./styles/home.module.css"
import { BsPersonCircle } from "react-icons/bs"
import { PiPersonSimpleBikeFill } from "react-icons/pi"
import { HomeClient } from "./components/HomeClient"
export default function Main() {
    
  return (
    <div className={style.home_container}>
      <div className={style.intro_main_container}>
        <div className={style.intro_container}>
          <p className={style.intro_text}>Obesi<span>Scan</span> - start your <em><strong>journey</strong></em> to better <em><strong>health</strong></em> today</p>
          <div className={style.check_container}>
            <p className={style.check_title}>Quickly check your obesity level</p>
            <p>We collect anonymous data of your personal, physical, diet and lifestyle information.</p>
           <HomeClient/>
            
          </div>
        </div>
      </div>
      <div className={style.how_container}>
        <div className={style.container}>
          <p className={style.title_text}>How it works</p>
          <p>Our model predicts a person's likelihood of being  overweight or obese based on various lifestyle habits, physical characteristics and daily routines.Once you provide this information, our AI-powered model analyses patterns and predicts you obesity risk based on real-world data and scientific predearch. <strong>Note</strong>, <em>your data is used solely for prediction and is not stored or shared</em> </p>
          <div className={style.how_components_container}>
            <div className={`${style.how_component} ${style.transparent}`}>
              <div className={style.how_content_title}>
                <BsPersonCircle className={style.icon} />
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
                <GiAwareness className={style.icon} />
                <p>Hydration & Dietary Awareness</p>
              </div>
              <ul>
                <li><span>Water Intake</span>: Drinking water regulates metabolism.</li>
                <li><span>Calorie Monitoring</span>: Tracking food intake helps manage weight.</li>
              </ul>
            </div>
            <div className={style.how_component}>
              <div className={style.how_content_title}>
                <GiMeal className={style.icon} />
                <p>Eating Habits</p>
              </div>
              <ul>
                <li><span>Caloric Food Frequency</span>: How often high-calorie foods are consumed.</li>
                <li><span >Main Meals Per Day</span>: The number of meals eaten daily.</li>
                <li><span>Vegetable Intake</span>: A balanced diet supports weight management.</li>
                <li><span>Snack Intake</span>: Frequent unheathy snacks may lead to weight gain.</li>
              </ul>
            </div>

            <div className={`${style.how_component} ${style.transparent}`}>
              <div className={style.how_content_title}>
                <PiPersonSimpleBikeFill className={style.icon} />
                <p>Lifestyle & Behavioral Factors</p>
              </div>
              <ul>
                <li><span>Smoking & Alcohol Consumption</span>: These can affect metabolism.</li>
                <li><span>Exercise Frequency</span>: Physical activity plays a major role in weight control.</li>
                <li><span>Technology Usage</span>: Excessive screen time leads to a sedentary lifestyle.</li>
                <li><span>Mode of Transport</span>: Walking vs. using a car affects daily activity levels.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}