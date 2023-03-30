import "./App.css";
import intermedlogo from "./logos/intermedLogo2.png";
import logogrupoie from "./logos/gropoielogo.jpeg";
import SignatureCanvas from "react-signature-canvas";
import { useRef, useState, useEffect } from "react";
// import { Document } from "@react-pdf/renderer";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import ReactPdfPrint from './ReactPdfPrint'
import { useReactToPrint } from "react-to-print";

function App() {

  // const config = {
  //   secureToken: "315a9dbe-874e-4233-a99e-b950e800250e",
  //   to: 'them@website.com',
  //   from: "you@isp.com",
  //   subject: "This is the subject",
  //   body: "And this is the body"
  // }

  // PDF DESCARGAR----
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "intermed-data",
    onAfterPrint: () => alert("Success"),
  });

  // const submitAd = (event) => {
  //   event.preventDefault()
  //   const config = {
  //     secureToken: "315a9dbe-874e-4233-a99e-b950e800250e",
  //     to: 'juin@hotmail.com.ar',
  //     from: "juin@hotmail.com.ar",
  //     subject: "This is the subject",
  //     body: "And this is the body"
  //   }
  //   if (window.Email) (
  //     window.Email.send(config).then(() => alert("ads"))
  //   )
  // }

  // FINAL PDF

  //Signature

  const signatureRef = useRef({});

  const [imageData, setImageData] = useState({
    firmaPaciente: "",
    firmaTestigo: "",
    medicoGrupoIe: "",
    medicoReceptor: "",
  });

  const saveSignaturePaciente = (signature) => {
    setImageData({
      ...imageData,
      firmaPaciente: signature,
    });
  };

  const saveSignatureTestigo = (signature) => {
    setImageData({
      ...imageData,
      firmaTestigo: signature,
    });
  };

  const saveSignatureGrupoIe = (signature) => {
    setImageData({
      ...imageData,
      medicoGrupoIe: signature,
    });
  };
  const saveSignatureReceptor = (signature) => {
    setImageData({
      ...imageData,
      medicoReceptor: signature,
    });
  };

  useEffect(() => {
    console.log(imageData);
  }, [imageData]);

  // console.log(imageData);

  //Signature ending

  const [infoPaciente, setInfoPaciente] = useState({
    movil: "",
    fecha: "",
    hora: "",
    domicilio: "",
    nombre_apellido: "",
    edad: "",
    sexo: "",
    motivo_de_despacho: "",
    despachador: "",
    nsalida: "",
    tipo_de_afiliacion: "",
  });

  const [tipoSalida, setTipoSalida] = useState({
    emergencia: false,
    urgencia: false,
    consulta: false,
    tbc: false,
    utim: false,
  });

  const [antecedentes, setAntecedentes] = useState({
    ninguno: false,
    acv: false,
    convulsiones: false,
    psiquiatricos: false,
    hiv: false,
    asma: false,
    epoc: false,
    iam: false,
    angor: false,
    arritmia: false,
    hta: false,
    icc: false,
    dbt: false,
    disilipidemia: false,
    hipertiroidismo: false,
    hipotiroidismo: false,
    insuf_renal: false,
    insuf_hepatica: false,
    neoplasis: false,
    obesidad: false,
    alcoholismo: false,
    tabaquismo: false,
    alergias: false,
    insuf_venosa: false,
    arter_periferica: false,
  });

  const [lugarDeAtencion, setLugarDeAtencion] = useState({
    domicilio: false,
    viaPublica: false,
    evento: false,
    base: false,
    areaProtegida: false,
  });

  const [infoTextArea, setInfoTextArea] = useState({
    medicacion_actual: "",
  });

  const handleTextArea = (e) => {
    const { name, value } = e.target;
    setInfoTextArea({ ...infoTextArea, [name]: value });
    console.log(infoTextArea);
  };

  const handleAntecedentesP = (e) => {
    const { name, checked } = e.target;
    setAntecedentes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    // console.log(antecedentes);
  };

  const handleLugarAtencion = (e) => {
    const { name, checked } = e.target;
    setLugarDeAtencion((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    // console.log(lugarDeAtencion)
  };

  const handleTipoSalidaChange = (event) => {
    const { name, checked } = event.target;
    setTipoSalida((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    // console.log(tipoSalida);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfoPaciente({ ...infoPaciente, [name]: value });
  };

  return (
    <>
    <div ref={componentRef}>
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
              <input
                className="border-b w-full border-black"
                name="movil"
                value={infoPaciente.movil}
                onChange={handleInputChange}
              ></input>
              <label>Movil</label>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <input
                className="border-b w-full border-black"
                name="fecha"
                value={infoPaciente.fecha}
                onChange={handleInputChange}
              ></input>
              <label>Fecha</label>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <input
                className="border-b w-full border-black"
                name="hora"
                value={infoPaciente.hora}
                onChange={handleInputChange}
              ></input>
              <label>Hora</label>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col items-center">
              <input
                className="border-b w-full border-black"
                name="nombre_apellido"
                value={infoPaciente.nombre_apellido}
                onChange={handleInputChange}
              ></input>
              <label>Nombre y apellido</label>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-around items-center">
          <div>
            <div className="w-full flex flex-col items-center px-6">
              <input
                className="border-b w-full border-black"
                name="domicilio"
                value={infoPaciente.domicilio}
                onChange={handleInputChange}
              ></input>
              <label>Domicilio</label>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="w-17 flex flex-col items-center px-6">
                <input
                  className="border-b w-full border-black"
                  name="edad"
                  value={infoPaciente.edad}
                  onChange={handleInputChange}
                ></input>
                <label>Edad</label>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col items-center px-6">
                <input
                  className="border-b w-full border-black"
                  name="sexo"
                  value={infoPaciente.sexo}
                  onChange={handleInputChange}
                ></input>
                <label>Sexo</label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex justify-around items-center">
          <div>
            <p className="font-bold">Tipo de salida</p>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="emergencia"
                checked={tipoSalida.emergencia}
                onChange={handleTipoSalidaChange}
              ></input>
              <p>Emergencia</p>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="urgencia"
                checked={tipoSalida.urgencia}
                onChange={handleTipoSalidaChange}
              ></input>
              <p>Urgencia</p>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="consulta"
                checked={tipoSalida.consulta}
                onChange={handleTipoSalidaChange}
              ></input>
              <p>Consulta</p>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="tbc"
                checked={tipoSalida.tbc}
                onChange={handleTipoSalidaChange}
              ></input>
              <p>TBC c/med</p>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="utim"
                checked={tipoSalida.utim}
                onChange={handleTipoSalidaChange}
              ></input>
              <p>UTIM</p>
            </div>
          </div>

          <div>
            <p className="font-bold">Lugar de atención</p>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="domicilio"
                checked={lugarDeAtencion.domicilio}
                onChange={handleLugarAtencion}
              ></input>
              <p>Domicilio</p>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="viaPublica"
                checked={lugarDeAtencion.viaPublica}
                onChange={handleLugarAtencion}
              ></input>
              <p>Vía publica</p>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="evento"
                checked={lugarDeAtencion.evento}
                onChange={handleLugarAtencion}
              ></input>
              <p>Evento</p>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="base"
                checked={lugarDeAtencion.base}
                onChange={handleLugarAtencion}
              ></input>
              <p>Base</p>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="areaProtegida"
                checked={lugarDeAtencion.areaProtegida}
                onChange={handleLugarAtencion}
              ></input>
              <p>Area protegida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 Datos Salud*/}
      <section className="w-full flex">
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <input
              className="border-b w-full border-black"
              name="motivo_de_despacho"
              value={infoPaciente.motivo_de_despacho}
              onChange={handleInputChange}
            ></input>
            <label>Motivo de Despacho</label>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <input
              className="border-b w-full border-black"
              name="despachador"
              value={infoPaciente.despachador}
              onChange={handleInputChange}
            ></input>
            <label>Despachador</label>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center">
            <input
              className="border-b w-full border-black"
              name="nsalida"
              value={infoPaciente.nsalida}
              onChange={handleInputChange}
            ></input>
            <label className="font-semibold">N° de Salida(ID)</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              className="border-b w-full border-black"
              name="tipo_de_afiliacion"
              value={infoPaciente.tipo_de_afiliacion}
              onChange={handleInputChange}
            ></input>
            <label className="font-semibold">Tipo de Afilacion</label>
          </div>
        </div>
      </section>

      {/* Section 3 Antecedentes */}
      <section className="w-full flex mt-6 ml-4 border-t border-t-black">
        <div className="w-3/4 flex flex-col gap-3">
          <p className="text-xl font-semibold ml-5  ">Antecedentes Patologicos</p>
          <div className="w-full flex gap-3">
            <div className="1/5">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="ninguno"
                  checked={antecedentes.ninguno}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Ninguno</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="acv"
                  checked={antecedentes.acv}
                  onChange={handleAntecedentesP}
                ></input>
                <p>ACV</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="convulsiones"
                  checked={antecedentes.convulsiones}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Convulsiones</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="psiquiatricos"
                  checked={antecedentes.psiquiatricos}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Psíquiatricos</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="hiv"
                  checked={antecedentes.hiv}
                  onChange={handleAntecedentesP}
                ></input>
                <p>HIV</p>
              </div>
            </div>

            <div className="1/5">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="asma"
                  checked={antecedentes.asma}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Asma</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="epoc"
                  checked={antecedentes.epoc}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Epoc</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="iam"
                  checked={antecedentes.iam}
                  onChange={handleAntecedentesP}
                ></input>
                <p>IAM</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="angor"
                  checked={antecedentes.angor}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Angor</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="arritmia"
                  checked={antecedentes.arritmia}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Arritmia</p>
              </div>
            </div>

            <div className="1/5">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="hta"
                  checked={antecedentes.hta}
                  onChange={handleAntecedentesP}
                ></input>
                <p>HTA</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="icc"
                  checked={antecedentes.icc}
                  onChange={handleAntecedentesP}
                ></input>
                <p>ICC</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="dbt"
                  checked={antecedentes.dbt}
                  onChange={handleAntecedentesP}
                ></input>
                <p>DBT</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="disilipidemia"
                  checked={antecedentes.disilipidemia}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Dislipidemia</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="hipertiroidismo"
                  checked={antecedentes.hipertiroidismo}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Hipertiroidismo</p>
              </div>
            </div>

            <div className="1/5">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="hipotiroidismo"
                  checked={antecedentes.hipotiroidismo}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Hipotiroidismo</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="insuf_renal"
                  checked={antecedentes.insuf_renal}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Insuf. Renal</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="insuf_hepatica"
                  checked={antecedentes.insuf_hepatica}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Insuf. Hepática</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="neoplasis"
                  checked={antecedentes.neoplasis}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Neoplasis</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="obesidad"
                  checked={antecedentes.obesidad}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Obesidad</p>
              </div>
            </div>

            <div className="1/5">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="alcoholismo"
                  checked={antecedentes.alcoholismo}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Alcoholismo</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="tabaquismo"
                  checked={antecedentes.tabaquismo}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Tabaquismo</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="alergias"
                  checked={antecedentes.alergias}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Alergias</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="insuf_venosa"
                  checked={antecedentes.insuf_venosa}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Insuf. Venosa</p>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="arter_periferica"
                  checked={antecedentes.arter_periferica}
                  onChange={handleAntecedentesP}
                ></input>
                <p>Arter. periférica</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p className="font-bold mt-1 relative left-6 top-1 ">Medicación Actual</p>
          <textarea
            // id="myInput"
            name="medicacion_actual"
            value={infoTextArea.medicacion_actual}
            onChange={handleTextArea}
            placeholder="Escriba aquí"
            className="myInput border border-black h-32 mt-2 shadow-lg shadow-zinc-300 relative left-4 top-2 rounded-lg" 
          ></textarea>
        </div>
      </section>

      {/* Section 4 Signos Vitales*/}
      <form>
        <section className="w-full flex mt-6 ml-4 border-t border-t-black">
          <div className="w-1/2 flex flex-col gap-3 ">
            <p className="text-xl font-semibold ml-5  relative top-2">Signos vitales</p>
            <div className="w-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium">Hora</p>
                <div className="flex flex-col">
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium">Tas</p>
                <div className="flex flex-col">
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium">Tad</p>
                <div className="flex flex-col">
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium">Fc</p>
                <div className="flex flex-col">
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium">Fr</p>
                <div className="flex flex-col">
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium">Temp</p>
                <div className="flex flex-col">
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium relative left-[3px]">So2</p>
                <div className="flex flex-col">
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium  relative left-[3px]">Glic</p>
                <div className="flex flex-col">
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                  <input type="checkbox" className="h-9 w-9"></input>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex gap-2 1/3 flex-wrap mt-2 justify-center items-center">
              <label className="text-xl font-semibold relative top-[2px]">Aspecto</label>

              <div className="flex gap-2 relative top-1">
                <input type="checkbox" name="aspecto" value="bueno" className=" " />
                <p className="font-semibold relative right-1 bottom-[1px]">Bueno</p>
              </div>

              <div className="flex gap-2  relative top-1">
                <input type="checkbox" name="aspecto" value="malo" className="relative" />
                <p className="font-semibold relative right-1 bottom-[1px]">Malo</p>
              </div>

              <div className="flex gap-2  relative top-1">
                <input type="checkbox" name="aspecto" value="regular" className="relative" />
                <p className="font-semibold  relative right-1 bottom-[1px]">Regular</p>
              </div>
            </div>

            <p className="font-bold w-16  relative left-[165px] top-3">Sensorio</p>
            <textarea
              // id="myInput"
              placeholder="Escriba aquí"
              className="myInputDos border border-black h-28 w-72  relative left-16 top-5 shadow-lg shadow-zinc-300 rounded-lg"
            ></textarea>
          </div>
        </section>
      </form>

      {/* Section Glasgow 5ta*/}
      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col items-center gap-3">
        <div>
          <h3 className="text-xl font-semibold">Glasgow</h3>
        </div>

        <div className="w-full flex justify-around ">
          <div>
            <p className="font-semibold">Resp. Verbal</p>
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
              <p className="">Inapropiada</p>
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
            <p className="font-semibold">Resp. Motora</p>
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
            <p className="font-semibold">Resp. Ocular</p>
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

      {/* Section Examen Fisico 6ta*/}
      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col items-center gap-3">
        <div className="w-full flex justify-center items-center">
          <h1 className="font-bold">Examen Físico</h1>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex w-full">
            <div className="w-1/5">
              <div>
                <p className="font-semibold">Abdomen</p>
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
                <p className="font-semibold">Gineco Obst.</p>
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
                <p className="font-semibold">Locomotor</p>
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
                <p className="font-semibold">SNC</p>
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
            <div className="w-1/5 ">
              <div className="mt-4">
                <p className="font-semibold">Cardiovascular</p>
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
              <div className="mt-4">
                <p className="font-semibold">Respiratorio</p>
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
              <div className="mt-4">
                <p className="font-semibold">Psiquiátrico</p>
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
              <div className="mt-4">
                <p className="font-semibold">Cabeza y Cuello</p>
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
              <div className="mt-4">
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

      {/* Section Mecanismo de Lesion 7ma*/}
      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col items-center gap-3">
        <div className="w-full flex">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex justify-center items-center">
              <h1 className="font-bold">Mecanismo De Lesión</h1>
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

      {/* Section Paro Cardiorrespiratorio 8va*/}
      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col items-center gap-3">
        <div className="w-full flex">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex justify-center items-center">
              <h1 className="font-semibold">Paro Cardiorrespiratorio</h1>
            </div>
            <div className="w-full flex">
              <div className="w-1/4">
                <div>
                  <p className="font-medium">Modo Present.</p>
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
                  <p className="font-medium">Conducta</p>
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
                  <p className="font-medium">Post-Paro</p>
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
                  <p className="font-medium">Duración</p>
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
          <label className="font-bold">Diagnóstico Presuntivo</label>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <input className="border-b w-full border-black"></input>
          <label className="font-bold">Lugar de internación / Sala</label>
        </div>
      </section>

      {/* Trauma */}

      <section className="w-full flex mt-6 pt-12 ml-4 border-t border-t-black items-center justify-center gap-3">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 relative top-4">
              <p className="relative right-8">Deformación</p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <p className="-rotate-90 w-[21px] font-semibold relative bottom-4">Cara</p>
                <input
                  type="checkbox"
                  className="w-10 h-10 relative left-0.5 bottom-4"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center ">
              <p className="-rotate-90 w-[21px] font-semibold">Cabeza</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">Cuello</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">Torax</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">Abdom.</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">Torso</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">Pelvis</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">Perine.</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">Genit</p>
              <input
                type="checkbox" 
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">Maquis.</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">MSD</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">MSI</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">MID</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="-rotate-90 w-[21px] font-semibold">MII</p>
              <input
                type="checkbox"
                className="w-10 h-10 relative left-0.5"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 font-normal relative right-6">
                Contus/Hematoma
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center  ">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 ">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 ">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 ">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y w-[146.2px] border-black h-10 flex justify-center items-center pr-3 relative right-6">
                Perd. Movilidad
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center ">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Perd. Sensibilidad
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center ">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 ">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Lacerac./Abración
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center ">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px] "
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Herida cort./puns.
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px] "
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center bg-red-200">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Traum. Cerrado
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center bg-red-200">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Luxación/Esguince
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center bg-red-200">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Fractura
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center bg-red-200">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Amputación
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center bg-red-200">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Hemorragia
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center bg-red-200">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3 w-[146.2px] relative right-6">
                Empalamiento
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10 relative right-[22px]"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center bg-red-200">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10 relative right-[22px]"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div>
          {/* <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="border-y border-black h-10 flex justify-center items-center pr-3">
                Deformación
              </p>
              <div className="flex flex-col gap-3 justify-cennter items-center">
                <input
                  type="checkbox"
                  className="w-10 h-10"
                  // name="wwww"
                  // onChange="oooo"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center bg-red-200">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3 bg-red-200 justify-center items-center">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="checkbox"
                className="w-10 h-10"
                // name="wwww"
                // onChange="oooo"
              ></input>
            </div>
          </div> */}
        </div>
      </section>

      <section className="w-full flex mt-6 ml-4 border-t border-t-black flex-col justify-center items-center gap-3">
        <label className="font-bold ">Epicrisis</label>
        <textarea placeholder="Escriba aquí..." className="textArea w-4/5 h-60 border border-black shadow-lg shadow-zinc-300 rounded-lg"></textarea>
      </section>

      <section className="w-full flex mt-6 ml-4 justify-center items-center gap-3">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 350, height: 250, className: "sigCanvas" }}
            backgroundColor="rgb(199,199,198)"
            onEnd={() =>
              saveSignaturePaciente(
                signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
              )
            }
          />
          <p className="font-bold">Firma Paciente</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 350, height: 250, className: "sigCanvas" }}
            backgroundColor="rgb(199,199,198)"
            onEnd={() =>
              saveSignatureTestigo(
                signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
              )
            }
          />
          <p className="font-bold">Firma Testigo</p>
        </div>{" "}
      </section>
      <section className="w-full flex mt-6 ml-4 justify-center items-center gap-3">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 350, height: 250, className: "sigCanvas" }}
            backgroundColor="rgb(199,199,198)"
            ref={signatureRef}
            onEnd={() =>
              saveSignatureGrupoIe(
                signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
              )
            }
          />
          <p className="font-bold">Médico GrupoIE</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 350, height: 250, className: "sigCanvas" }}
            backgroundColor="rgb(199,199,198)"
            onEnd={() =>
              saveSignatureReceptor(
                signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg")
              )
            }
          />
          <p className="font-bold">Médico Receptor</p>
        </div>{" "}
      </section>

      {/* Medicación utilizada */}

      <section className="my-10 flex flex-col justify-center items-center gap-4">
        <h3 className="font-bold">Medicación utilizada</h3>
        <div className="w-full flex">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="flex gap-1  ">
              <p className="w-38 p-2  font-semibold">Abbocath N°14</p>
              <input
                className="border-b w-34 relative left-6 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Abbocath N°16</p>
              <input
                className="border-b w-34 relative left-6 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Abbocath N°18</p>
              <input
                className="border-b w-34 relative left-6 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Abbocath N°20</p>
              <input
                className="border-b w-34 relative left-6 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Abbocath N°22</p>
              <input
                className="border-b w-34 relative left-6 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Abbocath N°24</p>
              <input
                className="border-b w-34 relative left-6 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Adrenalina</p>
              <input
                className="border-b w-25 relative left-10 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Aguja 21G</p>
              <input
                className="border-b w-25 relative left-[43px] border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Aguja 25/8</p>
              <input
                className="border-b w-25 relative left-10 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Aguja 40/8</p>
              <input
                className="border-b w-25 relative left-10 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Aguja 50/8</p>
              <input
                className="border-b w-25 relative left-10 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Amlodipina</p>
              <input
                className="border-b w-25 relative left-10 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-full h-full  p-2 font-semibold">{`Aspirina Comprimidos`}</p>
              <input
                className="border-b w-25  border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Atropina</p>
              <input
                className="border-b w-38 relative left-12  border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Baja lenguas</p>
              <input
                className="border-b w-38 relative left-[34px] border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Butterfly N°19</p>
              <input
                className="border-b w-38 relative left-7 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Butterfly N°21</p>
              <input
                className="border-b w-38 relative left-7 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Butterfly N°23</p>
              <input
                className="border-b w-38 relative left-7 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Butterfly N°25</p>
              <input
                className="border-b w-38 relative left-7 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Bisturí</p>
              <input
                className="border-b w-38 relative left-14 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 font-semibold">Hioscina</p>
              <input
                className="border-b w-38 relative left-12 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 p-2 relative right-2 font-semibold">Cánula de Mayo 50 mm</p>
              <input
                className="border-b w-38 relative right-2 border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38  relative top-2 font-semibold">Cánula de Mayo N°1</p>
              <input
                className="border-b w-[181px] h-[25px] relative left-[12.5px] border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38 relative top-2 font-semibold">Cánula de Mayo N°2</p>
              <input
                className="border-b w-[181px] h-[25px] relative left-[12.5px] border-black m-2"
              ></input>
            </div>
            <div className="flex gap-1">
              <p className="w-38  relative top-2 font-semibold">Cánula de Mayo N°3</p>
              <input
                className="border-b w-[181px] h-[25px] relative left-[12px] border-black m-2"
              ></input>
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="flex gap-1 ">
              <p className="w-38 relative top-[15px] font-semibold ">Furosemida</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[61px]  border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-38 relative top-[15px] font-semibold">Glucosado</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[65px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-38 relative top-[15px] right-2 font-semibold">Guía Macro Goteo V14</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[22px]  border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-38 relative top-[15px] font-semibold">Guía Micro Goteo</p>
              <input
                className="border-b w-[181px] h-[25px] relative  top-[5px] left-[39px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-38 relative top-[15px] font-semibold">Haloperidol</p>
              <input
                className="border-b w-[181px] h-[25px] relative  top-[5px] left-[61px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-38 relative top-[15px] font-semibold">Hidrocortisona</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[49px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-38 relative top-[15px] font-semibold">Isordil</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[81px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-40 relative top-[15px] left-7 font-semibold ">Jeringa 10ml</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[23px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-40 top-[15px] relative left-7 font-semibold">Jeringa 20ml</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[23px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-40 top-[15px] relative left-8 font-semibold">Jeringa 3ml</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[23px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-40 relative top-[15px] left-8 font-semibold">Jeringa 5ml</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[23px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Jeringa insulina</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[47px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Ketorolac</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[69px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Lidocaina</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[69px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Llave de 3 vías</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[51px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Lorazepan S/L</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[52px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Losartan D</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[64px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Midazolam</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[63px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Nalbufina</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[68px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px]  font-semibold">Reliveran (Metoclopramida)</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[3px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[15px] font-semibold">Solución Fisiológica x 250</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] left-[10px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[12px] right-1 font-semibold">Sonda de Aspiración-adultos</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[5px] right-[1px]  border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[5px]  font-semibold">Sonda de Aspiración-pediátricos</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[8px] right-[2px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[12px] right-2 font-semibold">Sonda Nasogástrica K 29</p>
              <input
                className="border-b w-[181px] h-[25px] relative top-[4px] left-[13px] border-black m-2"
              ></input>
            </div><div className="flex gap-1 ">
              <p className="w-full relative top-[4px] right-2 font-semibold">Sonda Nasogástrica K 32</p>
              <input
                className="border-b w-[181px] h-[25px] relative bottom-[3px] left-[13px] border-black m-2"
              ></input>
            </div>
          </div>
        </div>
      </section>

      {/* Button */}

     
      </div>
      <section className="w-full flex justify-center items-center my-10">
        <div className="1/4">
        <button onClick={handlePrint} class="py-2 px-4  bg-[#F37435]  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Descargar AHORA</button>
        </div>
      </section>
    </>
  );
}

export default App;
