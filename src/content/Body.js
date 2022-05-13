import { useSelector } from 'react-redux'
import { I, P, subtitleStyles, toggleListStyles } from '../css/styles'

export const Body = () => {

    const { isEnglish } = useSelector(s => s)

    return (<>
    

    <div style={ subtitleStyles } id={'2'}> {!isEnglish ? "Ella" : "She"} </div>

    {!isEnglish ? <>

        <P>
        Ally nació en diciembre de 2012. Caniche toy negra, de un criadero familiar informal. Siempre fue de carácter tranquilo, de estómago usualmente cerrado. Rara vez jugó con un perro y nunca los olfateó, mas bien los evitaba. Quería estar siempre con la familia, especialmente arriba de alguno de nosotros. Tenía una salud excelente pero nunca fue buena para procesar el estrés y la ansiedad.
        </P>

    </>:<>

        <P>
        Ally was born in December 2012. Black 'Toy' Poodle, from an informal family farm. She was always of a calm character, with a usually closed stomach. She rarely played with a dog and never sniffed them, rather she avoided them. She wanted to always be with the family, especially above some of us. She was in excellent health but was never good at processing stress and anxiety.
        </P>

    </>}




    <div style={ subtitleStyles } id={'3'}> {!isEnglish ? "2 semanas de estrés y castración" : "2 weeks of stress and castration"} </div>

    {!isEnglish ? <>

        <P>
        Para septiembre de 2018, con 5 años, había tenido dos falsas preñeces y cada vez volvía más alterada de los cortes de pelo. Un viernes tenía problemas para masticar y pude verle una muela floja. Acordé un turno para castración, remoción de la muela y limpieza de sarro. Para prepararla quise cortarle el pelo. Le cortaron el pelo demasiado corto, rapado, y volvió de la veterinaria temblando y con falsa preñez, la tercera. Le di el antiprolactínico que me había sobrado de la vez anterior; una droga que bloquea la producción de leche. No noté que estaba vencido y le provocó diarrea y no recuerdo si vómitos.
        </P>
        
        <P>
        Cuando se estaba recuperando, llegó la cirugía. Salió del quirófano temblando como hoja al viento y se atrincheró en el sillón grande por 4 días. No dejaba que nadie se le acercase. Tomó muchos antibióticos, por supuesto, con analgésicos y antiácidos (tramadol, firocoxib, amlodipina). Luego se recuperó completamente. Fueron, en total, 2 semanas muy estresantes.
        </P>
        
        <P>
        Como curiosidad, los puntos "ecológicos" demoraron como 2 años en irse del todo. Y quedó una cicatriz interna muy llamativa al tacto. Siempre tuve la duda de si hicieron todo bien o si dejaron ahí alguna fuente de conflicto que explicase lo que vino después, o si algo pasó durante la limpieza dental.
        </P>

    </>:<>

        <P>
        By September 2018, at the age of 5, she had had two false pregnancies and was coming back more and more upset about her haircuts. One Friday she was having trouble chewing and I could see a loose tooth. I agreed on a shift for castration, tooth removal and tartar cleaning. To prepare her I wanted to cut her hair. They cut her hair too short, shaved, and she came back from the vet trembling and with false pregnancy, the third time. I gave her the antiprolactin that I had left over from the previous time; a drug that blocks milk production. I did not notice that it was expired and it caused diarrhea and I do not remember if vomiting.
        </P>
        
        <P>
        When she was recovering, the surgery came. She left the operating room shaking like a leaf in the wind and barricaded himself in the big chair for 4 days. She wouldn't let anyone get close to her. She took many antibiotics, of course, with painkillers and antacids (tramadol, firocoxib, amlodipine). She then fully recovered. It was, in total, 2 very stressful weeks.
        </P>
        
        <P>
        As a curiosity, the 'ecological' points took about 2 years to go away completely. And there was a very striking internal scar to the touch. I always wondered if they did everything right or if they left behind some source of conflict that would explain what came next, or if something happened during the dental cleaning.
        </P>

    </>}




    <div style={ subtitleStyles } id={'4'}> {!isEnglish ? "Indicios de mal de Cushing, diagnóstico y tratamiento" : "Signs of Cushing's disease, diagnosis and treatment"} </div>

    {!isEnglish ? <>

        <P>
        Contando 13 meses desde la esterilización, hicimos una tanda de estudios porque algo no estaba bien. Había engordado un poco, tenía bastante más hambre de lo normal y orinaba mucho; y hasta desarrolló un apetito por los carbohidratos que nunca había tenido. Después de unos estudios de la sangre y una ridícula radiografía para mirarle la columna vertebral, el diagnóstico de los profesionales fue que estaba comiendo muchas calorías para los cambios hormonales que trae la esterilización y necesitaba alimento balanceado dietético; y esto a pesar de que varios parámetros en la sangre estaban mal, incluyendo alanina aminotransferasa (ALT-GPT) alta, que casi siempre significa enfermedad del hígado o hígado grado... por corticoides altos (mal de Cushing).
        </P>
        
        <P>
        No diría que se haya deteriorado más durante los meses siguientes pero sí empeoró de golpe en abril de 2020, 19 meses después de la castración y junto con el confinamiento obligatorio decretado. Tenía hambre todo el tiempo y le salió una panza abalonada dura alrededor del hígado (la de la grasa visceral que causa el hígado graso por estrés metabólico). Llegó a los 4,9 kg, que casi duplicaba el valor previo a la cirugía (2,7 kg). No podía dejar de beber agua y, sin embargo, la nariz estaba completamente seca. Después de comer, tomaba grandes cantidades de agua y no le quedaba espacio suficiente para abrir bien los pulmones y hacía ruidos al respirar.
        </P>
        
        <P>
        Mientras esperábamos otra tanda de estudios, incluyendo uno interminable de tiroides, una de las médicas veterinarias quiso sugerir una ecografía para descartar mal de Cushing por tumor en una glándula suprarrenal. Lo dijo con miedo, no sé si por temor a hacerle competencia a sus colegas del mismo centro o por la gravedad de la enfermedad. Una ecografía, para que se entienda, es un estudio barato y se consigue turno para el mismo día. Y así fue, y así tuve diagnóstico inmediatamente, mal de Cushing por carcinoma suprarrenal en glándula derecha. Un carcinoma es un tumor de tejidos superficiales.
        </P>
        
        <P>
        Luego conocí al endocrinólogo que le haría seguimiento durante 2 años y que sería el principal protagonista externo de la historia. Recetó trilostano 10 mg por día en 2 tomas. Algunos estudios después fue subido a 15 mg por día en 2 tomas, con la particularidad de una recaída breve por la extremada dureza de los comprimidos de la marca nueva y la consecuente pobre absorción. Se nos hizo rutinario desde entonces pulverizar la droga y esconderla dentro de los cárnicos.
        </P>
        
        <P>
        Este profesional confirmó el diagnóstico con una prueba de orina que se llama relación cortisol/creatinina, que también es barata y demora pocos días, cerca de 4. Y esta misma prueba usó para el ajuste de la dosis después. El trilostano, por su parte, cuesta cerca de un dólar cada 15 mg y se consume algo así como 5 mg por kilo de animal por día, dependiendo de la fuerza y tamaño del tumor. El consumo de Ally era 30 dólares al mes, pesando 5 kg al principio pero estabilizada en 3,3 kg poco después. Por último, el endocrinólogo indicó también 8 mg diarios de clopidogrel de por vida, o sea un anticoagulante, barato, para evitar que un coágulo de la ramificación del tumor se desprendiese y causase un ACV o un infarto. 
        </P>
        
        <P>
        Como lo mencionado, la recuperación fue rapidísima y total. No obstante, todos los sitios web coincidían en darle una esperanza de vida de 2 o 3 años. Parecía que el tumor iba a seguir creciendo, obligando a llevar la dosis de trilostano a una cantidad inaceptable para el hígado. Y en la dosis máxima tolerable habría un deterioro de la salud que llevaría a la muerte.
        </P>

    </>:<>

        <P>
        Counting 13 months from the sterilization, we did a series of studies because something was not right. She had put on a little weight, was a lot hungrier than usual, and was urinating a lot; and even developed an appetite for carbohydrates that she never had before. After some blood tests and a ridiculous X-ray to look at her spine, the professionals' diagnosis was that she was eating too many calories due to the hormonal changes that sterilization brings and she needed balanced dietary food; and this despite the fact that several parameters in the blood were wrong, including high alanine aminotransferase (ALT-GPT), which almost always means liver disease or fatty liver disease... due to high corticosteroids (Cushing's disease).
        </P>
        
        <P>
        I would not say that she deteriorated more during the following months, but she did suddenly worsen in April 2020, 19 months after the castration and along with the decreed mandatory confinement. She was hungry all the time and got a hard bulging belly around his liver (the one from visceral fat that causes fatty liver disease from metabolic stress). She reached 4.9 kg, which was almost double the value prior to surgery (2.7 kg, that is, 6 pounds to 10.8 pounds). She couldn't stop drinking water, and yet her nose was completely dry. After eating, she drank large amounts of water and did not have enough space left to open her lungs well and made noises when breathing.
        </P>
        
        <P>
        While we waited for another round of tests, including an endless thyroid test, one of the veterinarians wanted to suggest an ultrasound to rule out Cushing's disease due to an adrenal gland tumor. She said it with fear, I don't know if for fear of competing with her colleagues from the same center or because of the seriousness of the disease. An ultrasound, so that it is understood, is a cheap study and an appointment is made for the same day. And so it was, and so I had an immediate diagnosis of Cushing's disease due to adrenal carcinoma in the right gland. A carcinoma is a tumor of superficial tissues.
        </P>
        
        <P>
        Then I met the endocrinologist who would follow her for 2 years and who would be the main external protagonist of the story. He prescribed trilostane 10 mg per day in 2 doses. Some studies later it was increased to 15 mg per day in 2 doses, with the particularity of a brief relapse due to the extreme hardness of the new brand tablets and the consequent poor absorption. Since then it has become routine for us to pulverize the drug and hide it inside the meat products.
        </P>
        
        <P>
        This professional confirmed the diagnosis with a urine test called the cortisol/creatinine ratio, which is also cheap and takes a few days, about 4. And this same test was used to adjust the dose afterwards. Trilostane, on the other hand, costs about a dollar per 15 mg and something like 5 mg is consumed per kilo of animal per day, depending on the strength and size of the tumor (15 cents per pound). Ally's consumption was $30 a month, weighing 5kg initially but leveling off at 3.3kg soon after. Finally, the endocrinologist also prescribed 8 mg of clopidogrel daily for life, that is, a cheap anticoagulant, to prevent a clot from the tumor branch from breaking off and causing a stroke or heart attack.
        </P>
        
        <P>
        As mentioned, the recovery was very fast and complete. However, all the websites agreed to give her a life expectancy of 2 or 3 years. It seemed that the tumor was going to continue to grow, forcing the dose of trilostane to be taken to an unacceptable amount for the liver. And at the maximum tolerable dose there would be a deterioration of health that would lead to death.
        </P>

    </>}




    <div style={ subtitleStyles } id={'5'}> {!isEnglish ? "El cirujano" : "The surgeon"} </div>

    {!isEnglish ? <>

        <P>
        Se necesitaban 3 meses de recuperación con trilostano antes de poder evaluar una cirugía que extirpara la glándula tumorosa para olvidarnos de la enfermedad. Y la consulta la iba a hacer igual aunque la ecografía ya había revelado que el tumor se había ramificado y estaba invadiendo una de las principales venas del cuerpo, la vena cava inferior, encargada de recoger toda la sangre usada de la parte inferior del cuerpo y llevarla directamente al corazón; una ocupación de casi un centímetro cuadrado, según ecografías posteriores.
        </P>

        <P>
        Una particularidad de esta cirugía es que el animal tiene que quedar internado, consumiendo corticoides sintéticos de mayor a menor hasta lograr la completa rehabilitación de la glándula sana, que se atrofia por la dinámica del Cushing: el tumor causa exceso de corticoides, entonces la hipófisis en el cerebro deja de mandar órdenes de producir más, entonces la glándula sana deja de producir y, con el tiempo, se atrofia. Sumar el efecto inhibidor del trilostano.
        </P>

        <P>
        En agosto de 2020, con ella completamente recuperada, conocí a un cirujano. Hablamos bastante pero todo se reduce a su respuesta cuando le pedí que le pusiera un número a la probabilidad de morir en el quirófano: 80%. Inoperable. Bueno hubiera sido un diagnóstico a tiempo y una remoción de la glándula tumorosa antes de que creciese e invadiese la vena cava inferior, pero no pudo ser.
        </P>
        
        <P>
        Me hubiese gustado en este tiempo, también, haber conocido la otra droga del Cushing: el mitotano, pensando en envenenar el tumor lo suficiente para que abandonace su posición en la vena, para luego sí poder hacer una cirugía de bajo riesgo. Pero la existencia de esta droga me fue velada hasta mayo de 2021, según el endocrinólogo, porque él necesita tiempo para conocer y evaluar a la familia del perro antes de mencionarla.
        </P>
        
        <P>
        Fue bastante claro este cirujano en que el tumor suele crecer dentro de la vena; que hay casos raros en que la tapona causando enfermedad cardíaca, pero usualmente crece lateralemente, haciendo reaparecer los signos del Cushing hasta llevar al trilostano a una dosis necesaria inaceptable para el hígado; ahí se da el deterioro que lleva a la muerte. Otro punto destacado en retrospectiva fue que también mencionó que este tipo de tumor a veces se vuelve maligno y ataca al hígado con tumores secundarios, metastásicos. Me pareció una posibilidad muy remota para una perra de tan buena salud y con un tumor domado con inhibidor, pero lo recordé. La posibilidad de una metástasis pulmonar, en cambio, no se mencionó jamás hasta febrero de 2022.
        </P>

    </>:<>

        <P>
        3 months of recovery with trilostane were needed before surgery to remove the tumorous gland could be evaluated to forget about the disease. And the consultation was going to be the same even though the ultrasound had already revealed that the tumor had branched out and was invading one of the main veins of the body, the inferior vena cava, responsible for collecting all the used blood from the lower part of the body and take it directly to the heart; an occupation of almost a square centimeter (0.15 square inches), according to later ultrasounds.
        </P>

        <P>
        A particularity of this surgery is that the animal has to be hospitalized, consuming synthetic corticosteroids from highest to lowest until complete rehabilitation of the healthy gland is achieved, which atrophies due to Cushing's dynamics: the tumor causes excess corticosteroids, then the pituitary in the brain it stops sending orders to produce more, so the healthy gland stops producing and, over time, atrophies. Add the inhibitory effect of trilostane.
        </P>

        <P>
        In August 2020, with her fully recovered, I met a surgeon. We talked a lot but it all boils down to his response when I asked him to put a number on the probability of dying in the OR: 80%. Inoperable. Well it would have been a timely diagnosis and a removal of the tumorous gland before it grew and invaded the inferior vena cava, but it could not be.
        </P>
        
        <P>
        I would have liked at this time, too, to have known Cushing's other drug: mitotane, thinking of poisoning the tumor enough to make it leave its position in the vein, so that later I could do a low-risk surgery. But the existence of this drug was veiled from me until May 2021, according to the endocrinologist, because he needs time to get to know and evaluate the dog's family before mentioning that drog.
        </P>
        
        <P>
        This surgeon was quite clear that the tumor usually grows within the vein; that there are rare cases in which it plugs causing heart disease, but usually it grows laterally, making the signs of Cushing's reappear until taking trilostane to a necessary dose unacceptable for the liver; there occurs the deterioration that leads to death. Another highlight in hindsight was that he also mentioned that this type of tumor sometimes becomes malignant and attacks the liver with secondary, metastatic tumors. It seemed like a long shot to me for a dog in such good health and with an inhibitor-tamed tumor, but I remembered. The possibility of a lung metastasis, on the other hand, was never mentioned until February 2022.
        </P>

    </>}


        {/* #################### */}

    <div style={ subtitleStyles } id={'6'}> {!isEnglish ? "El año y medio posterior y el indicio de metástasis" : "The year and a half later and the indication of metastasis"} </div>

    {!isEnglish ? <>

        <P>
        Hice 5 estudios de sangre y orina y 4 ecografía doppler entre abril de 2020 y mayo de 2021. Nunca pasaba nada y ella se sentía solamente bien, con la condición de tomar sus 15 mg de trilostano en dos tomas cada 12 horas. Fue el mejor tiempo de su vida; hasta le corté el pelo y las uñas yo, para bien y para mal. Y los malos ratos eran solamente los de la extracción de muestras de sangre y, sobre todo, las ecografías, que duraban 30 o 40 minutos cada una.
        </P>
        
        <P>
        En este tiempo, para mí lo único importante era el tamaño del tumor y el tamaño de su ramificación, que no parecían crecer. Una metástasis parecía un escenario muy lejano. No obstante, en mayo de 2021 la ecografía reveló en el hígado “<I>una imagen focal hipoecoica de 4,1 mm en lóbulo lateral izquierdo</I>”, junto con una inflamación general del órgano. Descubro ahora que reviso los resultados, también estaba alto el valor en sangre de VCM (83 contra 75), indicador de enfermedad del hígado. Aparte, el análisis de orina dio una relación cortisol/creatinina un 31% más alta de lo normal (85,2 contra 65).
        </P>
        
        <P>
        Para el endocrinólogo esto era un indicio de metástasis y era el momento de pasar a la acción con un tratamiento agresivo del que hasta entonces no había hablado: una quimioterapia limpia y selectiva capaz de destruir las cortezas suprarrenales y la incipiente metástasis pero que volvería al animal dependiente de por vida del suministro externo de corticoides por vía oral, y de inyecciones en caso de emergencia; es decir, la estrategia opuesta a la que seguía hasta entonces, de inhibir. La droga, el mitotano.
        </P>
        
        <P>
        El tratamiento consistía en darle dosis altas de esta droga durante 5 días seguidos (85 mg por kilo en 3 tomas), para luego completar los 42 días dándole día por medio, y para luego pasar a una etapa de mantenimiento con un único consumo semanal que evitara la reaparición del tumor primario.
        </P>
        
        <P>
        Cuando llegaron tiempos difíciles, recordar que este profesional me recomendó esto a tiempo (como también había sugerido unos meses antes atacar la ramificación en la vena con radioterapia) me sirvió para fiarme más de él que de los demás. No obstante, hacer esto parecía demasiado. Recuerdo haber buscado dónde hacer una tomografía para saber si realmente se trataba de una metástasis pero no encontré. Y la idea de anestesiarla para tomarle una biopsia del hígado con ecógrafo me espantó. Encima, las ecografías indicaban que el tumor primario y la ocupación de la vena cava inferior se habían reducido un poco. Todos los demás indicadores estaban bien, y ella estaba en su mejor momento. Quise pensar que no pasaría nada.
        </P>
        
        <P>
        Yo no sabía mucho de tumores en este tiempo pero sí sabía que son grandes consumidores de glucosa, por lo que, sumado a la sospecha de que los alimentos balanceados para mascotas están detrás de los horribles números del cáncer, la pasamos en mayo 2020 a una dieta de solo productos cárnicos; es decir, todo proteína y grasa y nada de carbohidratos, y a una única comida nocturna para reducir la inflamación de bajo grado a una porción breve del día. Creí que así el tumor no tendría manera de crecer, por la escasez de glucosa y por la maximización del tiempo en que el sistema inmunológico está en estado de alerta.
        </P>
        
        <P>
        No creo haberme equivocado en esto pero hubo un error mortal desde este mayo de 2021 porque el análisis de orina dio una relación cortisol/creatinina más alta de lo normal. El cortisol es la hormona corticoide característica del estrés y debilita el sistema inmunológico. No le presté atención. Creí que esa medición surgía de la sangre y que daba alta porque tomábamos las muestras con 14 horas de ayunas y antes de tomar el trilostano de la mañana, a causa del horario en que atienden en la veterinaria, y con Ally temblando por el miedo a los veterinarios. En realidad solo recordé este asunto ahora mismo al revisar los papeles para escribir esto. Este es, pienso, el peor error de todos.
        </P>

        <P>
        Con los parámetros estudiados en valores normales (que no lo estaban), la mancha de 4 milímetros en la ecografía del hígado tenía que ser otra cosa.
        </P>

    </>:<>

        <P>
        I did 5 blood and urine studies and 4 doppler ultrasounds between April 2020 and May 2021. Nothing ever happened and she felt just fine, as long as she took her 15 mg of trilostane in two doses every 12 hours. It was the best time of her life; I even cut her hair and nails myself, for better and for worse. And the bad times were only those of the extraction of blood samples and, above all, the ultrasounds, which lasted 30 or 40 minutes each.
        </P>
        
        <P>
        At this time, the only important thing for me was the size of the tumor and the size of its branch, which did not seem to grow. A metastasis seemed like a very distant scenario. However, in May 2021, the ultrasound revealed in the liver “<I>a focal hypoechoic image of 4.1 mm in the left lateral lobe</I>” (0.16 inches), along with a general inflammation of the organ. I discover now that I review the results, the MCV blood value was also high (83 against 75), an indicator of liver disease. In addition, the urinalysis gave a cortisol/creatinine ratio 31% higher than normal (85.2 vs. 65).
        </P>
        
        <P>
        For the endocrinologist this was an indication of metastasis and it was time to take action with an aggressive treatment that until then had not been discussed: a clean and selective chemotherapy capable of destroying the adrenal cortices and the incipient metastasis but that would return the animal dependent for life on external supply of oral corticosteroids, and injections in case of emergency; that is, the opposite strategy to the one followed until then, of inhibiting. The drug, mitotane.
        </P>
        
        <P>
        The treatment consisted of giving high doses of this drug for 5 days in a row (85 mg per kilo, that is, 39 mg per pound, in 3 doses), to then complete the 42 days giving it every other day, and then move on to a maintenance stage with a single weekly consumption that prevent recurrence of the primary tumor.
        </P>
        
        <P>
        When difficult times came, remembering that this professional recommended this to me in time (as he had also suggested a few months before to attack the branch in the vein with radiotherapy) helped me to trust him more than others. However, doing this seemed too much. I remember looking for where to do a tomography to find out if it really was a metastasis, but I couldn't find it. And the idea of anesthetizing her to take an ultrasound liver biopsy scared me. On top of that, the ultrasounds indicated that the primary tumor and the occupation of the inferior vena cava had shrunk somewhat. All other indicators were fine, and she was at her best. I wanted to think that nothing would happen.
        </P>
        
        <P>
        I did not know much about tumors at this time but I did know that they are great consumers of glucose, so, added to the suspicion that balanced pet food is behind the horrible cancer numbers, we passed her in May 2020 to a diet of only meat products; that is, all protein and fat and no carbohydrates, and a single evening meal to reduce low-grade inflammation to a short portion of the day. I thought that in this way the tumor would have no way of growing, due to the lack of glucose and the maximization of the time in which the immune system is in a state of alert.
        </P>
        
        <P>
        I do not think I was wrong about this but there was a deadly mistake since May 2021 because the urinalysis gave a higher than normal cortisol/creatinine ratio. Cortisol is the corticoid hormone characteristic of stress and weakens the immune system. I did not pay attention. I thought that this measurement came from the blood and that it was discharged because we took the samples with 14 hours of fasting and before taking the trilostane in the morning, because of the hours they attend the veterinarian, and with Ally trembling with fear of the veterinarians. Actually I only remembered this matter right now when going through the papers to write this. This is, I think, the worst mistake of all.
        </P>

        <P>
        With the parameters studied at normal values ​​(which were not), the 0.16-inches spot on the ultrasound of the liver had to be something else.
        </P>

    </>}




    <div style={ subtitleStyles } id={'7'}> {!isEnglish ? "Cáncer tumoroso" : "Tumorous cancer"} </div>

    {!isEnglish ? <>

        <P>
        Siguen 5 cosas relevantes sobre los tumores:
        </P>

        <P style={ toggleListStyles }>
            <li>
            Un tumor surge cuando muchas células sufren un daño interno y fallan los mecanismos externos para su destrucción. Para explicar el daño en las células, considerar la teoría de la acidificación de los órganos. Por la otra parte, la causa fundamental de que fallen los mecanismos externos para el aniquilamiento de las células cancerosas es algún tipo de inmunodepresión, porque son las células inmunológicas las que tienen que destruirlas.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            Toda célula cancerígena tiene atrofiados los mecanismos para generar combustión usando oxígeno, agua y alguno de estos 3 combustibles: glucosa, aminoácido y grasa. Lo que hace para sobrevivir es tomar solamente glucosa y fermentarla. Pero el proceso de generación de energía por fermentación es muy ineficiente en comparación con la combustión con oxígeno y por eso la célula cancerígena consume grandes cantidades de glucosa. La dieta pobre en carbohidratos termina siendo, así, imprescindible para una lucha contra el cáncer.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            No obstante, la elevación de las concentraciones en sangre de las hormonas del estrés hace que el hígado se ponga a generar glucosa a partir de aminoácidos, sea de los aminoácidos de las proteínas comidas, si alcanzan, o tomados de la propia masa muscular. Entonces, un cuerpo estresado alimenta a los tumores hasta la saciedad.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            Las células cancerígenas son atacadas y destruidas por los macrófagos, células semejantes a los glóbulos blancos pero bastante más grandes. La buena presencia de macrófagos en la sangre depende, en sentido práctico, de la abundancia de vitamina D, que es la del sol y el pescado.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            La diferencia entre un tumor "benigno" y otro "maligno" no depende del tumor en sí sino de lo que el sistema inmunológico le permita hacer. Un tumor pasa a "maligno" y ataca a los demás órganos y sistemas solamente cuando las defensas del cuerpo se lo permiten. El principal medio para el contagio de los demás órganos es el sistema linfático, donde no hay macrófagos defensivos. Las cañerías del sistema linfático se inflaman lo suficiente como para dejar pasar células del cáncer solamente cuando hay niveles importantes de hormonas de estrés en la sangre. De ahí las metástasis.
            </li>
        </P>

    </>:<>

        <P>
        Here are 5 relevant things about tumors:
        </P>

        <P style={ toggleListStyles }>
            <li>
            A tumor arises when many cells suffer internal damage and the external mechanisms for their destruction fail. To explain cell damage, consider the organ acidification theory. On the other hand, the fundamental cause of failure of the external mechanisms for the annihilation of cancer cells is some type of immunosuppression, because it is the immune cells that have to destroy them.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            All cancer cells have atrophied mechanisms to generate combustion using oxygen, water and one of these 3 fuels: glucose, amino acids and fat. What it does to survive is take only glucose and ferment it. But the process of energy generation by fermentation is very inefficient compared to combustion with oxygen and therefore the cancer cell consumes large amounts of glucose. The low-carbohydrate diet ends up being, thus, essential for a fight against cancer.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            However, the rise in blood concentrations of stress hormones causes the liver to start generating glucose from amino acids, either from the amino acids of the proteins eaten, if they are sufficient, or taken from the muscle mass itself. So, a stressed body feeds the tumors ad nauseam.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            Cancer cells are attacked and destroyed by macrophages, cells similar to white blood cells but much larger. The good presence of macrophages in the blood depends, in a practical sense, on the abundance of vitamin D, which is that of the sun and fish.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            The difference between a 'benign' and a 'malignant' tumor does not depend on the tumor itself, but on what the immune system allows it to do. A tumor becomes 'malignant' and attacks other organs and systems only when the body's defenses allow it. The main means for infection of the other organs is the lymphatic system, where there are no defensive macrophages. The pipes of the lymphatic system become inflamed enough to let cancer cells through only when there are significant levels of stress hormones in the blood. Hence the metastases.
            </li>
        </P>

    </>}




    <div style={ subtitleStyles } id={'8'}>
        {!isEnglish ? "La metástasis y el mitotano como único tratamiento posible" : "Metastasis and mitotane as the only possible treatment"}
    </div>

    {!isEnglish ? <>

        <P>
        Para diciembre de 2021, tenía signos evidentes de Cushing: había engordado un poco y comía, bebía y orinaba más. Pedí otra ecografía doppler, mientras le subía un poco la dosis de trilostano. Aparte, había una bolita palpable del lado izquierdo del abdomen, chica pero firme. Empecé a pensar que le estaba llegando la hora. Llevaba 7 meses desde la última tanda de estudios.
        </P>
        
        <P>
        En enero de 2022, la ecografía reveló “<I>múltiples lesiones focales, algunas hipoecoicas, otras heterogéneas, con diámetros desiguales de 1,5 a 2 cm diseminadas en todos los lóbulos hepáticos</I>”. Tarde pero era hora de suspenderlo todo y ocuparse solamente de ella para intentar salvarla.
        </P>
        
        <P>
        Esta ecografía no me dijo la naturaleza de la bolita que se sentía del lado izquierdo. Justo antes de hacerla, la veterinaria sugirió que era el bazo oprimido por la expansión del hígado, y eso pensó también el endocrinólogo después. La tomografía de abril 2022 parece darles la razón en esto aunque fue un motivo de preocupación por 4 meses. Por lo pronto, esta ecografía dijo: “<I>Linfonódulos: no se observan</I>”.
        </P>
        
        <P>
        Volviendo al hígado, el endocrinólogo indicó que la única esperanza estaba en el tratamiento quimioterapéutico con mitotano que recomendó 8 meses antes. Esta vez quise empezarlo de inmediato. Siempre tuve presente el conflicto de intereses que había cuando el profesional que hacía el tratamiento era el mismo que me vendía las drogas. Pero no parecía tener opción, y él tenía a su favor que me recomendó esto en mayo y yo no quise.
        </P>
        
        <P>
        El mitotano solía ser un insecticida. Tuvieron que darse cuenta que los animales y humanos intoxicados con mitotano desarrollaban mal de Addison, que es lo opuesto al mal de Cushing: puñado de síntomas causados por hormonas corticoides insuficientes. La capacidad de esta droga para causar una destrucción completamente selectiva es la esperanza para este tipo de cuadros de Cushing metastásicos porque solamente elimina las células de corteza suprarrenal. Como los tumores de metástasis en otros órganos también son células de corteza suprarrenal, pueden ser envenenados con mitotano sin destruir ningún otro órgano o sistema, que es lo que sí hacen las quimioterapias convencionales.
        </P>
        
        <P>
        Se desprende que cualquiera que quiera hacer este tratamiento tiene que prepararse para enfrentar a los profesionales que no conocen esta droga. No hay en los otros tipos de cáncer drogas que ejecuten una destrucción tan específica para hacer una quimioterapia tan limpia, y si las hubiera no servirían. Por ejemplo, una droga capaz de destruir solamente células del páncreas no podría usarse porque eliminaría el páncreas. La diferencia con el Cushing es que sí se puede vivir sin cortezas suprarrenales.
        </P>
        
        <P>
        Respecto a los costos, cuesta cerca de 1,6 dólares los 100 mg. Un perro sin metástasis necesitaría algo así como 2 mil miligramos en la etapa de inducción por cada kilo de animal, o sea 33 dólares por kilo, en un tratamiento que dura un mes y medio. Luego queda un consumo semanal de mantenimiento de 100 mg por kilo, más el costo de los corticoides, que calculo en 5 dólares por mes por kilo.
        </P>
        
        <P>
        Por cierto, el profesional recomendó una tomografía de abodómen y tórax para conocer bien el punto de partida, para tener luego con qué comparar el avance del tratamiento. Yo me rehusé porque son con sedación total y no creí que me aportaría nada relevante para esta etapa, y bastante difícil iba a ser el tratamiento para ella como para ponerla en ese estrés. Lo que no me dijo es que, si no le hacía la tomografía, al menos debía tomarle una placa de tórax para descartar una metástasis pulmonar. No sé qué hubiese pasado si hubiera sabido que los pulmones estaban fuertemente tomados por tumores también. Pero que quede claro que las metástasis pulmonares son mucho más frecuentes que las hepáticas en el mal de Cushing, y que si el hígado está tomado, los pulmones probablemente ya estén tomados desde antes.
        </P>

    </>:<>

        <P>
        By December 2021, she had obvious signs of Cushing's: she had put on some weight and was eating, drinking and urinating more. I ordered another doppler scan, while upping her trilostane a bit. Besides, there was a palpable lump on the left side of the abdomen, small but firm. I began to think that her time was coming. It had been 7 months since the last round of studies.
        </P>
        
        <P>
        In January 2022, the ultrasound revealed “<I>multiple focal lesions, some hypoechoic, others heterogeneous, with unequal diameters from 1.5 to 2 cm spread in all liver lobes</I>” (that is, 0.59 to 0.78 inches). Late but it was time to suspend everything and deal only with her to try to save her.
        </P>
        
        <P>
        This ultrasound did not tell me the nature of the lump that was felt on the left side. Just before doing it, the veterinarian suggested that it was the spleen oppressed by the expansion of the liver, and that is what the endocrinologist later thought too. The tomography of April 2022 seems to prove them right on this, although it was a cause for concern for 4 months. For now, this ultrasound said: “<I>Lymph nodes: not observed</I>”.
        </P>
        
        <P>
        Returning to the liver, the endocrinologist indicated that the only hope lay in the chemotherapy treatment with mitotane that he had recommended 8 months earlier. This time I wanted to start it right away. I always had in mind the conflict of interest that existed when the professional who did the treatment was the same one who sold me the drugs. But I seemed to have no choice, and he had it in his favor that he recommended this to me in May and I didn't want to.
        </P>
        
        <P>
        Mitotane used to be an insecticide. They had to realize that animals and humans intoxicated with mitotane developed Addison's disease, which is the opposite of Cushing's disease: a handful of symptoms caused by insufficient corticoid hormones. The ability of this drug to cause a completely selective destruction is the hope for this type of metastatic Cushing's disease because it only eliminates the cells of the adrenal cortex. As metastatic tumors in other organs are also cells of the adrenal cortex, they can be poisoned with mitotane without destroying any other organ or system, which is what conventional chemotherapies do.
        </P>
        
        <P>
        It follows that anyone who wants to do this treatment has to prepare to face professionals who do not know this drug. There are no drugs in other types of cancer that carry out such a specific destruction to make such a clean chemotherapy, and if there were, they would not work. For example, a drug capable of destroying only cells of the pancreas could not be used because it would kill the pancreas. The difference with Cushing's is that you can live without adrenal cortices.
        </P>
        
        <P>
        Regarding costs, it costs about 1.6 dollars for 100 mg. A dog without metastasis would need something like 2 thousand milligrams in the induction stage for each kilo of animal, or 33 dollars per kilo (15 dollars per pound), in a treatment that lasts a month and a half. Then there is a weekly maintenance consumption of 100 mg per kilo, plus the cost of corticosteroids, which I calculate at 5 dollars per month per kilo (2.27 dollars per pound).
        </P>
        
        <P>
        By the way, the professional recommended a tomography of the abdomen and thorax to know the starting point well, to later have something to compare the progress of the treatment with. I refused because they are with total sedation and I did not think it would give me anything relevant for this stage, and the treatment was going to be quite difficult for her to put her under that stress. What he did not tell me is that, if I did not do the tomography, I should at least take a chest X-ray to rule out lung metastasis. I do not know what would have happened if I had known that the lungs were heavily taken over by tumors as well. But let it be clear that lung metastases are much more frequent than liver metastases in Cushing's disease, and that if the liver is taken, the lungs are probably already taken beforehand.
        </P>

    </>}




    <div style={ subtitleStyles } id={'9'}>
        {!isEnglish ? "Mitotano sin trilostano" : "Mitotane without trilostane"}
    </div>

    {!isEnglish ? <>

        <P>
        El tratamiento empezó el domingo 6 de febrero de 2022. Y que sepa bien el lector: fue un desastre retirarle el trilostano el día anterior al comienzo del tratamiento con mitotano. Se suponía que ambas drogas no se debían usar juntas porque ambas reducen la producción de corticoides y si la cantidad de corticoides baja mucho hay riesgo de muerte. La idea era ir bajando los corticoides en sangre gradualmente por efecto exclusivo del mitotano, que demoraría entre 3 y 5 días en causar una deficiencia notoria, ante la cual comenzaría la suplementación con corticoides sintéticos de vía oral: prednisolona en gotas (glucocorticoide, 1 mg al día) y acetato de fludrocortisona (mineralocorticoide y glucocorticoide a la vez, 100 microgramos al día), que siempre se introduce acompañada con comida con sal. Y, en caso de emergencia, se usarían corticoides inyectables de acción inmediata: dexametasona (glucocorticoide, 1,5 mg) e hidrocortisona (mineralocorticoide y glucocorticoide a la vez, 10 mg).
        </P>
        
        <P>
        Lo que el endocrinólogo no sabía, y que yo pude leer después, es que el efecto del mitotano sobre el tumor suprarrenal se ve diluido en lo químico y dilatado en el tiempo cuando hay metástasis. Es decir, la cantidad de veneno que le llega al tumor primario es poca porque gran parte de lo consumido ataca a los tumores secundarios y se destruye antes de llegar a las glándulas suprarrenales. Y esto es especialmente cierto cuando las metástasis están en el hígado, paso obligatorio para cualquier droga que se absorba en el hígado.
        </P>
        
        <P>
        La llamada “etapa de inducción”, que culmina con la destrucción de la mayor parte del carcinoma suprarrenal y con la suplementación con corticoides externos, demora algo así como una semana cuando no hay metástasis, pero demora entre 2 y 11 semanas cuando sí hay metástasis, según los ensayos clínicos que pude leer después. Por tanto, retirar el inhibidor de corticoides un día antes de introducir el mitotano es garantía de desastre.
        </P>
        
        <P>
        Ally voló de corticoides. Engordó a alta velocidad, se deshidrató, desarrolló apetito voraz y hasta se infectó con una infección urinaria por “Klebsiella pneumoniae” que la molestó durante 30 días y la atormentó durante los 20 días finales, a causa de la inmunodepresión que causan los corticoides altos. Todo en pocos días, mientras yo estaba con los corticoides sintéticos en la mano preocupado por que los corticoides en sangre no bajaran demasiado, más allá de lo llamativo de que los dos momentos de rápida degradación por Cushing hayan sido cuando dejó de pasar algunas horas al día sola, o sea, cuando durmió poco: abril 2020 y febrero 2022.
        </P>
        
        <P>
        Respecto a la infección, por supuesto, los distintos veterinarios que la vieron recetaron distintos antibióticos que para lo único que sirvieron fue para limpiarle el sarro de los dientes, y algunas cosas negativas que cuento después.
        </P>
        
        <P>
        Resumiendo el historial del trilostano hasta acá: Ally consumió 10 mg por día en las primeras semanas desde el diagnóstico de Cushing, subió a 15 después, al año el estudio desoído por mí dijo que esa cantidad ya no alcanzaba, al año y medio le subí como a 18 por la vuelta del Cushing, y le dimos 30 diarios en la semana previa al comienzo de la quimioterapia, para cortarlo completamente. Considerar que pesaba 5 kg al principio, bajó rápido a 3 kg aproximadamente y subió a 3,5 kg ya en el 2022.
        </P>

        <P>
        Comentario aparte, leí después de perros que se curaron completamente de Cushing y de metástasis pulmonares tratando con mitotano pero no leí de ningún perro con metástasis hepática que hayan podido curar; de hecho, leí de algunos que eutanasiaron en pleno tratamiento ni bien conocerse que tenían metástasis hepáticas.
        </P>

    </>:<>

        <P>
        The treatment began on Sunday, February 6, 2022. And let the reader know: it was a disaster to withdraw the trilostane the day before the start of the mitotane treatment. Both drugs were not supposed to be used together because they both reduce the production of corticosteroids and if the amount of corticosteroids drops too low there is a risk of death. The idea was to gradually lower blood corticosteroids due to the exclusive effect of mitotane, which would take between 3 and 5 days to cause a noticeable deficiency, before which supplementation with oral synthetic corticosteroids would begin: prednisolone in drops (glucocorticoid, 1 mg daily) and fludrocortisone acetate (mineralocorticoid and glucocorticoid at the same time, 100 micrograms daily), which is always introduced with salty food. And, in an emergency, immediate-acting injectable corticosteroids would be used: dexamethasone (glucocorticoid, 1.5 mg) and hydrocortisone (mineralocorticoid and glucocorticoid at the same time, 10 mg).
        </P>
        
        <P>
        What the endocrinologist did not know, and what I was able to read later, is that the effect of mitotane on the adrenal tumor is chemically diluted and dilated over time when there is metastasis. That is, the amount of poison that reaches the primary tumor is small because much of what is consumed attacks secondary tumors and is destroyed before reaching the adrenal glands. And this is especially true when the metastases are in the liver, a mandatory step for any drug that is absorbed in the liver.
        </P>
        
        <P>
        The so-called “induction stage”, which culminates in the destruction of most of the adrenal carcinoma and external corticosteroid supplementation, takes about a week when there are no metastases, but it takes between 2 and 11 weeks when there are metastases, according to the clinical trials I was able to read afterwards. Therefore, withdrawing the corticosteroid inhibitor one day before introducing mitotane is a guarantee of disaster.
        </P>
        
        <P>
        Ally flew off corticosteroids. She gained weight at high speed, became dehydrated, developed a ravenous appetite and even became infected with a urinary tract infection caused by “Klebsiella pneumoniae” that bothered her for 30 days and tormented her for the final 20 days, due to the immunosuppression caused by high corticosteroids. All in a few days, while I was with the synthetic corticosteroids in hand worried that the corticosteroids in the blood would not drop too much, beyond the striking fact that the two moments of rapid degradation by Cushing were when she stopped spending a few hours at day alone, that is, when she slept little: April 2020 and February 2022.
        </P>
        
        <P>
        Regarding the infection, of course, the different veterinarians who saw her prescribed different antibiotics that the only thing they served was to clean the tartar from her teeth, and some negative things that I will tell later.
        </P>
        
        <P>
        Summarizing the history of trilostane up to here: Ally consumed 10 mg per day in the first weeks after Cushing's diagnosis, it rose to 15 later, a year later the study ignored by me said that this amount was no longer enough, after a year and a half I increased it to about 18 due to the return of Cushing's, and we gave him 30 a day in the week before she started chemo, to cut him off completely. Consider that she weighed 5 kg at the beginning, quickly dropped to around 3 kg and went up to 3.5 kg already in 2022 (11, 6.6, 7.7 pounds).
        </P>

        <P>
        Side comment, I read after dogs that were completely cured of Cushing's and lung metastases by treating with mitotane but I did not read of any dogs with liver metastases that they were able to cure; in fact, I read of some who were euthanized in the middle of treatment as soon as it was known that they had liver metastases.
        </P>

    </>}




    <div style={ subtitleStyles } id={'10'}>
        {!isEnglish ? "Mitotano con trilostano" : "Mitotane with trilostane"}
    </div>

    {!isEnglish ? <>

        <P>
        Cuando íbamos 4 o 5 días de mitotano probé darle alguna dosis baja de trilostano porque el Cushing la estaba atormentando. Se ponía mejor de inmediato, en algo así como media hora, pero luego tenía problemas nocturnos de agitación y deambular de acá para allá, y lo suspendí.
        </P>
        
        <P>
        Pero cuando, cerca del décimo día, vi que perdía un fluido verde amarillento con pus desde las vías urinarias supe que de una infección urinaria se trataba y tuve ahí la garantía de que era Cushing y no efectos secundarios del mitotano, como creía el endocrinólogo. También entendí que los problemas nocturnos que tenía cuando tomaba trilostano no eran algo malo de por sí, sino que era fiebre por estar combatiendo la infección que hasta entonces no se notaba.
        </P>
        
        <P>
        Me decidí a darle trilostano diario, aunque fuera poco, atento de que llegara el momento de quitarlo y luego de completar la inducción. El endocrinólogo me dio la derecha y se dedicó desde entonces a observar, más que a dirigir. No le pasé factura por este desastre. Decidí tomar de él lo que de él me sirviese, y buscar las otras respuestas en otros lugares. Tenía en esos días, como tengo ahora, la sensación de que él el tratamiento lo conocía solo a nivel teórico, sin práctica clínica, y que lo que sabía era por meros apuntes universitarios.
        </P>

    </>:<>

        <P>
        When we were on 4 or 5 days of mitotane I tried to give her some low dose of trilostane because Cushing's was tormenting her. She used to get better right away, in about half an hour, but then she had nightly problems with agitation and wandering around, and I stopped it.
        </P>
        
        <P>
        But when, around the tenth day, I saw that she was losing a yellowish green fluid with pus from the urinary tract, I knew that it was a urinary tract infection and I had the guarantee that it was Cushing's and not secondary effects of mitotane, as the endocrinologist believed. I also understood that the nocturnal problems that she had when she was taking trilostane were not something bad per se, but it was a fever from fighting the infection that had not been noticed until then.
        </P>
        
        <P>
        I decided to give her daily trilostane, even if it was little, waiting for the time to come off it and after completing the induction. The endocrinologist gave me the right and since then he has dedicated himself to observing, rather than directing. I did not bill him for this mess. I decided to take from him what was useful to me, and look for the other answers in other places. In those days, as I do now, I had the feeling that he only knew the treatment at a theoretical level, without clinical practice, and that what he knew was from mere university notes.
        </P>

    </>}




    <div style={ subtitleStyles } id={'11'}>
        {!isEnglish ? "La crisis respiratoria y la radiografía" : "Respiratory crisis and radiography"}
    </div>

    {!isEnglish ? <>

        <P>
        El sábado 26 de febrero lo pasó conmigo. Al cerrar el día la dejé con mi madre para que tomara la última dosis del día de trilostano y mitotano. Trilostano consumía 7,5 mg por día en dos tomas y mitotano tomaba 400 mg en 3 tomas. No quiso comer mucho y poco después de cenar comenzó a agitarse. Había una tormenta eléctrica muy fuerte. Tuve un primer indicio de ansiedad por las tormentas uno o dos meses antes pero cerré todo y no pasó a mayores. Esta vez hiperventilaba cada vez con más ruido, como si el aire raspara contra algo seco. Como no mejoraba fui a verla. Me preocupé mucho y la llevé a una guardia 24 horas.
        </P>
        
        <P>
        Ahí les resumí el cuadro y el tratamiento, y le escucharon los pulmones con estetoscopio. Tenía 39.4°C (102.9°F), es decir, un poco de fiebre (la máxima normal es 39°C, 102.2°F). Se escuchaba algo en los pulmones que no era líquido. Por tanto, muy probablemente era sólido, metástasis. Me dieron un tuvo de oxígeno, la tapé con mi campera y me quedé sosteniéndole el cable del oxígeno apuntando a la boca mientras hiperventilaba con ruido seco y le hacía una suerte de ventilación mecánica con una mano esperando que no se agotara de respirar y entrara en paro.
        </P>
        
        <P>
        A las 4 horas de empezada la crisis comenzó a calmarse y respirar mejor. La traje devuelta, y le llevó como una hora más normalizarse. La crisis terminó como a las 4 de la mañana y duró como 6 horas. Era tiempo de una placa de tórax.
        </P>
        
        <P>
        La placa fue el lunes 28, feriado, y mostró una profusa nube de tumores en ambos pulmones. Fue muy duro pero decidí mudarme con ella para poder subir la dosis de mitotano y monitorear sus signos todo el tiempo. También para poder cargar yo mismo con la posibilidad de un colapso, la necesidad de trasladarla de urgencia y una posible eutanasia. El 2 de marzo me mudé.
        </P>
        
        <P>
        Después de la muerte llegué a creer que esta crisis no se trató de tumores sino de simple ansiedad por la tormenta en un contexto de imposibilidad de elevar naturalmente los glucocorticoides para hacerle frente al estrés, sumando un poco de fiebre por la infección urinaria que también demandaba corticoides. Tengo a mi favor que llevaba 20 días de mitotano a 400 mg por día y 10 días de trilostano a 7,5 mg por día. O sea que solamente necesitaba una inyección de hormonas. Como en el día de la muerte.
        </P>

    </>:<>

        <P>
        On Saturday, February 26, she spent it with me. At the end of the day I left her with my mother to take her last dose of trilostane and mitotane for the day. Trilostane took 7.5 mg per day in two doses and mitotane took 400 mg in 3 doses. She did not want to eat much and shortly after dinner she started to get agitated. There was a very strong electrical storm. I had a first hint of storm anxiety a month or two before but I closed everything and it did not go any further. This time she was hyperventilating louder and louder, as if the air was scraping against something dry. Since she was not getting better, I went to see her. I was very worried and took her to a 24-hour guard.
        </P>
        
        <P>
        There I summarized the picture and the treatment, and they listened to her lungs with a stethoscope. She had 39.4°C (102.9°F), that is, a slight fever (normal maximum is 39°C, 102.2°F). Something was heard in the lungs that was not liquid. So it was most likely solid, metastasis. They gave me an oxygen tube, I covered her with my jacket and I stayed holding the oxygen cable pointing to her mouth while I hyperventilated with a dry noise and gave her a sort of mechanical ventilation with one hand, hoping that she would not exhaust herself from breathing and go into cardiorespiratory arrest.
        </P>
        
        <P>
        Four hours into the crisis, she began to calm down and breathe better. I brought her back, and it took her like another hour to get back to normal. The crisis ended around 4 in the morning and lasted about 6 hours. It was time for a chest X-ray.
        </P>
        
        <P>
        The X-ray was done on Monday the 28th, a holiday, and showed a profuse cloud of tumors in both lungs. It was really hard but I decided to move in with her so I could up her mitotane dose and monitor her signs all the time. Also to be able to carry myself with the possibility of a collapse, the need to transfer her urgently and a possible euthanasia. On March 2 I moved.
        </P>
        
        <P>
        After death, I came to believe that this crisis was not about tumors but about simple anxiety due to the storm in a context of the impossibility of naturally raising glucocorticoids to cope with stress, adding a little fever due to the urinary infection that also demanded corticosteroids. I have in my favor that she was taking 20 days of mitotane at 400 mg per day and 10 days of trilostane at 7.5 mg per day. So she just needed a hormone injection. Like on the day of death.
        </P>

    </>}




    <div style={ subtitleStyles } id={'12'}>
        {!isEnglish ? "El oncólogo" : "The oncologist"}
    </div>

    {!isEnglish ? <>

        <P>
        Quise saber si un oncólogo podía arrojarme algo de luz sobre el nuevo cuadro y sobre el tratamiento; preguntarle qué opinaba del mitotano y si se podía combinar con otro tratamiento. Siempre noté una resistencia del endocrinólogo a derivarme con un oncólogo pero esta vez, siendo tan directo, me dio un contacto. No obstante, como me demoraba 8 o 9 días, busqué por mi zona y conseguí uno para el día siguiente.
        </P>
        
        <P>
        No puedo decir que me haya ido bien pero al final de cuentas quedó todo indefinido; todo puede ser. Así que seré objetivo. Era jueves 3 de marzo de 2022. Comenzó preguntando quién la estaba atendiendo y haciendo seguimiento. Le molestó notoriamente cuando le dije que un endocrinólogo, cuando él esperaba un oncólogo. Creo que se sintió atacado, invadido, y se comportó como el conocido mecánico de autos que levanta el capó y critica irresponsablemente el trabajo del que trabajó antes que él.
        </P>
        
        <P>
        Al oncólogo le pareció “poco probable” que la situación de la corteza suprarrenal derecha hubiese causado esas metástasis. Si bien le pareció “posible”, para él ni siquiera había pruebas de un tumor en esa glándula, ya que la ecografía solo la mostraba “aumentada”. Y le pareció “más probable” que se tratase todo de un simple tumor hepático que migró a los pulmones.
        </P>
        
        <P>
        Como tal, la única esperanza estaba en una quimioterapia convencional, esas que destruyen a las células cancerígenas pero también la médula ósea, invalidando las defensas del cuerpo, preparándolo para la siguiente expansión del cáncer, y causa la muerte casi siempre. Mientras me decía que ella no iba a resistir una quimioterapia convencional por el estado del hígado, llenaba unas órdenes para estudios de sangre y corazón para comenzar cuanto antes. No volví a verlo.
        </P>
        
        <P>
        Antes de irme de esta visita relámpago (porque parecía que me echaba, como si hubiese gente esperando afuera, que no había), me pregunté cómo sabía yo que las metástasis eran por carcinoma suprarrenal y no por otra cosa. Me di cuenta de cuál era la mejor respuesta a eso, y hablé: si los secundarios no eran células cancerígenas de origen suprarrenal, la resistencia al mitotano no tenía razón de ser. La demora del mitotano en destruir las cortezas adrenales y en causar una insuficiencia de corticoides era la mejor demostración que yo tenía de la veracidad del diagnóstico del endocrinólogo. Pero el oncólogo tenía que redoblar la apuesta: negó a muerte que el mitotano sea una droga quimioterapéutica. Para él, era una droga endocrinóloga para la regulación de hormonas y jamás podría hacerle daño a un tumor.
        </P>
        
        <P>
        Traté de decirle que eso es lo que hace en dosis bajas pero que en dosis altas realmente destruye, como yo mismo había investigado. No quiso escucharme. A mis ojos, su único interés era negar el diagnóstico del colega (o no-colega) que le había hecho una “falta de ética” al “invadirle” el mercado. Y, quizás, venderme una quimioterapia que no funciona y causa sufrimiento. Me fui muy golpeado. Dudé de todo, del tipo de cáncer, del mitotano y del endocrinólogo, y creí que Ally estaba a punto de colapsar.
        </P>
        
        <P>
        Pero después me puse a investigar. Que el mitotano hace quimioterapia vi que lo dicen todos los sitios que hablan del tema. También conseguí un informe que resumía más de una década de tratamientos con mitotano en perros de una universidad que, si bien los números de supervivencia no son demasiado optimistas, me dejó en claro que el mitotano sí puede destruir tumores adrenales y metástasis pulmonares, al menos. Y respecto al diagnóstico alternativo del oncólogo, leí que los tumores que se originan en el hígado son mucho menos frecuentes que los que llegan como metástasis, y que, en caso de ocurrir, uno esperaría ver un tumor grande en vez de muchos pequeños.
        </P>
        
        <P>
        Parecía que nada de lo que dijo ese hombre tenía sentido. Lo encontré en las redes sociales para, finalmente, descartarlo como un perfecto imbécil. Le hablé al endocrinólogo de todo esto y me dijo: “<I>La oncología del sistema endocrino es de terror en Argentina; no saben nada los oncólogos... por eso los endocrinólogos no derivamos</I>”. Sin embargo, la posibilidad de un diagnóstico equivocado resurgió después, con la tomografía y el aparente resultado ambiguo de 60 días de mitotano a dosis aumentada.
        </P>

    </>:<>

        <P>
        I wanted to know if an oncologist could shed some light on the new condition and on the treatment; ask it what it thought of mitotane and if it could be combined with another treatment. I always noticed a resistance from the endocrinologist to refer me to an oncologist but this time, being so direct, he gave me a contact. However, since it took me 8 or 9 days, I looked around my area and got one for the next day.
        </P>
        
        <P>
        I cannot say that it went well for me but in the end everything was left undefined; all can be. So I will be objective. It was Thursday, March 3, 2022. He began by asking who was taking care of her and following up. It visibly upset him when I told him an endocrinologist, when he was expecting an oncologist. I think he felt attacked, invaded, and behaved like the well-known car mechanic who raises the hood and irresponsibly criticizes the work of the one who came before him.
        </P>
        
        <P>
        The oncologist found it 'unlikely' that the situation of the right adrenal cortex had caused these metastases. Although it seemed 'possible', for him there was not even evidence of a tumor in that gland, since the ultrasound only showed it to be 'enlarged'. And it seemed 'more likely' that it was all a simple liver tumor that migrated to the lungs.
        </P>
        
        <P>
        As such, the only hope was in conventional chemotherapy, those that destroy cancer cells but also bone marrow, invalidating the body's defenses, preparing it for the next expansion of cancer, and almost always causing death. While he told me that she was not going to resist conventional chemotherapy due to the state of her liver, he filled out some orders for blood and heart studies to start as soon as possible. I did not see him again.
        </P>
        
        <P>
        Before I left on this whirlwind visit (because it seemed like I was being kicked out, as if there were people waiting outside, which there were not), I wondered how I knew the metastases were from adrenal carcinoma and not something else. I realized what the best answer to that was, and I spoke up: if the secondaries were not cancer cells of adrenal origin, there was no reason for resistance to mitotane. Mitotane's delay in destroying the adrenal cortices and causing corticosteroid insufficiency was the best proof I had of the accuracy of the endocrinologist's diagnosis. But the oncologist had to redouble the bet: he denied to death that mitotane is a chemotherapeutic drug. For him, it was an endocrine hormone-regulating drug and could never harm a tumor.
        </P>
        
        <P>
        I tried to tell him that that is what it does at low doses but at high doses it really destroys, as I had researched myself. He did not want to listen to me. In my eyes, his only interest was to deny the diagnosis of the colleague (or non-colleague) who had made him 'lack of ethics' by 'invading' the market. And, perhaps, sell me a chemotherapy that does not work and causes suffering. I was very beaten. I doubted everything, the type of cancer, the mitotane and the endocrinologist, and I thought that Ally was about to collapse.
        </P>
        
        <P>
        But then I started to investigate. That mitotane does chemotherapy I saw that all the sites that talk about the subject say it. I also got hold of a report summarizing over a decade of mitotane treatment in dogs from a university which, while the survival numbers are not too optimistic, made it clear to me that mitotane can kill adrenal tumors and lung metastases, at least. And regarding the oncologist's alternative diagnosis, I read that tumors that originate in the liver are much less frequent than those that arrive as metastases, and that, if they do occur, one would expect to see one large tumor instead of many small ones.
        </P>
        
        <P>
        It seemed that nothing that man said made any sense. I found him on social media to finally write him off as a complete asshole. I told the endocrinologist about all this and he told me: “<I>Oncology of the endocrine system is terrifying in Argentina; oncologists know nothing... that is why endocrinologists do not refer</I>”. However, the possibility of a misdiagnosis resurfaced later, with the tomography and the apparent ambiguous result of 60 days of mitotane at an increased dose.
        </P>

    </>}




    <div style={ subtitleStyles } id={'13'}>
        {!isEnglish ? "Mitotano y trilostano" : "Mitotane and trilostane"}
    </div>

    {!isEnglish ? <>

        <P>
        Para estos días entendí algo que también puede servir. Absolutamente todo lo que pude leer acerca del mitotano es anterior a la existencia del trilostano, y esto es bastante importante. El mitotano se usa para tratar el mal de Cushing en animales desde los años 60. Lo común nunca fue hacer una quimioterapia que cause la completa destrucción de las cortezas suprarrenales y una insuficiencia de corticoides para después suplementar con corticoides sintéticos (terapia de reemplazo) sino que lo normal siempre fue buscar una destrucción parcial de la corteza tumorosa para forzarla a producir menos corticoides, primero con un período de inducción de suministrodiario y después con una dosis semanal, y nada más. (En este otro tratamiento, la única suplementación es con prednisolona, sin fludrocortisona.)
        </P>
        
        <P>
        El trilostano hace el mismo servicio pero a través de una inhibición de las glándulas, sin causar destrucción parcial. Parece que en los ensayos clínicos que se hicieron, ambas terapias dieron resultados similares solo que el mitotano causa más efectos secundarios como vómitos, diarrea, náuseas e intolerancia a largo plazo. Por eso el trilostano salió victorioso y vivimos hoy en la era del trilostano. Pero esto no sale gratis: el mitotano tiene la capacidad de destruir metástasis incipientes. En cambio, como en el caso de Ally, tomar solo el inhibidor puede hacer que el cuerpo se llene de tumores en poco tiempo sin que se note. De ahí surge la necesidad de respetar una rutina bimensual de estudio de por vida; rutina que, a diferencia de la que me dieron a mí, sí tiene que incluir el estudio de los pulmones.
        </P>

        <P>
        No leí de ningún perro que tuviera la vena cava inferior ocupada por un tumor suprarrenal pero supongo que se sobreentiende que todos los tratados con mitotano tienen esta ramificación, y por eso se los llama inoperables. Pero es más llamativo que no se mencione el tema tampoco después de iniciado el tratamiento, como si no hubiese nada para decir. No aparece como un desafío para el intento de salvarlos y tampoco se llega a una situación en la que el tumor se vuelva extirpable como gracia de la quimioterapia. Solamente no se lo menciona nunca.
        </P>

    </>:<>

        <P>
        For these days I understood something that can also serve. Absolutely everything I could read about mitotane predates trilostane, and this is pretty important. Mitotane has been used to treat Cushing's disease in animals since the 1960s. The common thing was never to do chemotherapy that causes the complete destruction of the adrenal cortices and corticosteroid insufficiency and then supplement with synthetic corticosteroids (replacement therapy) but that the normal thing was always to look for a partial destruction of the tumorous cortex to force it to produce less corticosteroids, first with an induction period of daily supply and then with a weekly dose, and nothing more. (In this other treatment, the only supplementation is with prednisolone, without fludrocortisone.)
        </P>
        
        <P>
        Trilostane does the same service but through an inhibition of the glands, without causing partial destruction. It seems that in the clinical trials that were done, both therapies gave similar results only that mitotane causes more side effects such as vomiting, diarrhea, nausea and long-term intolerance. That is why trilostane was victorious and we live today in the trilostane era. But this does not come for free: mitotane has the ability to destroy incipient metastases. Instead, as in Ally's case, taking the inhibitor alone can cause the body to swarm with tumors in a short time without being noticed. Hence the need to respect a bimonthly study routine for life; routine that, unlike the one they gave me, does have to include the study of the lungs.
        </P>

        <P>
        I have not read of any dog that had an inferior vena cava occupied by an adrenal tumor, but I guess it goes without saying that all those treated with mitotane have this branch, and that is why they are called inoperable. But it is more striking that the subject is not mentioned even after the treatment has started, as if there was nothing to say. It does not appear as a challenge for the attempt to save them and neither does it reach a situation in which the tumor becomes extirpable as a result of chemotherapy. It is just never mentioned.
        </P>

    </>}

{/* ############################ */}


    <div style={ subtitleStyles } id={'14'}>
        {!isEnglish ? "Mudanza y aumentos de dosis" : "Moving and dose increases"}
    </div>

    {!isEnglish ? <>

        <P>
        Cuando me mudé con ella el día 25 del tratamiento (2 de marzo), lo primero que quise hacer fue saber cuál era la tolerancia máxima de Ally al mitotano. Venía consumiendo 400 mg y este día lo subí a 500. Sobre el final del día, la noté con problemas de coordinación, como si estuviese ligeramente ebria. Aparte dejó una buena diarrea en la madrugada. También fue el primer día de antibióticos pero con el tiempo se vio que los antibióticos no le causaban diarrea. Me di cuenta así que 450 mg diarios era el límite y que la droga no estaba adulterada o diluida (estos son los efectos secundarios característicos del mitotano).
        </P>
        
        <P>
        También comencé a aumentar un poco la dosis de trilostano para reducir la deshidratación y combatir la infección urinaria. Me instalaba allí para asumir personalmente la problemática de reducirle el apetito y aun así darle 450 mg de mitotano al día en 3 comidas. Pasé gradualmente de 7,5 mg a 20 mg diarios en 5 días. Pesaba 3,5 kg con grasa visceral y pérdida de musculatura. Se puso muy bien de los signos del Cushing y la infección pero, acto seguido, comencé a reducir rápidamente la dosis porque, con el apetito normalizado, cada vez me costaba más que comiera con el mitotano adentro de la comida.
        </P>
        
        <P>
        En los días siguientes, creí que el tumor primario estaba próximo a desaparecer y que ya no debía usar trilostano en absoluto, por el riesgo de bajar demasiado los corticoides. Algunos días no le di, y otros días le di 3 o 4 mg si tenía apetito anormalmente alto. Fue un error de ansiedad pero hay que entender que, para los corticoides, la consigna era mejor de más que de menos. Había riesgo de muerte en corticoides bajos.
        </P>
        
        <P>
        El día 35 se desató una crisis de emisión de fluidos infecciosos como no se había visto antes. La noche anterior la había llevado a una reunión familiar. Volví a introducir trilostano, ahora de forma racionada porque ya casi no me quedaba y tenía que esperar unos días para volver a conseguir; usé como 4 mg al día. Se deterioró rápido. Mucho Cushing: hambre, sed, fluidos infecciosos. Cuando compré de nuevo, el día 38, se recuperó muy rápido. Introduje 15 mg las primeras 24 hs, 12 las siguientes y 10 las siguientes.
        </P>

    </>:<>

        <P>
        When I moved in with her on day 25 of treatment (March 2), the first thing I wanted to do was find out what Ally's upper tolerance for mitotane was. She had been consuming 400 mg and this day I increased it to 500. Towards the end of the day, I noticed her with coordination problems, as if she were slightly drunk. Apart left a good diarrhea in the early morning. It was also the first day of antibiotics but over time it was seen that the antibiotics did not cause diarrhea. I realized then that 450 mg daily was the limit and that the drug was not adulterated or diluted (these are the characteristic side effects of mitotane).
        </P>
        
        <P>
        I also started to slightly increase the trilostane dose to reduce dehydration and combat the urinary tract infection. I was installed there to personally take on the problem of reducing his appetite and still giving him 450 mg of mitotane per day in 3 meals. I gradually went from 7.5mg to 20mg daily in 5 days. He weighed 3.5 kg with visceral fat and loss of muscle. He got very well from the signs of Cushing's and the infection but, immediately afterwards, I began to quickly reduce the dose because, with his appetite normalized, it was becoming more and more difficult for me to eat with the mitotane in the food.
        </P>
        
        <P>
        In the following days, I thought that the primary tumor was about to disappear and that I should no longer use trilostane at all, due to the risk of lowering the corticosteroids too much. Some days I didn't give him, and other days I gave him 3 or 4 mg if he had an abnormally high appetite. It was an anxiety error but it must be understood that, for corticosteroids, the slogan was better than more than less. There was a risk of death in low corticosteroids.
        </P>
        
        <P>
        On the 35th, a crisis of emission of infectious fluids was unleashed as had not been seen before. The night before he had taken her to a family gathering. I reintroduced trilostane, now in a rationed way because I hardly had any left and I had to wait a few days to get it again; I used like 4mg a day. It deteriorated fast. Much Cushing: hunger, thirst, infectious fluids. When I bought again, on day 38, it recovered very quickly. I introduced 15 mg the first 24 hours, 12 the following and 10 the following.
        </P>

    </>}




    <div style={ subtitleStyles } id={'15'}>
        {!isEnglish ? "La fallida terapia de reemplazo de corticoides: primera crisis" : "The failed corticosteroid replacement therapy: first crisis"}
    </div>

    {!isEnglish ? <>

        <P>
        Llegó entonces el viernes 18 de marzo de 2022, el día 41 del tratamiento. A media mañana, la noté dolorida al ponerse en 4 patas. Me pareció que no tenía fuerzas en las patas traseras o que le dolía el abdomen. Me preocupé por el hígado. Días después hubo otras 2 veces en que me pareció que le dolía el abdomen, teniendo mucho ruido de fluidos del lado derecho, y lo resolví de inmediato con 100 mg de paracetamol.
        </P>
        
        <P>
        Mientras tanto, no entendía lo que pasaba pero me pareció una buena idea no darle comida, suspender el mitotano pero darle 5 mg de trilostano diluido en leche para evitar que volviera el Cushing, y esperar; estos 5 mg completan los 10 que mencioné antes. Acto seguido, se puso mal de otra manera. Ya no parecía dolorida sino débil, decaída, caminaba lento y mirando el piso; más o menos como estaba esperando que ocurriera por efecto de la quimioterapia y la deficiencia de corticoides.
        </P>
        
        <P>
        A la hora, me convencí de que me había equivocado al darle inhibidor de corticoides y usé por primera vez los corticoides sintéticos, en dosis bajas: como 30 microgramos de fludrocortisona y 1 mg de prednisolona; o sea, el 30% y el 50% respectivamente de la dosis diaria de reemplazo. No sé por qué pero mejoró de inmediato. Esta mejora fue causa de gran confusión en los días siguientes porque ninguna de estas 2 drogas es de efecto inmediato. El breve y pobre texto del endocrinólogo que explicaba el tratamiento hablaba de inyecciones para casos de emergencia, pero no lo asocié con una posible demora en el efecto de los productos de vía oral, sino con la imposibilidad de lograr que comiera.
        </P>
        
        <P>
        Creí que había llegado el momento de suplementar con corticoides cada 12 horas de por vida. O sea, que la inducción podía darse por terminada, a efectos prácticos.
        </P>
        
        <P>
        Con ella en bienestar, los corticoides sintéticos consumidos al mediodía y la falsa idea de que ya no dependería de la glándula tumorosa, esa noche quise darle 150 mg de mitotano. No tenía demasiado apetito y solo iba a comer si no encontraba drogas dentro de la comida. Quise triturar el mitotano y meterlo en la carne. Comió la mitad pero le hizo muy mal. Fue la primera de 5 crisis, todas en marzo (18, 19, 20, 24, 30), que tuvieron estas características:
        </P>

        <P style={ toggleListStyles }>
            <li>
            caminaba poco y lento, con la cabeza totalmente hacia abajo;
            </li>
        </P>
            
        <P style={ toggleListStyles }>
            <li>
            al querer beber agua temblaba frente al plato, como no pudiendo, con impotencia, para luego beber sumergiendo la nariz en el agua, con las consecuentes molestias por el agua ingresada en las vías respiratorias;
            </li>
        </P>
            
        <P style={ toggleListStyles }>
            <li>
            si le ofrecíamos comida, comía.
            </li>
        </P>

        <P>
        A diferencia de lo que se esperaba de la quimioterapia, estos signos ocurrían con hambre y sed, y el comportamiento frente al agua no estaba en los papeles. Fue muy confuso, y queriendo resolver esta confusión fue que acabamos en la tomografía que le costó la vida, el día 60.
        </P>

    </>:<>

        <P>
        Then came Friday March 18, 2022, the 41st day of treatment. At mid-morning, I noticed her sore when she got on all fours. It seemed to me that he had no strength in his hind legs or that his abdomen ached. I was worried about the liver. Days later there were 2 other times when it seemed to me that his abdomen hurt, having a lot of noise of fluids on the right side, and I resolved it immediately with 100 mg of paracetamol.
        </P>
        
        <P>
        In the meantime, I didn't understand what was happening but it seemed like a good idea not to give him food, stop the mitotane but give him 5 mg of trilostane diluted in milk to prevent the Cushing's from coming back, and wait; these 5 mg complete the 10 that I mentioned before. Then it got bad in another way. She no longer seemed in pain but rather weak, listless, she walked slowly and looked at the floor; more or less as I expected it to happen due to the effect of chemotherapy and corticosteroid deficiency.
        </P>
        
        <P>
        Within an hour, I was convinced that I had made a mistake by giving him a corticosteroid inhibitor and I used synthetic corticosteroids for the first time, in low doses: like 30 micrograms of fludrocortisone and 1 mg of prednisolone; that is, 30% and 50%, respectively, of the daily replacement dose. I don't know why but it got better immediately. This improvement was a cause of great confusion in the following days because neither of these 2 drugs has an immediate effect. The brief and poor text from the endocrinologist that explained the treatment spoke of injections for emergency cases, but I did not associate it with a possible delay in the effect of oral products, but with the impossibility of getting him to eat.
        </P>
        
        <P>
        I thought the time had come to supplement with corticosteroids every 12 hours for life. In other words, the induction could be terminated, for practical purposes.
        </P>
        
        <P>
        With her in well-being, the synthetic corticosteroids consumed at noon and the false idea that she would no longer depend on the tumorous gland, that night I wanted to give her 150 mg of mitotane. He didn't have much of an appetite and would only eat if he didn't find drugs in the food. I wanted to grind up the mitotane and put it in the meat. He ate half but it made him very ill. It was the first of 5 crises, all in March (18, 19, 20, 24, 30), which had these characteristics:
        </P>

        <P style={ toggleListStyles }>
            <li>
            she walked little and slowly, with his head completely down;
            </li>
        </P>
            
        <P style={ toggleListStyles }>
            <li>
            when wanting to drink water, she trembled in front of the plate, as if she couldn't, helplessly, to later drink by submerging his nose in the water, with the consequent discomfort due to the water entering the respiratory tract;
            </li>
        </P>
            
        <P style={ toggleListStyles }>
            <li>
            if we offered her food, she would eat.
            </li>
        </P>

        <P>
        A diferencia de lo que se esperaba de la quimioterapia, estos signos ocurrían con hambre y sed, y el comportamiento frente al agua no estaba en los papeles. Fue muy confuso, y queriendo resolver esta confusión fue que acabamos en la tomografía que le costó la vida, el día 60.
        </P>

    </>}




    <div style={ subtitleStyles } id={'16'}>
        {!isEnglish ? "Los caóticos 20 días finales" : "The chaotic final 20 days"}
    </div>

    {!isEnglish ? <>

        <P>
        Sufrí estos días no tener instrumentos de medición para saber lo que estaba pasando y tomar decisiones de inmediato, como sí le pasa, por ejemplo, al insulinodependiente con el glucómetro. Estuve cerca de comprar un tensiómetro para animales caro y de dudosa calidad pero leí a los compradores decepcionados. Y los análisis de sangre y orina demoraban al menos 2 días, y casi siempre 5. Ante la adversidad, comencé a llevar registro detallado de todo lo que observaba y de todas las drogas y dosis que introducía, buscando entender lo que el endocrinólogo no me explicaba y lo que internet no me decía.
        </P>
        
        <P>
        El 18 no solo fue un viernes malo sino que también inauguró los 20 días finales, donde la terapia de reemplazo fue caótica, con días de evidente insuficiencia y días de evidente exceso de hormonas corticoides, y hasta de combinación a un mismo tiempo. Todos llegaron a creer después que la muerte fue para dejar de sufrir pero en realidad solo sufrió en estos 20 días y solo 5 fueron malos en crisis de 9 horas, algunos fueron regulares y otros buenos, y, como voy a argumentar, fue sufrimiento por lo caótico del tratamiento, la falta de instrucción y la ausencia de instrumentos de medición, y no por la enfermedad en sí. 
        </P>

        <P>
        Pero sí era doloroso verla tomar agua como desesperada, con ruidos raros, y atragantarse y escupir o vomitar parte de lo bebido al caminar pocos pasos. También que pidiera comida a cada rato y que se lamiese y bebiese los fluidos infecciosos todo el tiempo. Había veces que se manchaba la nariz, que estaba completamente seca, y le quedaba amarilla por días, imposible de lavar. Y los pegotes duros que le quedaban en los pelos de la parte trasera y las patas se los arrancaba, dejando partes peladas.
        </P>

    </>:<>

        <P>
        I suffered these days not having measuring instruments to know what was happening and make decisions immediately, as happens, for example, to the insulin dependent with the glucometer. I was close to buying an expensive and questionable animal blood pressure monitor but read disappointed buyers. And the blood and urine tests took at least 2 days, and almost always 5. Faced with adversity, I began to keep a detailed record of everything I observed and of all the drugs and doses that I introduced, trying to understand what the endocrinologist did not tell me. explained and what the internet didn't tell me.
        </P>
        
        <P>
        The 18th was not only a bad Friday, but also inaugurated the final 20 days, where replacement therapy was chaotic, with days of evident insufficiency and days of evident excess of corticoid hormones, and even a combination at the same time. Everyone came to believe later that death was to stop suffering but in reality he only suffered in these 20 days and only 5 were bad in a crisis of 9 hours, some were regular and others good, and, as I am going to argue, it was suffering for the chaos of the treatment, the lack of instruction and the absence of measurement instruments, and not because of the disease itself.
        </P>

        <P>
        But it was painful to see her desperately drink water, with strange noises, and choke and spit or vomit part of what she had drunk when walking a few steps. Also that he asked for food every so often and that he licked himself and drank the infectious fluids all the time. There were times when he stained his nose, which was completely dry, and it remained yellow for days, impossible to wash off. And the hard lumps that remained on the hairs on the back and legs were pulled out, leaving bare patches.
        </P>

    </>}



    
    <div style={ subtitleStyles } id={'17'}>
        {!isEnglish ? "Las otras crisis" : "The other crises"}
    </div>

    {!isEnglish ? <>

        <P>
        Me pareció bueno en estos 3 días (18, 19, 20 de marzo) dar los corticoides sintéticos pero combinarlos con 5 mg de trilostano para invalidar la producción de lo que quedaba de glándula tumorosa, y así suavizar la transición. No sé si fue mala idea o si solo la implementé mal por haberle dado menos de la fludrocortisona de la indicada: entre 30 y 50 microgramos en vez de 100, y por no conocer los tiempos de acción de las diferentes drogas. Y considerar que, en líneas generales, estos últimos 20 días también fueron de mitotano alto, aunque más bajo: si el promedio diario fue 360 mg los primeros 40 días, en los 20 siguientes fue de 200. Pero primero los hechos:
        </P>

        <P style={ toggleListStyles }>
            <li>
            El sábado 19 de marzo la vi caminando muy temprano por el pasillo con la cabeza medio gacha. Me levanté y le di corticoides en leche. Al rato se vino a acostar conmigo totalmente recuperada. Fue otro motivo para afianzar la confusión. Más verosímil para explicar la recuperación terminó siendo que se estaban cumpliendo 9 horas desde el último trilostano y 18 desde la última fludrocortisona, como se esboza más abajo.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            Cerrando un día bueno, quise darle los 150 mg de mitotano que faltaban para completar los 400 mg del día. No tenía mucha hambre y no quería comer con drogas adentro de la carne y quisimos triturarle el mitotano como la noche anterior. Pocos minutos después de comer comenzó la segunda crisis. De hecho, juraría que empezó con los síntomas antes de terminar de comer, que no comió mucho. Eran cerca de las 21 hs, y se recuperó como a las 6 de la mañana, como el día anterior pero con una hora corrida hacia atrás.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            Creí que el mitotano triturado estaba causando una intoxicación en el cerebelo. Por eso, el domingo 20 fue día de descanso de mitotano, pero no funcionó. Después de cenar, decayó. Fue más leve tal vez; no parecía deshidratada y ya había comido, así que solo durmió.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            El lunes 21 empecé el antibiótico nuevo (amoxicilina con ácido clavulánico) y hablé con el endocrinólogo, que me convenció de suspender los corticoides sintéticos pero mantener el mitotano. Acepté pero este día y el siguiente tuve que usar trilostano para sofocar un apetito exagerado, que venía acompañado con deshidratación. También un poco el miércoles. Total: 12 mg, 10 mg, 2 mg. No volví a usar trilostano, excepto dos excepciones aisladas más adelante.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            El jueves 24, feriado, tuvo la cuarta crisis, con la particularidad de haber sido la única diurna, entre las 13:15 hs y las 22 hs. Había tomado 150 mg de mitotano a las 10 hs y nada más. Esta vez, la crisis parecía por insuficiencia de corticoides sin ayuda del trilostano; es decir, que la glándula tumorosa ya no podía producir suficientes hormonas ante el ataque del mitotano. A mis ojos, este día 47 del tratamiento era equivalente al día 5 del tratamiento sin metástasis: el día de la introducción definitiva de los corticoides sintéticos, de por vida. A las 14 hs y a las 16 hs le di corticoides, sumando 70 microgramos de fludrocortisona y 3 mg de prednisolona. 
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            El viernes 25 de marzo y hasta la crisis del miércoles 30 casi no hubo rastros de la infección urinaria. Por otro lado, desde este día me dediqué a mantenerle altas las dosis de corticoides, convencido de que las 4 crisis que había tenido eran de insuficiencia de corticoides, las primeras 3 ayudadas por el trilostano y la cuarta por avance del tratamiento. Y sin embargo tuvo una quinta crisis, más difícil de explicar, la noche del miércoles 30. Fueron entre 100 y 130 microgramos de fludrocortisona al día hasta la noche previa a la muerte y entre 3 y 1,5 mg de prednisolona al día hasta el 1 de abril, cuando la quité.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            El 25 pacté un turno para tomografía y me dediqué desde entonces a buscar la estabilización, aunque me costase dosis de mitotano. Tenía 13 días para lograr el fin de las crisis, la estabilización hormonal, la hidratación y el fin de la infección urinaria.
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            El 25 y el 26 tuvo Cushing alto. El 27 no pero por la noche le temblaban las patas traseras al caminar, luego de la cena, pero lo asocié a una caída del sillón. El 28 y el 29 fueron días tranquilos pero con algunos signos de Cushing. Sobre el final del 29, temblaba al comer hueso y después le dio una crisis muy breve y distinta a las otras: algo en las patas traseras no la dejaba caminar bien, el abdomen estaba completamente inflamado, temblaba y respiraba agitada. Le di paracetamol pero mejoró antes de que pudiera hacer efecto, y durmió bien. Pensé que tenía la presión muy baja o muy alta, con deshidratación y fiebre.
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            El 30 tuvo las emisiones infecciosas descontroladas, seguramente por el exceso de prednisolona. Frente al cuadro de deshidratación, especialmente notorio en la nariz y en la manera de tomar agua, ruidosa y muy frecuente, no le di mitotano como excepción, a ver si mejoraba de esto. Esta noche pasaron dos cosas: tuvo la quinta y última crisis de la cabeza hacia abajo y le di por error, cuando ya había empezado, 130 microgramos de fludrocortisona en vez de los 65 que tenía pensados (cerró el día con 180). Llevaba yo muchos días durmiendo mal. Ella comió un poco de lo que había quedado de la cena y durmió. Tuvo emisiones altas este 30 y el 31, y de nuevo del 4 al 6 de abril.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            El 31 fue un día tranquilo pero con Cushing: deshidratación, orina, hambre. Después de cenar y durante toda la madrugada tomó agua en cantidades desesperantes. Aparentemente, era el efecto retrasado del error en la fludrocortisona de 26-30 horas antes. Fue una noche eterna, tanto que a las 4 de la mañana le di trilostano a ver si apagaba el incendio, que no sé si hizo efecto porque después siguió con Cushing, aunque la crisis en sí terminó como a las 5. Unas horas antes había tomado una muestra de orina para análisis y unos horas después le sacaron sangre. Los resultados dieron números disparatados, como no podía ser de otra manera, y hasta fracasó el intento del laboratorio de medir las concentraciones de sodio. Quedé en repetir el estudio inmediatamente después de la tomografía.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            El 1 de abril, sobre el final de un día bueno, descubrí en internet que el acetato de fludrocortisona es mineralocorticoide y glucocorticoide a la vez y el panoraba parecía empezar a aclararse, como digo a continuación. Parece obvio ahora, no obstante recuerdo bien lo difícil que fue encontrar respuestas. A la noche estornudaba.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            El 2 de abril estaba muy bien, salvo por un poco de Cushing. Tuvo control presencial con el endocrinólogo a las 12 hs, primera vez que se la llevaba desde enero, que quedó sorprendido por lo bien que la vio. Hablamos principalmente de la infección y coincidimos en eliminar la prednisolona.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            Los 4 días finales están marcados por signos de Cushing alto a pesar del mitotano, del retiro de la prednisolona y de la reducción de dosis de la fludrocortisona a 90 microgramos. Junto con el Cushing, había fluidos de la infección y una manera voraz de beber, y a veces temblaba al comer hueso, como con alguna dificultad motriz o un pico de ansiedad o presión arterial alta o baja.
            </li>
        </P>

    </>:<>

        <P>
        It seemed good to me in these 3 days (March 18, 19, 20) to give the synthetic corticosteroids but to combine them with 5 mg of trilostane to invalidate the production of what remained of the tumorous gland, and thus smooth the transition. I don't know if it was a bad idea or if I just implemented it wrong because I gave him less fludrocortisone than indicated: between 30 and 50 micrograms instead of 100, and because I didn't know the action times of the different drugs. And consider that, in general terms, these last 20 days were also high mitotane, although lower: if the daily average was 360 mg the first 40 days, in the next 20 it was 200. But first the facts:
        </P>

        <P style={ toggleListStyles }>
            <li>
            On Saturday, March 19, I saw her walking down the hall very early with her head half bowed. I got up and gave him corticosteroids in milk. After a while she came to sleep with me totally recovered. It was another reason to entrench the confusion. More likely to explain the recovery ended up being that it was 9 hours since the last trilostane and 18 hours since the last fludrocortisone, as outlined below.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            Closing a good day, I wanted to give him the 150 mg of mitotane that was missing to complete the 400 mg for the day. He wasn't very hungry and he didn't want to eat with drugs inside the meat and we wanted to crush the mitotane like the night before. A few minutes after eating, the second crisis began. In fact, I could have sworn that the symptoms started before he finished eating, that he didn't eat much. It was around 9:00 p.m., and he recovered at around 6:00 a.m., like the day before, but one hour back.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            I thought the crushed mitotane was causing cerebellar poisoning. For this reason, Sunday the 20th was a mitotane rest day, but it did not work. After dinner, he collapsed. It was milder perhaps; she didn't seem dehydrated and she had already eaten, so she just slept.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            On Monday the 21st, I started the new antibiotic (amoxicillin with clavulanic acid) and spoke with the endocrinologist, who convinced me to suspend the synthetic corticosteroids but keep the mitotane. I accepted but this day and the next I had to use trilostane to quell an exaggerated appetite, which was accompanied by dehydration. Also a little on Wednesday. Total: 12mg, 10mg, 2mg. I did not use trilostane again, except for two isolated exceptions later.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            On Thursday the 24th, a holiday, he had the fourth crisis, with the particularity of having been the only one during the day, between 1:15 p.m. and 10 p.m. He had taken 150 mg of mitotane at 10 am and nothing else. This time, the crisis seemed to be due to corticosteroid insufficiency without the help of trilostane; that is, the tumorous gland could no longer produce enough hormones when attacked by mitotane. In my eyes, this day 47 of treatment was equivalent to day 5 of treatment without metastasis: the day of the definitive introduction of synthetic corticosteroids, for life. At 2:00 p.m. and 4:00 p.m. I gave him corticosteroids, adding 70 micrograms of fludrocortisone and 3 mg of prednisolone. 
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            On Friday, March 25, and until the crisis on Wednesday, March 30, there were almost no traces of urinary infection. On the other hand, from that day on I dedicated myself to keeping his corticosteroid doses high, convinced that the 4 crises he had had were corticosteroid insufficiency, the first 3 helped by trilostane and the fourth due to treatment progress. And yet he had a fifth crisis, more difficult to explain, on the night of Wednesday the 30th. It was between 100 and 130 micrograms of fludrocortisone a day until the night before his death and between 3 and 1.5 mg of prednisolone a day until the April 1, when I removed it.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            On the 25th I made an appointment for tomography and since then I have dedicated myself to seeking stabilization, even though it cost me doses of mitotane. He had 13 days to achieve the end of the crises, hormonal stabilization, hydration and the end of the urinary infection.
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            On the 25th and 26th he had a high Cushing. Not on the 27th, but at night his hind legs trembled when he walked, after dinner, but I associated it with a fall from the chair. The 28th and 29th were calm days but with some signs of Cushing. Around the end of the 29th, she trembled when eating bone and then she had a very brief crisis and different from the others: something in her hind legs did not allow her to walk properly, her abdomen was completely swollen, she trembled and she was breathing heavily. I gave her paracetamol but she got better before it could take effect, and she slept well. I thought I had very low or very high blood pressure, with dehydration and a fever.
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            On the 30th he had uncontrolled infectious emissions, probably due to the excess of prednisolone. Faced with the picture of dehydration, especially noticeable in the nose and in the way of drinking water, noisy and very frequent, I did not give him mitotane as an exception, to see if he improved from this. Two things happened tonight: he had his fifth and final head-down seizure and I mistakenly gave him 130 micrograms of fludrocortisone when he had already started instead of the 65 he had planned (he closed the day with 180). I had been sleeping badly for many days. She ate a little of what was left over from dinner and slept. It had high emissions this 30 and 31, and again from April 4 to 6.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            The 31st was a quiet day but with Cushing: dehydration, urine, hunger. After dinner and throughout the morning he drank water in desperate amounts. Apparently it was the delayed effect of the error in fludrocortisone from 26-30 hours earlier. It was an eternal night, so much so that at 4 in the morning I gave him trilostane to see if it would put out the fire, which I don't know if it had an effect because later he continued with Cushing, although the crisis itself ended around 5. A few hours before he had A urine sample was taken for analysis and a few hours later blood was drawn. The results gave crazy numbers, how could it be otherwise, and even the laboratory's attempt to measure sodium concentrations failed. I agreed to repeat the study immediately after the tomography.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            On April 1st, towards the end of a good day, I discovered on the internet that fludrocortisone acetate is both a mineralocorticoid and a glucocorticoid and the picture seemed to start to clear up, as I say below. It seems obvious now, but I remember well how difficult it was to find answers. At night he sneezed.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            April 2nd was fine, except for a little Cushing. She had face-to-face control with the endocrinologist at 12 noon, the first time he had taken her since January, who was surprised by how well he saw her. We mainly talked about the infection and agreed to eliminate the prednisolone.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            The final 4 days are marked by high Cushing's signs despite mitotane, prednisolone withdrawal, and fludrocortisone dose reduction to 90 micrograms. Along with Cushing's, there were fluids from the infection and a ravenous way of drinking, and sometimes trembling when eating bone, as with some motor difficulty or a spike of anxiety or high or low blood pressure.
            </li>
        </P>

    </>}




    <div style={ subtitleStyles } id={'18'}>
        {!isEnglish ? "Glucocorticoides y mineralocorticoides" : "Glucocorticoids and mineralocorticoids"}
    </div>

    {!isEnglish ? <>

        <P>
        Eso fue lo que pasó, resumidamente. La explicación que parece más verosímil, aunque parezca ridículo que un informático formule tesis de trabajo de la ciencia médica, siendo, no obstante, que no es mi culpa; la explicación más verosímil parece ser que Ally tenía los mineralocorticoides demasiado bajos pero los glucocorticoides demasiado altos. Así se podría explicar el hambre y la sed combinados con presión arterial baja, náuseas y visión borrosa, en un contexto de deshidratación con inmunodepresión.
        </P>

        <P>
        Los días 18, 19 y 20 fueron 3 días de combinar trilostano con corticoides sintéticos porque me pareció buena idea suavizar la terapia de reemplazo dándole los sintéticos preventivamente y, a la vez, darle trilostano para invalidar una producción interna de corticoides que se encimara a los otros. Pero me pregunto hoy por qué le di de fludrocortisona menos de la dosis indicada (un tercio o la mitad de los 100 microgramos recetados), mientras le daba también más prednisolona de la recetada (como el doble o un 50% más del miligramo indicado). La primera es una droga que, evidentemente, subestimé porque no entendía lo que hacía.
        </P>

        <P>
        Siempre estuvo claro que el Cushing es el puñado de síntomas que causa el exceso de corticoides: inmunodepresión, deshidratación, retención de sodio, expulsión del potasio, presión arterial alta, glucosa en sangre alta, hambre por los carbohidratos, hígado graso, pérdida de musculatura, degradación del pelaje, panza abalonada en torno al hígado. El único corticoide mencionado hasta las metástasis fue el cortisol. El cortisol parecía ser la única hormona secretada por la glándula tumorosa, y parecía explicarlo todo. Sin embargo, en las cortezas suprarrenales se producen 3 tipos de hormonas en 3 capas sucesivas: en la más interna, hormonas sexuales; en la del medio, glucocorticoides; y en la más exterior, mineralocorticoides. Y el cortisol es únicamente el glucocorticoide más importante y mayoritario del cuerpo.
        </P>
        
        <P>
        Pero para entender la terapia de reemplazo hay que ir más allá. Las hormonas mineralocorticoides, con la aldosterona como principal y mayoritaria, regulan la relación proporcional entre sodio y potasio del cuerpo a través de la sed, la retención de líquido y la eliminación de minerales por la orina. La presión arterial es una consecuencia de este juego de proporciones entre los minerales. Si una enfermedad hace que los mineralocorticoides estén altos (mal de Cushing), se va a retener sodio de más, se va a eliminar potasio de más y se va a tener más líquido y más presión arterial de lo que es correcto. Por el contrario, si una enfermedad hace que los mineralocorticoides estén bajos (mal de Addison), se va a retener menos sodio del necesario, se va a retener más potasio del saludable y se va a tener poco líquido y menos presión arterial de lo que es correcto.
        </P>
        
        <P>
        Yo sabía que en lo peor del 2020, Ally tenía la presión alta, como también la tuvo alta justo antes de empezar el tratamiento con mitotano en enero de 2022, y el 2 de abril, justo después del accidente de la dosis errada de fludrocortisona. Son las 3 veces que le tomó la presión el endocrinólogo, único profesional con este aparato de los que yo conocí. Ignoré el concepto de mineralocorticoides hasta avanzado el tratamiento con mitotano, y hasta entonces siempre había creído que la presión alta era una consecuencia indirecta del cortisol (glucocorticoide), porque obliga al hígado a liberar sus reservas de glucosa, causando niveles altos de glucosa y triglicéridos en sangre. Estaba equivocado; la glucosa y los triglicéridos no aumentan la presión arterial.
        </P>

        <P>
        Por esto es que creo que las crisis en las que no podía levantar la cabeza eran, ante todo, crisis de mineralocorticoides insuficientes, causando presión arterial baja, mareos, náuseas y visión borrosa, pero con glucocorticoides excesivos a la vez, provocando sed, deshidratación y hambre. Pero tengo en contra que para la última crisis, el 30 de marzo, llevaba 6 días a más de 100 microgramos, sin trilostano. Lo que puedo hacer es esbozar una explicación <I>ad hoc</I> basada en el cuadro de deshidratación que causaba el exceso de glucocorticoides, como si yo le hubiese provocado una crisis de presión arterial baja aun con la cantidad correcta de aldosterona en sangre. Con suficiente fludrocortisona y sin prednisolona solo tuvo Cushing, que, eventualmente, se corregía bajando la dosis de la primera. Es lo mejor que puedo formular.
        </P>

    </>:<>

        <P>
        That was what happened, in short. The explanation that seems most plausible, although it seems ridiculous that a computer scientist formulates work thesis of medical science, being, however, that it is not my fault; the most plausible explanation seems to be that Ally had too low mineralocorticoids but too high glucocorticoids. This could explain the hunger and thirst combined with low blood pressure, nausea and blurred vision, in a context of dehydration with immunosuppression.
        </P>

        <P>
        Days 18, 19 and 20 were 3 days of combining trilostane with synthetic corticosteroids because it seemed like a good idea to soften the replacement therapy by giving the synthetics preventively and, at the same time, giving trilostane to invalidate an internal production of corticosteroids that overlapped the others. But I'm wondering today why I gave him less than the prescribed dose of fludrocortisone (a third or a half of the prescribed 100 micrograms), while also giving him more prednisolone than prescribed (like double or 50% more than the prescribed milligram)? . The first is a drug that I obviously underestimated because I didn't understand what it did.
        </P>

        <P>
        It has always been clear that Cushing's is the handful of symptoms that corticosteroid excess causes: immunosuppression, dehydration, sodium retention, potassium excretion, high blood pressure, high blood glucose, carb starvation, fatty liver, muscle loss , fur degradation, ballooning belly around the liver. The only corticosteroid mentioned until metastases was cortisol. Cortisol seemed to be the only hormone secreted by the tumor gland, and it seemed to explain everything. However, in the adrenal cortices, 3 types of hormones are produced in 3 successive layers: in the innermost, sex hormones; in the middle, glucocorticoids; and in the outermost, mineralocorticoids. And cortisol is only the most important and major glucocorticoid in the body.
        </P>
        
        <P>
        But to understand replacement therapy you have to go further. Mineralocorticoid hormones, with aldosterone as the main and majority, regulate the proportional relationship between sodium and potassium in the body through thirst, fluid retention and the elimination of minerals in the urine. Blood pressure is a consequence of this set of proportions between minerals. If a disease causes mineralocorticoids to be high (Cushing's disease), you will retain too much sodium, you will excrete too much potassium, and you will have more fluid and higher blood pressure than is correct. On the other hand, if a disease causes mineralocorticoids to be low (Addison's disease), you will retain less sodium than necessary, you will retain more potassium than is healthy, and you will have little fluid and lower blood pressure than you it is right.
        </P>
        
        <P>
        I knew that in the worst of 2020, Ally had high blood pressure, just as she had high blood pressure just before starting mitotane treatment in January 2022, and on April 2, right after the fludrocortisone misdose accident. They are the 3 times that the endocrinologist took his pressure, the only professional with this device that I knew. I ignored the concept of mineralocorticoids until well into mitotane treatment, and until then I had always believed that high blood pressure was an indirect consequence of cortisol (glucocorticoid), because it forces the liver to release its glucose stores, causing high glucose and triglyceride levels in blood I was wrong; glucose and triglycerides do not increase blood pressure.
        </P>

        <P>
        This is why I believe that the crises in which I couldn't lift my head were primarily crises of insufficient mineralocorticoids, causing low blood pressure, dizziness, nausea and blurred vision, but with excessive glucocorticoids at the same time, causing thirst, dehydration and hungry. But I have against that for the last crisis, on March 30, I had been at more than 100 micrograms for 6 days, without trilostane. What I can do is sketch an <I>ad hoc</I> explanation based on the dehydration caused by excess glucocorticoids, as if I had given her a low blood pressure crisis even with the correct amount of aldosterone in her blood. blood. With enough fludrocortisone and without prednisolone, she only had Cushing's, which was eventually corrected by lowering the dose of the former. It's the best I can formulate.
        </P>

    </>}




    <div style={ subtitleStyles } id={'19'}>
        {!isEnglish ? "Los tiempos de acción de las drogas" : "Drug action times"}
    </div>

    {!isEnglish ? <>
    
        <P>
        El otro gran problema que tuvimos fue el de los tiempos de acción de las drogas. Digo de nuevo lo que pienso pero sigue siendo especulativo. Suponiendo, de acuerdo a lo que observé en estas semanas, que la prednisolona demoraba 9 horas en hacer efecto pero la fludrocortisona 18 horas:
        </P>

        <P style={ toggleListStyles }>
            <li>
            Cuando el viernes 18 de marzo (primera crisis) le di mitotano por la noche, las concentraciones de glucocorticoides estaban más altas de lo normal porque le había dado prednisolona 9 horas antes pero las de mineralocorticoides estaban por debajo de lo normal porque aun no había impactado la fludrocortisona, y bajaron incluso más, causando una crisis de 9 horas, las 9 horas que faltaban para que hiciera efecto la fludrocortisona y para que se recuperara la producción natural.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            Los problemas del sábado 19 y el domingo 20 se pueden explicar por la dosis baja que usé de fludrocortisona junto con trilostano y mitotano, al tiempo que los glucocorticoides estaban altos por la dosis excesiva de prednisolona, y duraron 9 horas esencialmente por la recuperación natural de la producción y por el final de la situación inflamatoria del metabolismo.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            La crisis del 24 de marzo, que fue la única sin intervención de corticoides sintéticos, el mitotano causó una deficiencia grave de mineralocorticoides sin ayuda del mitotano, por simple efecto de la quimioterapia, y se recuperó simplemente por acción de la producción natural de la glándula y por cumplirse 12 horas desde la última fludrocortisona.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            El 30 de marzo tenía sin duda niveles correctos de fludrocortisona pero llevaba algunos días abusando de la prednisolona.
            </li>
        </P>

        <P>
        La demora en el efecto de los corticoides explicaría también por qué salió de las crisis del 20, 24 y 30 con Cushing alto. Si esto es correcto, las crisis de la cabeza hacia abajo eran engendro mío por no conocer las suplementaciones, en sus funciones y sus tiempos de acción.
        </P>

    </>:<>

        <P>
        The other big problem we had was the action time of the drugs. I say again what I think but it remains speculative. Assuming, according to what I observed in these weeks, that prednisolone took 9 hours to take effect but fludrocortisone 18 hours:
        </P>

        <P style={ toggleListStyles }>
            <li>
            When on Friday March 18 (first crisis) I gave him mitotane at night, the concentrations of glucocorticoids were higher than normal because he had been given prednisolone 9 hours before, but those of mineralocorticoids were below normal because he had not yet had an impact. fludrocortisone, and they went even lower, causing a 9-hour crisis, the 9 hours that were missing for the fludrocortisone to take effect and for the natural production to recover.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            The problems on Saturday the 19th and Sunday the 20th can be explained by the low dose I used of fludrocortisone along with trilostane and mitotane, while the glucocorticoids were high due to the excessive dose of prednisolone, and they lasted 9 hours essentially due to the natural recovery of production and by the end of the inflammatory situation of the metabolism.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            The crisis of March 24, which was the only one without the intervention of synthetic corticosteroids, mitotane caused a serious deficiency of mineralocorticoids without the help of mitotane, due to the simple effect of chemotherapy, and was recovered simply by the action of the natural production of the gland and for 12 hours after the last fludrocortisone.
            </li>
        </P>

        <P style={ toggleListStyles }>
            <li>
            On March 30, she certainly had correct levels of fludrocortisone but had been abusing prednisolone for a few days.
            </li>
        </P>

        <P>
        The delay in the effect of the corticosteroids would also explain why he came out of the crises of 20, 24 and 30 with a high Cushing. If this is correct, the crises from the head down were my creation for not knowing the supplements, their functions and their action times.
        </P>

    </>}




    <div style={ subtitleStyles } id={'20'}>
        {!isEnglish ? "Metástasis cerebral que no era" : "Brain metastasis that was not"}
    </div>

    {!isEnglish ? <>

        <P>
        El feriado jueves 24 de marzo, durante la anteúltima crisis de cabeza hacia abajo (la única diurna), redacté bien los comportamientos visibles en mensajes al endocrinólogo, quien sugirió que se trataban de tumores metastásicos en el cerebro, los que estarían causando problemas motrices al bajar las concentraciones de corticoides, por sus funciones antiinflamatorias.
        </P>
        
        <P>
        Por estos días yo estaba pensando en hacer una radiografía de tórax y abdomen, un estudio poco demandante y poco invasivo. Pero después de esto, creí que había llegado el momento de una tomografía completa, bastante cara y bastante invasiva. No podía avanzar a la segunda etapa, caracterizada por corticoides bajos de por vida, sin saber si ella necesitaba tenerlos altos por la presencia de tumores en el cráneo y sin saber si el mitotano estaba funcionando sobre los secundarios del hígado y los pulmones.
        </P>
        
        <P>
        El que me dijo dónde hacían tomografías fue el endocrinólogo también. Allí moriría el 6 de abril, el día 60 del tratamiento.
        </P>

    </>:<>

        <P>
        On the holiday Thursday, March 24, during the penultimate crisis of head down (the only one during the day), I wrote well the visible behaviors in messages to the endocrinologist, who suggested that they were metastatic tumors in the brain, which would be causing motor problems when lower corticosteroid concentrations, due to their anti-inflammatory functions.
        </P>
        
        <P>
        These days I was thinking of doing an X-ray of the chest and abdomen, an undemanding and minimally invasive study. But after this, I thought it was time for a fairly expensive and quite invasive full scan. She could not advance to the second stage, characterized by low corticosteroids for life, without knowing if she needed to have them high due to the presence of skull tumors and without knowing if the mitotane was working on the secondaries of the liver and lungs.
        </P>
        
        <P>
        The one who told me where they did CT scans was also the endocrinologist. There he would die on April 6, the 60th day of treatment.
        </P>

    </>}




    <div style={ subtitleStyles } id={'21'}>
        {!isEnglish ? "La rinitis" : "Rhinitis"}
    </div>

    {!isEnglish ? <>

        <P>
        Adhiero a las investigaciones científicas que presentan al uso de antibióticos como si se tratase de bombardear una metrópolis entera para derrotar a una banda de delincuentes. Por eso no fue algo divertido para mí darle antibióticos a Ally sabiendo lo malos que son, pero supuse que no era tiempo de pensar en el largo plazo. Finalmente, fue demasiado evidente como para cuestionarlo que la cantidad de fluidos con pus que perdía por las vías urinarias iba de nada a muchísimo dependiendo enteramente de los glucocorticoides y absolutamente nada de los antibióticos. Es decir, cuando el cortisol estaba en buen nivel, se apreciaba un consumo normal de agua y comida y se iban las emisiones, pero cuando estaban altos, bebía mucho, tenía hambre a cada rato por carbohidratos y perdía fluidos por todas partes.
        </P>
        
        <P>
        Para cuando Ally estaba en tratamiento, ya estaba bastante claro para mí que lo que la gente y los alergistas llaman "rinitis alérgica" se trata de un desequilibro en las relaciones de poder entre hongos y bacterias en la mucosa nasal. No es una alergia. Alergia es cuando el sistema inmunológico ataca algo que no debería atacar. En cambio, lo que ocurre acá es que el sistema inmunológico reacciona correctamente a la enorme cantidad de basura tóxica que producen los hongos. Por tanto, la fórmula para desarrollar una “rinitis alérgica” es tomar antibióticos para destruir a las bacterias de la mucosa nasal, junto con corticoides para anestesiar al sistema inmunológico en la zona. Se le libera así la zona a los hongos para que avancen y tomen posición. Después vienen los estornudos y los mocos, según la humedad del ambiente, el consumo de carbohidratos industriales y alcohol y la concentración de corticoides en sangre.
        </P>
        
        <P>
        Por eso me tocó predecir con éxito lastimoso que si le daba antibióticos líquidos en la boca, y que si le diluía ahí los corticoides, iba a tener ataques de estornudos, por si quedaba alguna duda. Pasó sus últimas semanas estornudando a cada rato, salvo cuando tenía Cushing muy alto. El resto es explicar, al menos como excusa, por qué cuesta tanto esconder drogas en la comida de una perra tan chica, de estómago cerrado y harta de tantas drogas.
        </P>

    </>:<>

        <P>
        I adhere to scientific research that presents the use of antibiotics as if it were about bombing an entire metropolis to defeat a gang of criminals. So it wasn't fun for me to give Ally antibiotics knowing how bad they are, but I figured it wasn't time to think about the long term. Ultimately, it was too obvious to question that the amount of pus-containing fluids he was losing through his urinary tract ranged from nothing to a great deal depending entirely on glucocorticoids and absolutely nothing on antibiotics. That is, when cortisol was at a good level, there was a normal consumption of water and food and the emissions went away, but when they were high, I drank a lot, I was constantly hungry for carbohydrates and I lost fluids everywhere.
        </P>
        
        <P>
        By the time Ally was in treatment, it was already quite clear to me that what people and allergists call "allergic rhinitis" is about an imbalance in the power relations between fungi and bacteria in the nasal mucosa. It's not an allergy. Allergy is when the immune system attacks something that it shouldn't attack. Instead, what happens here is that the immune system reacts correctly to the enormous amount of toxic waste that the fungi produce. Therefore, the formula for developing "allergic rhinitis" is to take antibiotics to destroy the bacteria in the nasal mucosa, along with corticosteroids to anesthetize the immune system in the area. This frees the area for the fungi to advance and take up position. Then come sneezing and runny nose, depending on the humidity of the environment, the consumption of industrial carbohydrates and alcohol, and the concentration of corticosteroids in the blood.
        </P>
        
        <P>
        That is why I had to predict with pitiful success that if I gave him liquid antibiotics in his mouth, and that if I diluted the corticosteroids there, he would have sneezing attacks, in case there was any doubt. He spent his last weeks sneezing every few minutes, except when he had a very high Cushing. The rest is to explain, at least as an excuse, why it is so difficult to hide drugs in the food of such a small dog, with a closed stomach and fed up with so many drugs.
        </P>

    </>}




    <div style={ subtitleStyles } id={'22'}>
        {!isEnglish ? "El día final" : "The last day"}
    </div>

    {!isEnglish ? <>

        <P>
        La decisión de retirar completamente la prednisolona (glucocorticoide) y mantener alrededor de 100 microgramos de fludrocortisona (mineralocorticoide y glucocorticoide) pareció correcta en los días que van de la crisis del 30 de marzo a la muerte el 6 de abril. Bien o mal, hubo 7 días sin crisis. Sin embargo, esta dosis de 0,1 mg dio la apariencia de ser excesiva en las 72 hs finales. Razoné que si el cálculo eran 30 microgramos por kilo de perro (3,5 kg por 30), tal vez había que calcular sobre un pesaje de 2,8 kg por la pérdida de musculatura que causó el Cushing.
        </P>

        <P>
        Quise esperar hasta después de la tomografía para bajar la dosis de fludrocortisona; no obstante, el martes (el día anterior a la tomografía) probé darle trilostano buscando bajar los síntomas. No hubo ningún efecto apreciable. O sea, los síntomas eran por los corticoides de vía oral y no por el tumor. Así razoné y es difícil que no sea así.
        </P>

        <P>
        El 6 de abril de 2022 era el día que estaba esperando. Quiero decir, pasé de evitar la tomografía por querer evitarle el mal momento a mi perra a desearla con anhelo. Consideraba terminada la etapa de inducción y quería saber 5 cosas para avanzar con confianza a la segunda etapa del tratamiento.
        </P>
        
        <P>
        Por cierto, si la primera etapa consistió en destruir el tumor primario, hacerle todo el daño posible a los secundarios y conseguir un control externo y consciente de los niveles de corticoides en sangre, la segunda etapa era esta: reducir todo lo posible los niveles de corticoides para encender al máximo el sistema inmunológico, volver a la comida única nocturna, eliminar los carbohidratos de nuevo, maximizar la producción de macrófagos con vitamina D3 (que ya le estaba dando desde principios de marzo), y, de ser posible, alcalinizar el cuerpo con bicarbonato de sodio y potasio; y, desde ya, seguir con el mitotano. (Lo de quitar los carbohidratos se revisa cuando hay metástasis avanzadas porque comen tanta glucosa que matan de hambre a las células sanas y se puede causar hipoglucemia).
        </P>
        
        <P>
        Por eso las 5 cosas que yo le pedía a la tomografía eran estas:
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            tumor primario destruido;
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            ausencia de tumores en el cráneo;
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            ausencia de tumores linfáticos en la zona de la garganta;
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            explicación optimista a las masas que asomaban del lado izquierdo;
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            alguna reducción de los secundarios, o al menos que no hubiesen avanzado.
            </li>
        </P>
        
        <P>
        El último es el punto más polémico. Yo decía que si a pesar de haber pasado 2 meses volando de corticoides y comiendo carbohidratos, los secundarios no habían logrado avanzar, entonces tendríamos una visión muy positiva para la segunda etapa. Lo menciono porque, al mismo tiempo, todo profesional de la medicina exigía inmediata eutanasia al ver las imágenes de la radiografía, como pasaría el día de la tomografía.
        </P>
        
        <P>
        Cuando se acercaba la hora de partir me debatí sobre si darle la fludrocortisona del día o salteármela hasta la vuelta. La verdad es que volaba de Cushing y chorreaba fluidos infecciosos, pero hacia el mediodía se fue normalizando, al pasar las 14 horas desde la última toma de corticoides. Decidí darle a la vuelta.
        </P>
        
        <P>
        En el taxi, cerca de llegar después de 30 minutos de viaje, comenzó a hacer ruido al ventilar, parecido a aquella vez que terminamos en urgencias pero más suave. Quise pensar que era sed, pero no bebió ni orinó.
        </P>
        
        <P>
        En la clínica quisieron ver la radiografía de febrero. Se lamentaron pero no cancelaron la tomografía ni mencionaron riesgos. Sí me dijeron que no usaban anestesia sino sedantes.
        </P>

    </>:<>
    
        <P>
        The decision to completely withdraw prednisolone (glucocorticoid) and maintain around 100 micrograms of fludrocortisone (mineralocorticoid and glucocorticoid) seemed correct in the days between the attack on March 30 and death on April 6. Right or wrong, there were 7 days without seizures. However, this 0.1 mg dose appeared to be excessive in the final 72 hours. I reasoned that if the calculation was 30 micrograms per kilo of dog (3.5 kg per 30), perhaps one had to calculate on a 2.8 kg weight for the loss of muscle caused by Cushing's.
        </P>

        <P>
        I wanted to wait until after the scan to lower the dose of fludrocortisone; however, on Tuesday (the day before the tomography) I tried to give him trilostane trying to reduce the symptoms. There was no appreciable effect. In other words, the symptoms were due to oral corticosteroids and not due to the tumor. That's how I reasoned and it's hard not to be like that.
        </P>

        <P>
        April 6, 2022 was the day I was waiting for. I mean, I went from avoiding the scan because I wanted to spare my dog ​​a bad time to wanting her badly. He considered the induction stage over and wanted to know 5 things to confidently advance to the second stage of treatment.
        </P>
        
        <P>
        By the way, if the first stage consisted of destroying the primary tumor, doing as much damage as possible to the secondary ones and achieving an external and conscious control of the levels of corticosteroids in the blood, the second stage was this: reduce the levels of corticosteroids as much as possible. corticosteroids to turn on the immune system to the max, go back to eating only at night, eliminate carbohydrates again, maximize the production of macrophages with vitamin D3 (which I was already giving him since the beginning of March), and, if possible, alkalize the body with bicarbonate of sodium and potassium; and, of course, continue with mitotane. (Removing carbohydrates is reviewed when there are advanced metastases because they eat so much glucose that they starve healthy cells and can cause hypoglycemia).
        </P>
        
        <P>
        That is why the 5 things that I asked of the tomography were these:
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            primary tumor destroyed;
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            absence of tumors in the skull;
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            absence of lymphatic tumors in the throat area;
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            optimistic explanation to the masses that appeared on the left side;
            </li>
        </P>
        
        <P style={ toggleListStyles }>
            <li>
            some reduction of secondaries, or at least that they had not advanced.
            </li>
        </P>
        
        <P>
        The last is the most controversial point. I said that if, despite having spent 2 months flying off corticosteroids and eating carbohydrates, the secondary ones had not been able to progress, then we would have a very positive vision for the second stage. I mention it because, at the same time, every medical professional demanded immediate euthanasia when seeing the X-ray images, as would happen on the day of the tomography.
        </P>
        
        <P>
        As the time to leave approached, I debated whether to give him the fludrocortisone for the day or skip it until I got back. The truth is that he was flying from Cushing's and was dripping with infectious fluids, but by noon he was returning to normal, after 14 hours had passed since the last corticosteroid intake. I decided to turn it around.
        </P>
        
        <P>
        In the taxi, close to arriving after 30 minutes of travel, it began to make noise when ventilating, similar to that time we ended up in the emergency room but softer. I wanted to think it was thirst, but he didn't drink or urinate.
        </P>
        
        <P>
        At the clinic they wanted to see the X-ray from February. They regretted but did not cancel the scan or mention risks. They did tell me that they did not use anesthesia but sedatives.
        </P>

    </>}




    <div style={ subtitleStyles } id={'23'}>
        {!isEnglish ? "El estudio y la eutanasia" : "Study and euthanasia"}
    </div>

    {!isEnglish ? <>

        <P>
        25 minutos después me la devolvieron, mientras se despertaba. La levantamos. Me dieron un CD con las imágenes y parecía que nos íbamos. Pero había algo raro en su mueca, la manera de poner la boca y la mirada perdida. La apoyamos en la mesa y la vimos hacer fuerza para respirar. Pedí ayuda y mencioné que tal vez necesitase corticoides por su condición. No me prestaron atención; creyeron que exageraba.
        </P>
        
        <P>
        Se fue haciendo más evidente que no podía abrir los pulmones. La alcé y mi hermana pudo verle la lengua violeta. Ahí sí nos tomaron en serio y se la llevaron a la sala de shock. La sedaron y le metieron el hocico en una máscara plástica hecha con una botella con una manguera que daba oxígeno. Mientras estuvo bien sedada se quedó en la máscara.
        </P>
        
        <P>
        Volví a explicar la condición pero nadie quería darle corticoides. Yo tenía una ampolla de glucocorticoides en la mochila y una jeringa. No tenía mineralocorticoides inyectables; ni tampoco el valor para usar la ampolla por mi cuenta.
        </P>
        
        <P>
        Recibí ahí un gran golpe que me preparó para el KO por parte del encargado de la sala de shock, que creo que era cirujano. Cuando le dije que ella no producía corticoides y después agregué que en lo que iba del día no le había dado corticoides porque había tenido signos de Cushing alto, preguntó si tenía Cushing o si no producía corticoides, como si hubiese una contradicción muy evidente en mi relato. La respuesta era muy sencilla: tenía Cushing por el suministro externo de una dosis incorrectamente alta. Pero me costó unos segundos poder decirle eso. La verdad que apartó la mirada al decirlo. No me creía. Es más, me estaba descalificando. Quería imponerse sobre mí y hacer prevalecer su voluntad eutanasiadora. Por supuesto que él no conocía el mitotano pero preguntó si le había hecho cirugía de remoción de adrenales. Expliqué que no porque ya era inoperable cuando estuvo el diagnóstico y le mencioné el asunto de la vena cava inferior.
        </P>
        
        <P>
        Se fue un momento. Cuando volvió dijo haber visto la tomografía, que el estado de los pulmones era extremadamente malo y de que era el momento de dejarla ir con una inyección letal. Intenté explicarle que el estado de los pulmones era extremadamente malo desde hacía meses y que, no obstante, respiraba todos los días; y que, de hecho, había entrado a la clínica caminando. Que los sedantes y la situación la habían metido en una crisis y necesitaba llevármela. Pero la mojó a los costados y le puso un ecógrafo para mostrarme que había tumores muy grandes. El más grande tenía 18 milímetros, supe al día siguiente.
        </P>
        
        <P>
        Como no me derrotaba, redobló la apuesta diciendo que el pulmón derecho ya casi no tenía espacio propio y que el otro estaba en parte tomado también, y que así no podía vivir. Le pregunté si había visto el hígado y me dijo que sí, que el tumor suprarrenal estaba ahí invadiendo la vena cava inferior y que “todo el abdomen era un gran tumor”. Me retiró la mirada cuando lo decía. Me pregunté si solamente estaba repitiendo lo que le dije antes porque no podía ser que las imágenes mostraran eso.
        </P>
        
        <P>
        Quise insistir para que la sacaran de la crisis con corticoides porque era sin duda lo que necesitaba para respirar bien, pero para ellos yo tenía que aprovechar la oportunidad de quitarle la vida de manera ordenada y sin dolor en vez de llevármela para que después tuviese una crisis peor en mi casa, algunos días después. O sea que, ahora, no había disentimiento en la causa de la crisis pero sí una imposición de ejecutar una eutanasia allí mismo.
        </P>
        
        <P>
        No atiné a llamar al endocrinólogo, quien días después diría que “sedantes con corticoides y un diurético la hubieran sacado de la crisis”. Tampoco tuve la rebeldía de usar la ampolla por mi cuenta o de mirar la tomografía en la computadora de la otra sala. Lo que dijo el encargado de la sala de shock me hizo creer que el tratamiento nunca funcionó, y que quizás nos habíamos precipitado al aceptar sin más que los tumores eran metástasis adrenales; en fin, que había hecho todo mal y solamente estaba haciendo sufrir a mi perra.
        </P>
        
        <P>
        Me siguieron atormentando para que aceptara una eutanasia con distintos argumentos, mencionando lo terrible de los resultados en las imágenes y las virtudes humanísticas de hacerlo. Se turnaban los distintos empleados para taladrarme la cabeza. Ally esforzándose por respirar me desmoralizaba más a cada minuto. Mi hermana salió para llamar a mi madre para que viniese y no volví a pensar en los corticoides. Pedí que le dieran más sedante hasta que llegara ella, mientras le sostenía la manguera de oxígeno frente a la boca. Cada vez la sedaban menos, seguramente para no matarla sin autorización.
        </P>
        
        <P>
        En 30 minutos llegó mi madre. Para entonces yo estaba vencido y apuré a la gente para que lo hicieran cuanto antes. Firmé la eutanasia apoyando la cabeza sobre Ally porque no quería que me alejara de ella. Fue un alivio después de dos horas de verla esforzarse por respirar. Fueron 2 horas desde que me la devolvieron. Me fui con el aplastamiento de quien lleva a su perra amada a un estudio, esperanzado, pero lo obligan a matarla, como si de una oportunidad única se tratase.
        </P>
        
        <P>
        Los veterinarios en la clínica del tomógrafo no sabían qué tipo de cáncer tenía, no sabían qué tratamiento estaba haciendo, no sabían cuál era el punto de partida sobre el cual comparar la situación y no sabían si yo soy un desquiciado que no sabía desprenderse de su perro terminal o si en realidad sí sabía lo que estaba haciendo. Llegué al lugar con muchas dudas sobre el tratamiento, no estaba bien instruido sobre el uso de corticoides inyectables en urgencias y no me esperaba nada de lo que pasó.
        </P>

    </>:<>

        <P>
        25 minutes later it was returned to me, while waking up. We lift it. They gave me a CD with the images and it seemed that we were leaving. But there was something odd about her grimace, the way she set her mouth and the lost look. We supported her on the table and watched her gasp for breath. I asked for help and mentioned that he might need corticosteroids for his condition. They paid no attention to me; They thought he exaggerated.
        </P>
        
        <P>
        It became more apparent that he couldn't open his lungs. I held her up and my sister could see her purple tongue. There they did take us seriously and took her to the shock room. They sedated her and put her nose into a plastic mask made from a bottle with a hose that gave oxygen. While she was well sedated she stayed in the mask.
        </P>
        
        <P>
        I explained the condition again but no one wanted to give him corticosteroids. I had a vial of glucocorticoids in my backpack and a syringe. He had no injectable mineralocorticoids; nor the courage to use the vial on my own.
        </P>
        
        <P>
        I took a big hit there that set me up for KO by the shock room attendant, who I think was a surgeon. When I told her that she did not produce corticosteroids and then added that so far this day I had not given her corticosteroids because she had had signs of high Cushing's, she asked if she had Cushing's or if she did not produce corticosteroids, as if there was a very evident contradiction in my story. The answer was very simple: he had Cushing's from the external supply of an incorrectly high dose. But it took me a few seconds to tell him that. The truth that he looked away when he said it. He didn't believe me. What's more, he was disqualifying me. He wanted to impose himself on me and make his euthanasia will prevail. Of course he didn't know about mitotane but he asked if she had had adrenal removal surgery. I explained no because it was already inoperable when the diagnosis was made and I mentioned the matter of the inferior vena cava.
        </P>
        
        <P>
        He was gone for a moment. When she returned, she said that she had seen the CT scan, that the condition of her lungs was extremely bad, and that it was time to let her go with a lethal injection. I tried to explain to him that the state of his lungs had been extremely bad for months and that, nevertheless, he was breathing every day; and that, in fact, he had entered the clinic on foot. That the sedatives and the situation had put her in a crisis and I needed to take her away. But he wet her sides and put an ultrasound on her to show me that there were very large tumors. The largest was 18 millimeters, I found out the next day.
        </P>
        
        <P>
        Since he didn't defeat me, he doubled the bet saying that the right lung hardly had any space of its own and that the other one was also partly taken, and that he couldn't live like that. I asked him if he had seen the liver and he said yes, that the adrenal tumor was there invading the inferior vena cava and that “the entire abdomen was a large tumor”. He looked away from me when he said it. I wondered if he was just repeating what I told him earlier because the pictures couldn't possibly show that.
        </P>
        
        <P>
        I wanted to insist that they get her out of the crisis with corticosteroids because it was undoubtedly what she needed to breathe well, but for them I had to take the opportunity to take her life in an orderly and painless way instead of taking her so that later she would have a worse crisis in my house, a few days later. In other words, now there was no dissent in the cause of the crisis, but there was an imposition to carry out euthanasia right there.
        </P>
        
        <P>
        I did not manage to call the endocrinologist, who days later would say that “sedatives with corticosteroids and a diuretic would have gotten her out of the crisis”. I also didn't have the rebelliousness to use the vial on my own or to look at the scan on the computer in the other room. What the person in charge of the shock room said made me believe that the treatment never worked, and that perhaps we had been too hasty in simply accepting that the tumors were adrenal metastases; in short, that I had done everything wrong and was only making my dog ​​suffer.
        </P>
        
        <P>
        They continued to torment me to accept euthanasia with different arguments, mentioning the terrible results in the images and the humanistic virtues of doing it. Different employees took turns drilling into my head. Ally gasping for breath made me more demoralized by the minute. My sister went out to call my mother to come and I didn't think about corticosteroids again. I asked for more sedation until she arrived, holding the oxygen hose to her mouth. They sedated her less and less, surely so as not to kill her without authorization.
        </P>
        
        <P>
        In 30 minutes my mother arrived. By then I was defeated and I pressed people to do it as soon as possible. I signed the euthanasia by resting my head on Ally because I didn't want to be away from her. It was a relief after two hours of watching her gasp for breath. It was 2 hours since they returned it to me. I left with the crush of someone who takes his beloved dog to a studio, hoping, but they force him to kill her, as if it were a unique opportunity.
        </P>
        
        <P>
        The vets at the CT scanner's clinic didn't know what type of cancer he had, they didn't know what treatment he was undergoing, they didn't know what the starting point was from which to compare the situation, and they didn't know if I was a madman who didn't know how to let go of his terminal dog or if he really did know what he was doing. I arrived at the place with many doubts about the treatment, I was not well instructed about the use of injectable corticosteroids in the emergency room and I did not expect anything of what happened.
        </P>

    </>}




    <div style={ subtitleStyles } id={'24'}>
        {!isEnglish ? "La tomografía" : "Tomography"}
    </div>

    {!isEnglish ? <>

        <P>
        No quise mirar las imágenes. 27 horas después de la muerte me llegó el informe, bastante breve. Al leerlo, primero me di cuenta que el cráneo estaba limpio, y la garganta también. Y después me llamó la atención que decía, palabras más, palabras menos, lo mismo que habían dicho la ecografía de enero y la radiografía de febrero, pero sumando un problema linfático de importancia secundaria.
        </P>
        
        <P>
        “Múltiples imágenes nodulares distribuidas a modo de suelta de globos, que presentan diámetros entre 2 y 18 milímetros”, “profuso infiltrado del espacio aéreo que se extiende en el parénquima de ambos pulmones”,  “áreas de consolidación y presencia de broncograma aéreo y aumento del patrón intersticial”, “a nivel abdominal se aprecia múltiples imágenes nodulares en el hígado de entre 2 y 23 milímetros de diámetro”, “marcada hepatomegalia” (inflamación del hígado), “el abdomen muestra linfadenopatías reactivas en el peritoneo” (tumores linfáticos infecciosos). Y la conclusión: "Imágenes obtenidas compatibles con múltiples imágenes nodulares en ambos pulmones y a nivel del hígado con presencia de linfonódulos reactivos a nivel del peritoneo que son compatibles con secundarismos (MTS)".
        </P>
        
        <P>
        Era hora de mirar las imágenes. Nunca había visto una tomografía computada. Miré mucho tratando de determinar si había empeorado o mejorado desde los estudios anteriores. Y anduve 2 días envenenado por no poder encontrar en las imágenes el tumor primario (que es muy notorio en la radiografía de febrero) ni la invasión de la vena cava inferior, que era lo que me había derrotado en la sala de shock. Respecto a las 5 cosas que yo necesitaba de la tomografía, las primeras 4 parecían cumplirse a mis ojos y quizás la última también: tumor primario destruido, ausencia de tumores en el cráneo, ausencia de tumores linfáticos en la zona de la garganta, explicación optimista a las masas que asomaban del lado izquierdo (parece que sí era el bazo empujado por el hígado), y alguna reducción de los secundarios, o al menos que no hubiesen avanzado.
        </P>

    </>:<>

        <P>
        I didn't want to look at the pictures. 27 hours after the death I received the report, quite brief. Reading it, I first noticed that the skull was clean, and the throat too. And then it caught my attention that he said, words more, words less, the same thing that the ultrasound in January and the X-ray in February had said, but adding a lymphatic problem of secondary importance.
        </P>
        
        <P>
        “Multiple nodular images distributed in the manner of balloon release, with diameters between 2 and 18 millimeters”, “profuse airspace infiltrate that extends into the parenchyma of both lungs”, “areas of consolidation and presence of air bronchogram and increased of the interstitial pattern”, “at the abdominal level multiple nodular images can be seen in the liver between 2 and 23 millimeters in diameter”, “marked hepatomegaly” (inflammation of the liver), “the abdomen shows reactive lymphadenopathy in the peritoneum” (lymphadenopathy infectious). And the conclusion: "Images obtained compatible with multiple nodular images in both lungs and at the level of the liver with the presence of reactive lymph nodes at the level of the peritoneum that are compatible with secondary (MTS)".
        </P>
        
        <P>
        It was time to look at the pictures. I had never seen a CT scan. I looked a lot trying to determine if it had gotten worse or better since the previous studies. And I spent 2 days poisoned by not being able to find the primary tumor in the images (which is very noticeable in the February X-ray) or the invasion of the inferior vena cava, which was what had defeated me in the shock room. Regarding the 5 things that I needed from the tomography, the first 4 seemed to be fulfilled in my eyes and perhaps the last one too: destroyed primary tumor, absence of tumors in the skull, absence of lymphatic tumors in the throat area, optimistic explanation to the masses that appeared on the left side (it seems that it was the spleen pushed by the liver), and some reduction of the secondary ones, or at least that they had not advanced.
        </P>

    </>}




    <div style={ subtitleStyles } id={'25'}>
        {!isEnglish ? "La conversación final" : "The final conversation"}
    </div>

    {!isEnglish ? <>

        <P>
        Mi incapacidad para ver el tumor primario en las imágenes de la tomografía me obligó a pedir una cita al endocrinólogo. Le dije que quería regalarle las drogas que me sobraron, una cantidad en dinero equivalente a todas las consultas que me cobró desde que lo conocí... que de todos modos no era mucho en comparación a las drogas y la tomografía; y que quería, también, conversar un poco para cerrar la historia.
        </P>
        
        <P>
        Habían pasado 3 días. Escuchó con atención lo que pasó en ese lugar. Por supuesto que no estuvo de acuerdo con lo que hicieron en el centro del tomógrafo y mencionó eso que dije: “sedantes, corticoides y diuréticos la sacaban de la crisis”. Pero también dijo que el estado del hígado era terminal y que le quedaban pocos días o semanas de vida. Habló del hígado, no habló de los pulmones. Y me mostró el tumor primario y la ramificación en la vena en las imágenes de la tomografía en la laptop que llevé.
        </P>
        
        <P>
        Lo de él no era novedad. Siempre creyó que era terminal, solo que nunca quiso detenerme. Como es investigador, le pareció interesante seguirme la corriente para ver qué lograba yo. Me di cuenta de esto en todo momento, aunque nunca me importó. Por cierto, tan investigador es que pocos minutos después de la muerte me pidió autorización para hacer una biopsia al cadáver. Tal vez dudó de su propio diagnóstico respecto a las metástasis o solo quería hacer investigaciones más profundas, como dijo.
        </P>
        
        <P>
        Y no es que me fíe del todo. Después de que le narrara lo que pasó en el centro y cómo me impusieron la eutanasia apuntando a una gravedad extrema en las imágenes, le indiqué qué era lo que tenía que decirme para que yo alcanzara la paz y cerrar la historia: básicamente, mostrarme el tumor primario en las imágenes y decirme que la situación de los pulmones no le permitía seguir viviendo. Me mostró el tumor adrenal y la ramificación en la vena como dos manchas blancas, chatas, del mismo lado que los tumores linfáticos, y que se ven idénticas a las manchas blancas chatas del lado sano. Le dije que sí pero hoy sigue siendo muy confuso. Pero no importa ya. Y cuanto más miro las imágenes más creo que los pulmones estaban mejor que en la radiografía. Aparte me acuerdo que no habló de los pulmones en ningún momento de la conversación sino solo del hígado. Pero ya no importa.
        </P>
        
        <P>
        Seguramente me voy a preguntar siempre si el estado era y siempre fue terminal. Al final de cuentas, todo quedó indefinido, por eso no doy nombres. No sé qué tipo de cáncer tenía, no sé si estaba funcionando el tratamiento, no sé si había manera de salvarla, no sé si me mintieron los profesionales, no sé si completé la inducción, no sé por qué tuvo 6 crisis, no sé qué le pasó en las 2 horas finales, no sé si hice lo correcto. Supongo que si 17 mil mg de mitotano en 59 días no le hicieron ningún daño aparente a los tumores del hígado, no había manera de salvarla, en definitiva. Por lo demás, queda claro que los profesionales que conocí no están preparados para curar una enfermedad grave sino solo para hacer algo en las etapas iniciales, y recomendar eutanasia después (o imponerla).
        </P>

        <P>
        Respecto al endocrinólogo, podría hacer un balance de pros y contras pero sería repetir. Lo recordaré como quien me mandó a la guerra con un cuchillo. Le estreché la mano con la mano abierta porque siempre percibí que no era un feligrés de la doctrina del coronavirus; y le dije que nos vemos pronto, pero no lo miré a los ojos. Espero no tener que volver a verlo.
        </P>

    </>:<>

        <P>
        My inability to see the primary tumor on the CT images forced me to make an appointment with the endocrinologist. I told him that I wanted to give him the drugs that I had left over, an amount in money equivalent to all the consultations that he charged me since I met him... which in any case was not much compared to the drugs and the tomography; and that he also wanted to talk a little to close the story.
        </P>
        
        <P>
        3 days had passed. He listened carefully to what happened in that place. Of course she did not agree with what they did in the tomograph center and mentioned what I said: “sedatives, corticosteroids and diuretics took her out of the crisis”. But he also said that the state of the liver was terminal and that he had only days or weeks to live. He talked about the liver, he didn't talk about the lungs. And he showed me the primary tumor and the branch in the vein in the CT images on the laptop I brought.
        </P>
        
        <P>
        His was nothing new. He always thought I was terminal, he just never wanted to stop me. Being a researcher, he found it interesting to humor me to see what I could achieve. I was aware of this at all times, although I never cared. By the way, he is such an investigator that a few minutes after death he asked me for permission to do a biopsy on the corpse. Perhaps he doubted his own diagnosis regarding metastases or just wanted to do more research, as he said.
        </P>
        
        <P>
        And it's not that I trust him at all. After I told him what happened in the center and how they imposed euthanasia on me pointing to extreme gravity in the images, I told him what he had to tell me so that I could achieve peace and close the story: basically, show me the primary tumor in the images and tell me that the situation of the lungs did not allow him to continue living. He showed me the adrenal tumor and branch vein as two flat white spots on the same side as the lymphatic tumors, and looking identical to the flat white spots on the healthy side. I said yes but today it is still very confusing. But it doesn't matter anymore. And the more I look at the images, the more I think the lungs were better than on the X-ray. Besides, I remember that he did not talk about the lungs at any point in the conversation, but only about the liver. But it doesn't matter anymore.
        </P>
        
        <P>
        Surely I will always ask myself if the state was and always was terminal. In the end, everything was undefined, that's why I don't give names. I don't know what type of cancer she had, I don't know if the treatment was working, I don't know if there was a way to save her, I don't know if the professionals lied to me, I don't know if I completed the induction, I don't know why she had 6 crises, I don't know what it happened to him in the final 2 hours, I don't know if I did the right thing. I suppose that if 17,000 mg of mitotane in 59 days did no apparent damage to the liver tumors, there was no way to save her, ultimately. For the rest, it is clear that the professionals I met are not prepared to cure a serious illness but only to do something in the initial stages, and recommend euthanasia afterwards (or impose it).
        </P>

        <P>
        Regarding the endocrinologist, I could make a balance of pros and cons but it would be repeating. I will remember him as the one who sent me to war with a knife. I shook his hand with an open hand because I always perceived that he was not a parishioner of the coronavirus doctrine; and I told him that we'll see each other soon, but I didn't look him in the eye. I hope I don't have to see it again.
        </P>

    </>}

    </>)
}
