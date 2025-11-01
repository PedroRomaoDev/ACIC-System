import bannerImg from "../assets/img/Rectangle.png";

const Main = () => {
  const buttonClassName =
    "font-sans font-semibold tracking-[2px] text-[16px] w-[170px] h-[46px] bg-[#FF8C40] text-white border-none rounded-[10px] cursor-pointer text-center flex justify-center items-center";
  return (
    <main>
      <div className="welcome-banner">
        <div className="container">
          <img
            src={bannerImg}
            alt="Imagem ACIC"
            className="banner-overlay-image"
            style={{ width: "100%", height: "410px" }}
          />

          <div className="absolute left-[130px] top-[117px] z-[3] text-white">
            <p className="left-[130px] m-0 pt-[70px] font-jost text-[63px]">
              Bem Vindo ao ACIC - System
            </p>
            <p className="mt-[20px] h-[205px] w-[699px] overflow-hidden text-justify font-sans text-[16px] font-light leading-[1.4em] text-white">
              Aqui, nossa missão é impulsionar o desenvolvimento econômico e
              social <br />
              de Ceilândia, apoiando empresas de todos os tamanhos. Este espaço
              foi <br />
              criado para ser uma ferramenta de utilidade pública, oferecendo{" "}
              <br />
              informações, serviços e recursos que ajudam você a crescer e a{" "}
              <br />
              prosperar.
            </p>
          </div>
          <div className="absolute left-[950px] top-[298px] z-[4] flex gap-[20px] pt-[70px]">
            <button className={buttonClassName}>LOGIN</button>
            <button className={buttonClassName}>CADASTRO</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
