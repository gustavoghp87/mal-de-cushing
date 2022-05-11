import { useSelector } from 'react-redux'
import { P, subtitleStyles, toggleListStyles } from '../css/styles'

export const Conclusions = () => {

    const { isEnglish } = useSelector(s => s)
    
    return (<>

    <div style={ subtitleStyles } id={'26'}> {!isEnglish ? "Conclusiones" : "Conclusions"} </div>

    {!isEnglish ?
        <P>
        Los que hacemos software estamos acostumbrados a que la gente del mundo publique sus resoluciones y sus explicaciones para que los lea quiensea que esté buscando. Por esa línea escribí, y dejé lo más claro que pude en este sitio los errores propios, la autocrítica que corresponde y lo que considero es el superlativo grado de atraso y subdesarrollo que tiene el ejercicio de las profesiones veterinarias. Por eso, considerar:
        </P>
        :
        <P>
        Those of us who make software are used to people around the world posting their resolutions and explanations for whoever is looking to read them. For that line I wrote, and I left as clear as I could on this site my own mistakes, the corresponding self-criticism and what I consider to be the superlative degree of backwardness and underdevelopment that the exercise of the veterinary professions has. Therefore, consider:
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            Cuando un perro empieza a comer de más, a beber y orinar de más, tuerce su apetito hacia los carbohidratos, sean dulces o salados, y con mucha más razón si le aparece una barriga dura cerca de las costillas, lejos de los genitales, hay pérdida de musculatura y dan altos los valores en sangre de ALT-GPT, AST-GOT, triglicéridos, cortisol y sodio, es hora de hacer una prueba en orina de la relación cortisol/creatinina y de mirar las glándulas suprarrenales y el hígado con ecógrafo y los pulmones con radiografía.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            When a dog starts to overeat, drink and urinate too much, he turns his appetite towards carbohydrates, be they sweet or salty, and with much more reason if a hard belly appears near the ribs, far from the genitals, there is loss of muscle and high blood levels of ALT-GPT, AST-GOT, triglycerides, cortisol and sodium, it is time to do a urine test of the cortisol/creatinine ratio and to look at the adrenal glands and the liver with ultrasound and the lungs with radiography.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            El Cushing puede ser por tumor en esas glándulas o por tumor en la hipófisis, glándula que está en el centro del cráneo y le da órdenes a las suprarrenales. Este es inoperable siempre.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            Cushing's can be due to a tumor in these glands or a tumor in the pituitary, a gland that is in the center of the skull and gives orders to the adrenal glands. This is always inoperable.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            El trilostano y el mitotano sirven para reducir la liberación de corticoides en ambos tipos de Cushing.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            Trilostane and mitotane serve to reduce corticosteroid release in both types of Cushing's.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            Si el tumor está abajo, sobre los riñones, hay que removerlo cuanto antes y rehabilitar la glándula sana, salvo que ya haya invadido la vena cava inferior. Sobre la posibilidad de atacar con mitotano o radioterapia para liberar la vena y luego extirpar, considerar las posibilidades.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            If the tumor is below, on the kidneys, it must be removed as soon as possible and the healthy gland rehabilitated, unless it has already invaded the inferior vena cava. On the possibility of attacking with mitotane or radiotherapy to free the vein and then remove it, consider the possibilities.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            Para evitar la muerte hay que evitar estas 3 cosas: crecimiento del primario, avance del primario sobre la vena cava inferior si es suprarrenal, y metástasis.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            To avoid death, these 3 things must be avoided: growth of the primary, advancement of the primary over the inferior vena cava if it is suprarenal, and metastasis.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            Las 3 metas se logran con un sistema de defensas fuerte, que incluye evitar los carbohidratos, los antibióticos y el estrés y mantener bajos los niveles de cortisol. Puede ser bueno alcalinizar el cuerpo con dosis de bicarbonato de sodio, potasio y magnesio y fortalecer el sistema inmunológico con vitamina D3.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            Las 3 metas se logran con un sistema de defensas fuerte, que incluye evitar los carbohidratos, los antibióticos y el estrés y mantener bajos los niveles de cortisol. Puede ser bueno alcalinizar el cuerpo con dosis de bicarbonato de sodio, potasio y magnesio y fortalecer el sistema inmunológico con vitamina D3.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            Se monitorea cada 2 meses por orina, sangre, ecografía y placa de tórax. Si el cortisol en orina está alto, aumentar la droga de inmediato porque baja las defensas y facilita las metástasis. Prestar especial atención a los parámetros que podrían indicar enfermedad del hígado. Tener en cuenta que aunque las concentraciones de cortisol den bien cuando se tomen las muestras en días normales, puede que se disparen en los días especiales o ante situaciones especiales hasta niveles dañinos.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            He is monitored every 2 months by urine, blood, ultrasound and chest x-ray. If cortisol in urine is high, increase the drug immediately because it lowers the defenses and facilitates metastasis. Pay special attention to parameters that could indicate liver disease. Keep in mind that although cortisol concentrations are fine when sampled on normal days, they may spike on special days or in special situations to harmful levels.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            En caso de metástasis, primeramente se debería determinar si se trata de metástasis suprarrenal o si hay otro tipo de cáncer en el cuerpo que aprovechó la debilidad inmunológica que causa el cortisol alto.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            In case of metastasis, it should first be determined if it is adrenal metastasis or if there is another type of cancer in the body that took advantage of the immune weakness caused by high cortisol.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            De confirmarse el tipo suprarrenal, se puede atacar inmediatamente con mitotano. Si hay metástasis importantes, hay que mantener una dosis de trilostano mientras se avanza. Tener inyecciones de hidrocortisona y dexametasona a mano para usar si viene una crisis.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            If the adrenal type is confirmed, it can be attacked immediately with mitotane. If there are significant metastases, a dose of trilostane must be maintained while advancing. Have hydrocortisone and dexamethasone injections on hand to use if a crisis comes.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            La nueva vida consiste en introducir corticoides sintéticos cada 12 horas en la dosis mínima que necesita para un día normal. Aprender las dosis y los tiempos de cada una de las drogas. Tener listos los inyectables para emergencias. Necesitará un plus de glucocorticoides cada vez que esté asustado o estresado o ansioso o se dé un golpe o desarrolle una infección, etcétera.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            The new life consists of introducing synthetic corticosteroids every 12 hours in the minimum dose needed for a normal day. Learn the doses and times of each of the drugs. Have injectables ready for emergencies. You'll need a glucocorticoid boost whenever you're scared or stressed or anxious or get hit or get an infection and so on.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            Moverse dentro de un ámbito reducido con profesionales que conozcan el caso. Esconder al animal de los profesionales que no saben de qué se trata y se creen héroes por eutanasiar sin consideraciones. Tener listo un sedante inyectable para caso de colapso y así poder llevarlo medio dormido a urgencias.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            Move within a small area with professionals who know the case. Hide the animal from professionals who do not know what it is about and believe they are heroes for euthanizing without consideration. Have an injectable sedative ready in case of collapse and thus be able to take him half asleep to the emergency room.
            </li>
        </P>
    }

    {!isEnglish ?
        <P style={ toggleListStyles }>
            <li>
            La otra opción, por supuesto, es considerar que un perro no debería vivir sin cortezas suprarrenales; darle más trilostano, fortalecer las defensas y ver si puede revertir el cuadro sin mitotano. Desconozco lo que una quimioterapia convencional pudiera prometer; mi experiencia con un oncólogo veterinario fue la que narré.
            </li>
        </P>
        :
        <P style={ toggleListStyles }>
            <li>
            The other option, of course, is to consider that a dog shouldn't live without adrenal cortices; give him more trilostane, strengthen the defenses and see if he can reverse the condition without mitotane. I don't know what a conventional chemotherapy could promise; my experience with a veterinary oncologist was the one I recounted.
            </li>
        </P>
    }

    </>)
}
