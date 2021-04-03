function AboutProject() {
    return (    
        <div id="about-project" className="about-project">
            <h2 className="main__section-header">О проекте</h2>
            <div className="about-project__content">
                <div className="about-project__content-unit">
                    <h3 className="about-project__content-header">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__content-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__content-unit">
                    <h3 className="about-project__content-header">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__content-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__timing">
                <div className="about-project__timing-visual">
                    <p className="about-project__timing-part-one">1 неделя</p>
                    <p className="about-project__timing-part-two">4 недели</p>
                </div>
                <div className="about-project__timing-description">
                    <p className="about-project__timing-part-one-description">Back-end</p>
                    <p className="about-project__timing-part-two-description">Front-end</p>
                </div>
            </div>
        </div>
    )
}
  
export default AboutProject;