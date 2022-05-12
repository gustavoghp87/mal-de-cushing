import { useSelector } from 'react-redux'
import { P, subtitleStyles } from '../css/styles'

export const Intro = () => {

    const { isEnglish } = useSelector(s => s)

    return (<>

    <div style={subtitleStyles} id={'1'}> {isEnglish ? "Intro" : "Introducción"} </div>

    <P>
    {!isEnglish ? <>
        Ally tenía 9 años y 3 meses cuando murió por complicaciones metastásicas del mal de Cushing. O por una mala ejecución de la terapia de reemplazo de corticoides. O por la pasión eutanasiadora de los veterinarios. No lo sé. Publico hoy aprendizajes importantes que me hubiese gustado haber conocido a tiempo pero que no encontré por ningún lado.
        </>:<>
        Ally was 9 years and 3 months old when she died from metastatic complications of Cushing's disease. Or due to poor performance of corticosteroid replacement therapy. Or because of the euthanasia passion of veterinarians. I do not know. Today I publish important learnings that I would have liked to have known in time but that I could not find anywhere.
    </>}
    </P>
    
    <P>
    {!isEnglish ? <>
        Los signos de la enfermedad se pueden rastrear a poco después de la traumática castración, cuando tenía 5 años y 9 meses. El diagnóstico se demoró año y medio por pura impericia profesional, que se mostró incapaz de asociar síntomas con enfermedad y de hacer los estudios que sí podían explicar el problema. Luego fue perfectamente controlada con un inhibidor de corticoides llamado trilostano, de poca experiencia en el mercado (data de 2006). El tumor ya era inoperable para cuando fue descubierto porque estaba invadiendo la luz de la vena cava inferior y toda cirugía en esa zona es garantía de desangrado. Tuvo, entonces, el mejor año y medio de su vida, en completa salud.
        </>:<>
        Signs of the disease can be traced back to shortly after the traumatic castration, when she was 5 years and 9 months old. The diagnosis was delayed for a year and a half due to professional incompetence, who proved unable to associate symptoms with disease and to carry out the studies that could explain the problem. Then it was perfectly controlled with a corticosteroid inhibitor called trilostane, with little experience on the market (dating from 2006). The tumor was already inoperable by the time it was discovered because it was invading the inferior vena cava and any surgery in that area is a guarantee of exsanguination. She then had the best year and a half of his life, in complete health.
    </>}
    </P>
    
    <P>
    {!isEnglish ? <>
        Pero después de ese año y medio se notó que la dosis diaria de trilostano que recibía era insuficiente. La expectativa de un crecimiento del tumor fue traicionada por una ecografía que reveló, mas bien, un riego de tumores secundarios en el hígado, de entre uno y dos centímetros de diámetro. Cuarenta días después y en pleno tratamiento agresivo con la droga quimioterapéutica mitotano, una radiografía de tórax dio a conocer múltiples metástasis en ambos pulmones.
        </>:<>
        But after that year and a half it was noticed that the daily dose of trilostane she was receiving was insufficient. The expectation of tumor growth was betrayed by an ultrasound that revealed, instead, a lot of secondary tumors in the liver, between one and two centimeters in diameter (0.39-0.79 inches). Forty days later and in the midst of aggressive treatment with the chemotherapeutic drug mitotane, a chest X-ray revealed multiple metastases in both lungs.
    </>}
    </P>
    
    <P>
    {!isEnglish ? <>
        Finalmente, el día 60 del tratamiento la llevé a hacer una tomografía computada para saber cómo marchaba pero murió ahí. Ella ya no tenía capacidad de producir sus propios corticoides para esa fecha por causa de la naturaleza del tratamiento que estaba haciendo y probablemente necesitaba recibir corticoides inyectables de efecto inmediato para salir de la crisis respiratoria en la que la metió el estudio con sedantes y el temor. Pero los veterinarios del centro no me escucharon, me combatieron y prevalecieron. Fue eutanasiada mientras reposaba su cabeza en mi mano.
        </>:<>
        Finally, on day 60 of the treatment, I took her to do a computed tomography to see how she was doing, but she died there. She no longer had the capacity to produce her own corticosteroids by that date due to the nature of the treatment she was undergoing and she probably needed to receive immediate-acting injectable corticosteroids to get out of the respiratory crisis in which the study with sedatives and fear put her. But the veterinarians at the center did not listen to me, they fought me and prevailed. She was euthanized while resting her head on my hand.
    </>}
    </P>
    
    <P>
    {!isEnglish ? <>
        Hay varios errores importantes que, de no haberse cometido, se hubiesen evitado la enfermedad, el sufrimiento y el desenlace; algunos certeros y otros de aproximación; algunos mi culpa y otros de los demás.
        </>:<>
        There are several important errors that, if they had not been made, the disease, suffering and outcome would have been avoided; some accurate and others close; some my fault and others of the others.
    </>}
    </P>
    
    <P>
    {!isEnglish ? <>
        Estoy seguro de que la información que yo necesité estaba en las bibliotecas de las universidades. En paralelo, creo también que la navegación por internet dio de baja al monopolio institucional del conocimiento práctico pero solo en la medida en que muchos se tomen el trabajo de escribirlo para que sea accesible; y, en consecuencia, dio de baja a la denigrante esclavitud del hombre común al profesional de los servicios médicos, a sus virtudes, a sus imbecilidades; a su conocimiento, a su ignorancia; a sus aciertos, a sus desaciertos; para bien y para mal.
        </>:<>
        I am sure that the information I needed was in the university libraries. At the same time, I also believe that surfing the Internet eliminated the institutional monopoly of practical knowledge, but only to the extent that many take the trouble to write it down so that it is accessible; and, consequently, it eliminated the denigrating slavery of the common man to the professional of medical services, to its virtues, to its imbecilities; to its knowledge, to its ignorance; to its successes, to its mistakes; for better and for worse.
    </>}
    </P>
    
    <P>
    {!isEnglish ? <>
        Para todo el que quiera salvar a su perro de esta enfermedad y de sus desafíos institucionales.
        </>:<>
        For everyone who wants to save its dog from this disease and its institutional challenges.
    </>}
    </P>

    </>)
}
