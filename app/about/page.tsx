import style from "../styles/about.module.css"
const About = () => {
    return (
        <div className={style.about_container}>
            <div className={style.title}>
                <p>About Obesi<span>Scan</span></p>
            </div>
            <div className={style.content_container}>
                <div className={style.content}>
                    <p className={style.content_text}><strong><span>Obesi</span>Scan</strong> is a platform focused on predicting obesity levels while also featuring comprehensive obesity blogs. We are committed to delivering precise, current insights into obesity, including its causes, associated health risks, and effective prevention methods. Our goal is to increase public understanding of obesity's multifaceted nature and encourage healthier living through educational articles and valuable resources. We firmly believe that informed education on obesity empowers people to take control of their health and make better lifestyle choices.</p>
                </div>
                <div className={style.components_main_container}>
                    <p>The Main Components are:</p>
                    <div className={style.components_container}>
                        <div className={style.component}>
                            <div className={style.component_img} style={{ backgroundImage: 'url(/ml.webp)' }}></div>
                            <div className={style.component_content}>
                                <p className={style.component_title}>Obesity Prediction Tool</p>
                                <p>Our advanced machine learning model predicts obesity levels based on user input data. This data involves various factors such as age, gender, height, weight, and lifestyle habits. This helps users understand their risk factor and make informed decisions</p>
                            </div>

                        </div>
                        <div className={style.component}>
                        <div className={style.component_img} style={{backgroundImage:'url(/blog.webp)'}}></div>
                        <div className={style.component_content}>
                            <p className={style.component_title}>ObesiScan Blog</p>
                            <p>Our blog features in-depth articles and expert insights on obesity, covering topics like prevention strategies, health impacts, and lifestyle improvements to combat obesity.
                            </p>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;