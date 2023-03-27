import "./App.css";
import intermedlogo from "./logos/intermedLogo2.png";
import logogrupoie from "./logos/gropoielogo.jpeg";

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
        <div className="w-3/4 flex flex-col gap-3 ">
          <p className="text-xl font-semibold ml-5">Signos vitales</p>
        
        </div>

        <div className="w-2/4">
          <div className="flex gap-2 1/3 flex-wrap">
            <label>Aspecto</label>
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
      <section>
        <h3>as</h3>
      </section>
    </>
  );
}

export default App;
