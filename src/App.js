import "./App.css";
import intermedlogo from "./logos/intermedLogo2.png";
import logogrupoie from "./logos/gropoielogo.jpeg";
import SignatureCanvas from "react-signature-canvas";

function App() {
  return (
    <>
      <nav className="flex h-24 justify-around items-center border-b border-black">
        <div>
          <img src={intermedlogo} alt="asd" className="w-56" />
        </div>
        <div>
          <h3 className="font-semibold">HISTORIA CLÍNICA PRE HOSPITALARIA</h3>
        </div>
        <div>
          <img src={logogrupoie} alt="asd" className="w-56" />
        </div>
      </nav>

      {/* Section 1 Datos Personales */}
      <section className="w-full flex py-8">
        <div className="w-1/3 flex flex-col items-center justify-around">
          <div className="flex gap-5">
            <div className="w-1/3 flex flex-col items-center">
              <input className="border-b w-full border-black"></input>
              <label>Movil</label>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <input className="border-b w-full border-black"></input>
              <label>Fecha</label>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <input className="border-b w-full border-black"></input>
              <label>Hora</label>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col items-center">
              <input className="border-b w-full border-black"></input>
              <label>Nombre y apellido</label>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-around items-center">
          <div>
            <div className="w-full flex flex-col items-center px-6">
              <input className="border-b w-full border-black"></input>
              <label>Domicilio</label>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="w-17 flex flex-col items-center px-6">
                <input className="border-b w-full border-black"></input>
                <label>Edad</label>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col items-center px-6">
                <input className="border-b w-full border-black"></input>
                <label>Sexo</label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-around items-center">
          <div>
            <p>Tipo de salida</p>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Emergencia</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Urgencia</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Consulta</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>TBC c/med</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>UTIM</p>
            </div>
          </div>
          <div>
            <p>Lugar de atención</p>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Domicilio</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Vía publica</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Evento</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Base</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Area protegida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 Datos Salud*/}
      <section className="w-full flex">
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <input className="border-b w-full border-black"></input>
            <label>Motivo de Despacho</label>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <input className="border-b w-full border-black"></input>
            <label>Despachador</label>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center">
            <input className="border-b w-full border-black"></input>
            <label>N° de Salida(ID)</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input className="border-b w-full border-black"></input>
            <label>Tipo de Afilacion</label>
          </div>
        </div>
      </section>

      {/* Section 3 Antecedentes */}
      <section className="w-full flex mt-6 ml-4 border-t border-t-black">
        <div className="w-3/4 flex flex-col gap-3">
          <p className="text-xl font-semibold ml-5">Antecedentes Patologicos</p>
          <div className="w-full flex gap-3">
            <div className="1/5">
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Ninguno</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>ACV</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Convulsiones</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Psíquiatricos</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>HIV</p>
              </div>
            </div>
            <div className="1/5">
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Asma</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Epoc</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>IAM</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Angor</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Arritmia</p>
              </div>
            </div>

            <div className="1/5">
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>HTA</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>ICC</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>DBT</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Dislipidemia</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Hipertiroidismo</p>
              </div>
            </div>

            <div className="1/5">
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Hipotiroidismo</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Insuf. Renal</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Insuf. Hepática</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Neoplasis</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Obesidad</p>
              </div>
            </div>

            <div className="1/5">
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Alcoholismo</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Tabaquismo</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Alergias</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Insuf. Venosa</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox"></input>
                <p>Arter. periférica</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p>Medicación Actual</p>
          <textarea
            // id="myInput"
            placeholder="Escriba aquí"
            className="myInput border border-black h-32"
          ></textarea>
        </div>
      </section>

      {/* Section 4 */}
      <section className="w-full flex mt-6 ml-4 border-t border-t-black">
        <div className="w-1/2 flex flex-col gap-3 ">
          <p className="text-xl font-semibold ml-5">Signos vitales</p>
        </div>
        <div className="w-1/2">
          <div className="flex gap-2 1/3 flex-wrap">
            <label className="text-xl font-semibold">Aspecto</label>
            <div className="flex gap-2 ">
              <p>Bueno</p>
              <input type="checkbox" />
            </div>
            <div className="flex gap-2">
              <p>Malo</p>
              <input type="checkbox" />
            </div>
            <div className="flex gap-2">
              <p>Regular</p>
              <input type="checkbox" />
            </div>
          </div>
          <p>Sensorio</p>
          <textarea
            // id="myInput"
            placeholder="Escriba aquí"
            className="myInputDos border border-black h-28 w-72"
          ></textarea>
        </div>
      </section>

      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col items-center gap-3">
        <div>
          <h3 className="text-xl font-semibold">Glasgow</h3>
        </div>
        <div className="w-full flex justify-around ">
          <div>
            <p>Resp. Verbal</p>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Orientada</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Confusa</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Inapropiada</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Incomprensible</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Ninguna</p>
            </div>
          </div>
          <div>
            <p>Resp. Motora</p>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Obecede</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Localiza</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Flexiona</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>{`Flex. Anor.(Desc)`}</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>{`Ext. Anor.(Descer)`}</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Ninguna</p>
            </div>
          </div>
          <div>
            <p>Resp. Ocular</p>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Espontanea</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>A la orden</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Al dolor</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p>Ninguna</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col items-center gap-3">
        <div className="w-full flex justify-center items-center">
          <h1>Examen Físico</h1>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex w-full">
            <div className="w-1/5">
              <div>
                <p>Abdomen</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>BDI - RHA +</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Defensa</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Dolor</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>RHA ↑ - RHA ↓</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Hernias</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Eventración</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Ascitis</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Mac Burney +</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Murphy +</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Evisceración</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Hepatomegalía</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Esplenomegalia</p>
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <div>
                <p>Gineco Obst.</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Genitorragia</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Embarazo</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>FUM</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Gesta ../ ..</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Amenaza Aborto</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Aborto en curso</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Aborto incomp.</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Amen. parto prem.</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Trabajo de parto</p>
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <div>
                <p>Locomotor</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Heridas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Escoriaciones</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Fracturas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Esguinces</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Luxación</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Pulsos</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Artrosis</p>
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <div>
                <p>SNC</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>A V D I</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Pupilas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Isocoricas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Anisocoricas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Reactivas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Afasia</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Rigidez nuca</p>
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <div>
                <p className="font-semibold">Urinario</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Anuria</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Globo Vesical</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>{`P.P (+) (-)`}</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Hematuria</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Sonda Vesical</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/5">
              <div>
                <p>Cardiovascular</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No correspone</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>RNSL</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Ritmo R I</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Soplos</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>AO - S - D</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>MI - S - D</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>TR - S - D</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>PU - S - D</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Ra - Ry</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Edemas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>PCR</p>
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <div>
                <p>Respiratorio</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>BEBA</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Reg./ Irreg.</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Bradip./ Taquip-</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Tiraje</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Rales crep. D - I</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Roncus D - I</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Sibilancias D - I</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Sibilancias D - I</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>↓ Murmullo D - I</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Apnea</p>
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <div>
                <p>Psiquiátrico</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Depresivo</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Agresivo</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Delirante</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Violento</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Suicida</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Maniaco depr.</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Artrosis</p>
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <div>
                <p>Cabeza y Cuello</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>No corresponde</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Otorragia</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Epistaxis</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Rinorraquia</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Alter. Sensible</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Adenopatías</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Ingur.yugular</p>
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <div>
                <p className="font-semibold">Piel y Mucosas</p>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Secas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Sudorosas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Pálidas</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Rubicudas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col items-center gap-3">
        <div className="w-full flex">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex justify-center items-center">
              <h1 className="font-semibold">Mecanismo De Lesión</h1>
            </div>
            <div className="w-full flex">
              <div className="w-1/4">
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Accid. Vehicular</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Moto / Bicicleta</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Peatón atrop.</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Caida de altura</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Electrocución</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Explosión</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Derrumbe</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Mordedura</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Quemadura</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Pelea callejera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col items-center gap-3">
        <div className="w-full flex">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex justify-center items-center">
              <h1 className="font-semibold">Paro Cardiorrespiratorio</h1>
            </div>
            <div className="w-full flex">
              <div className="w-1/4">
                <div>
                  <p>Modo Present.</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Taq.Vent.S/Pulso</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Fibr.Ventric.</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Dem/AESP</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Asistolia</p>
                </div>
              </div>
              <div className="w-1/4">
                <div>
                  <p>Conducta</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>RCP Básica</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>RCP Avanzada</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>{`No RCP (cause)`}</p>
                </div>
              </div>
              <div className="w-1/4">
                <div>
                  <p>Post-Paro</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Estable</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Inestable</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Alt.Hemodin</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Alt.Neurolog.</p>
                </div>
              </div>
              <div className="w-1/4">
                <div>
                  <p className="font-semibold">Duración</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>10'20'30'40'</p>
                </div>
                <div>
                  <p className="font-semibold">Resultado</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Positivo</p>
                </div>
                <div className="flex gap-1">
                  <input type="checkbox"></input>
                  <p>Negativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <input className="border-b w-full border-black"></input>
          <label>Diagnóstico Presuntivo</label>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <input className="border-b w-full border-black"></input>
          <label>Lugar de internación / Sala</label>
        </div>
      </section>

      <section className="w-full flex mt-6 ml-4 border-t border-t-black items-center justify-center gap-3">
        <p>Trauma, ver como hacer</p>
      </section>

      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col justify-center items-center gap-3">
        <label>Epicrisis</label>
        <textarea placeholder="Escriba aquí..."></textarea>
      </section>

      <section className="w-full flex mt-6 ml-4 justify-center items-center gap-3">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <SignatureCanvas
            penColor="green"
            canvasProps={{ width: 350, height: 250, className: "sigCanvas" }}
            backgroundColor="rgb(138,140,143)"
          />
          <p>Firma Paciente</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <SignatureCanvas
            penColor="green"
            canvasProps={{ width: 350, height: 250, className: "sigCanvas" }}
            backgroundColor="rgb(138,140,143)"
          />
          <p>Firma Testigo</p>
        </div>{" "}
      </section>
      <section className="w-full flex mt-6 ml-4 justify-center items-center gap-3">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <SignatureCanvas
            penColor="green"
            canvasProps={{ width: 350, height: 250, className: "sigCanvas" }}
            backgroundColor="rgb(138,140,143)"
          />
          <p>Médico GrupoIE</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <SignatureCanvas
            penColor="green"
            canvasProps={{ width: 350, height: 250, className: "sigCanvas" }}
            backgroundColor="rgb(138,140,143)"
          />
          <p>Médico Receptor</p>
        </div>{" "}
      </section>
    </>
  );
}

export default App;
