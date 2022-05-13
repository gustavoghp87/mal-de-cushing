import { useSelector } from 'react-redux'
import { P, subtitleStyles, toggleListStyles } from '../css/styles'

export const Conclusions = () => {

    const { isEnglish } = useSelector(s => s)
    
    return (<>

    <div style={ subtitleStyles } id={'26'}> {!isEnglish ? "Conclusiones" : "Conclusions"} </div>

    <P>
    {!isEnglish ? <>
        Los que hacemos software estamos acostumbrados a que la gente del mundo publique sus resoluciones y sus explicaciones para que los lea quiensea que esté buscando. Por esa línea escribí, y dejé lo más claro que pude en este sitio los errores propios, la autocrítica que corresponde y lo que considero es el superlativo grado de atraso y subdesarrollo que tiene el ejercicio de las profesiones veterinarias. Por eso, considerar:
        </>:<>
        Those of us who make software are used to people around the world posting their resolutions and explanations for whoever is looking to read them. For that line I wrote, and I left as clear as I could on this site my own mistakes, the corresponding self-criticism and what I consider to be the superlative degree of backwardness and underdevelopment that the exercise of the veterinary professions has. Therefore, consider:
    </>}
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            El mal de Cushing surge de la degeneración como tumor de alguna de las glándulas que producen hormonas de estrés. Están especialmente expuestos los animales que procesan mal el estrés, el miedo, el temor y la ansiedad. A los de este tipo se los debe considerar animales frágiles y evitarles las situaciones que les son adversas; básicamente, las que les hacen temblar.
            </>:<>
            Cushing's disease arises from tumor-like degeneration of one of the glands that produce stress hormones. Animals that process stress, fear and anxiety poorly are particularly exposed. Those of this type should be considered fragile animals and avoid situations that are adverse to them; basically, the ones that make them tremble.
            </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Cuando un perro empieza a comer de más, a beber y orinar de más, tuerce su apetito hacia los carbohidratos, sean dulces o salados, y con mucha más razón si le aparece una barriga dura cerca de las costillas, lejos de los genitales, hay pérdida de musculatura y dan altos los valores en sangre de ALT-GPT, AST-GOT, triglicéridos, cortisol y sodio, es hora de hacer una prueba en orina de la relación cortisol/creatinina y de mirar las glándulas suprarrenales y el hígado con ecógrafo y los pulmones con radiografía.
            </>:<>
            When a dog starts to overeat, drink and urinate too much, it turns his appetite towards carbohydrates, be they sweet or salty, and with much more reason if a hard belly appears near the ribs, far from the genitals, there is loss of muscle and high blood levels of ALT-GPT, AST-GOT, triglycerides, cortisol and sodium, it is time to do a urine test of the cortisol/creatinine ratio and to look at the adrenal glands and the liver with ultrasound and the lungs with radiography.
        </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            El Cushing puede ser por tumor en esas glándulas o por tumor en la hipófisis, glándula que está en el centro del cráneo y le da órdenes a las suprarrenales. Este es inoperable siempre.
            </>:<>
            Cushing's desease can be due to a tumor in these glands or a tumor in the pituitary, a gland that is in the center of the skull and gives orders to the adrenal glands. This is always inoperable.
        </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Tanto el trilostano como el mitotano sirven para reducir la liberación de corticoides en ambos tipos de Cushing. Con los corticoides en niveles normales, deberían desaparecer los síntomas.
            </>:<>
            Both trilostane and mitotane serve to reduce corticosteroid release in both types of Cushing's desease. With corticosteroids at normal levels, the symptoms should disappear.
        </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Si el tumor está abajo, sobre los riñones, hay que removerlo cuanto antes y rehabilitar la glándula sana, salvo que ya haya invadido la vena cava inferior. Sobre la posibilidad de atacar con mitotano o radioterapia para liberar la vena y luego extirpar, considerar las posibilidades.
            </>:<>
            If the tumor is below, on the kidneys, it must be removed as soon as possible and the healthy gland rehabilitated, unless it has already invaded the inferior vena cava. On the possibility of attacking with mitotane or radiotherapy to free the vein and then remove it, consider the possibilities.
        </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Para evitar la muerte hay que evitar estas 3 cosas: crecimiento del primario, avance del primario sobre la vena cava inferior si es suprarrenal, y metástasis.
            </>:<>
            To avoid death, these 3 things must be avoided: growth of the primary, advancement of the primary over the inferior vena cava if it is suprarenal, and metastasis.
        </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Las 3 metas se logran con un sistema de defensas fuerte, que incluye evitar los carbohidratos, los antibióticos y el estrés y mantener bajos los niveles de cortisol. Podría ser bueno alcalinizar el cuerpo con dosis de bicarbonato de sodio, potasio y magnesio y fortalecer el sistema inmunológico con vitamina D3.
            </>:<>
            All 3 goals are achieved with a strong defense system, including avoiding carbohydrates, antibiotics, and stress, and keeping cortisol levels low. It might be good to alkalize the body with doses of bicarbonate of soda, potassium and magnesium and strengthen the immune system with vitamin D3.
        </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Se monitorea cada 2 meses por orina, sangre, ecografía y placa de tórax. Si el cortisol en orina está alto, aumentar la droga de inmediato porque baja las defensas, retroalimenta el crecimiento del tumor primario y facilita las metástasis. Prestar especial atención a los parámetros que podrían indicar enfermedad del hígado. Tener en cuenta que aunque las concentraciones de cortisol den bien cuando se tomen las muestras en días normales, puede que se disparen en los días especiales o ante situaciones especiales hasta niveles dañinos.
            </>:<>
            It should be monitored every 2 months by urine, blood, ultrasound and chest x-ray. If cortisol in urine is high, increase the drug immediately because it lowers the defenses, feeds back the growth of the primary tumor and facilitates metastasis. Pay special attention to parameters that could indicate liver disease. Keep in mind that although cortisol concentrations are fine when sampled on normal days, they may spike on special days or in special situations to harmful levels.
        </>}
        </li>
    </P>

    <P>
    {!isEnglish ? <>
        En caso de metástasis, primeramente se debería determinar si se trata de metástasis suprarrenal o si hay otro tipo de cáncer en el cuerpo que aprovechó la debilidad inmunológica que causa el cortisol alto. De confirmarse el tipo suprarrenal, se puede atacar inmediatamente con mitotano. En ese caso:
        </>:<>
        In case of metastasis, it should first be determined if it is adrenal metastasis or if there is another type of cancer in the body that took advantage of the immune weakness caused by high cortisol. If the adrenal type is confirmed, it can be attacked immediately with mitotane. Then:
    </>}
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Si hay metástasis importantes, hay que mantener una dosis de trilostano mientras se avanza.
            </>:<>
            If there are significant metastases, a dose of trilostane must be maintained while advancing.
        </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Al completarse la inducción, la nueva vida consiste en introducir corticoides sintéticos cada 12 horas en la dosis mínima que necesita para un día normal. Aprender las dosis y los tiempos de cada una de las drogas. Aprender a usar inyecciones de hidrocortisona y dexametasona y tener siempre a mano para usar si viene una crisis. Necesitará un plus de glucocorticoides cada vez que esté asustado o estresado o ansioso o se dé un golpe o desarrolle una infección, etcétera.
            </>:<>
            Upon completion of induction, the new life consists of introducing synthetic corticosteroids every 12 hours at the minimum dose needed for a normal day. Learn the doses and times of each of the drugs. Learn how to use hydrocortisone and dexamethasone injections and always have them on hand to use if a crisis comes. You'll need a glucocorticoid boost whenever it is scared or stressed or anxious or get hit or get an infection and so on.
        </>}
        </li>
    </P>

    <P style={ toggleListStyles }>
        <li>
        {!isEnglish ? <>
            Moverse dentro de un ámbito reducido con profesionales que conozcan el caso. Esconder al animal de los profesionales que no saben de qué se trata y se creen héroes por eutanasiar sin consideraciones.
            </>:<>
            Move within a small area with professionals who know the case. Hide the animal from professionals who do not know what it is about and believe they are heroes for euthanizing without consideration.
        </>}
        </li>
    </P>

    <P>
    {!isEnglish ? <>
        La otra opción, por supuesto, es considerar que un perro no debería vivir sin cortezas suprarrenales; darle más trilostano, fortalecer las defensas y ver si puede revertir el cuadro sin mitotano. No sé qué se podría lograr con dosis no quimioterapéuticas de mitotano, y desconozco lo que una quimioterapia convencional pudiera prometer; mi experiencia con un oncólogo veterinario fue la que narré.
        </>:<>
        The other option, of course, is to consider that a dog should not live without adrenal cortices; give it more trilostane, strengthen the defenses and see if it can reverse its state of health without mitotane. I do not know what could be achieved with non-chemo doses of mitotane, and I do not know what conventional chemotherapy might promise; my experience with a veterinary oncologist was the one I recounted.
    </>}
    </P>

    </>)
}
