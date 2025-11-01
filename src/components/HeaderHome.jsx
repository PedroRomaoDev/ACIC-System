// ERRO 2: Corrigido para "react-router-dom"
import { useNavigate } from "react-router";

import logoSrc from "../assets/img/logo.png";
import perfilSrc from "../assets/img/perfil.png";
import settingsSrc from "../assets/img/settings.png";

const HeaderHome = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handlePerfilClick = () => {
    alert("Ícone de perfil clicado!");
  };

  const handleSettingsClick = () => {
    alert("Ícone de configurações clicado!");
  };

  const linkClassName =
    "font-sans mx-4 h-9 rounded bg-transparent text-[15px] font-semibold leading-9 tracking-[1px] text-white no-underline";

  return (
    <div>
      <div className="relative flex h-[38px] w-full items-center justify-end bg-[#f1f1f1] text-sm font-bold text-black">
        <p className="pr-[61px]">
          NOVIDADES NO ACIC SYSTEM {">"} CONFIRA AGORA E FAÇA PARTE, NOVAS
          FUNCIONALIDADES INOVADORAS
        </p>
      </div>

      <header className="flex h-[100px] w-full items-center justify-between bg-[#091057] px-[120px]">
        <div>
          <button
            onClick={handleLogoClick}
            className="h-[75px] w-[118px] object-contain"
          >
            <img src={logoSrc} alt="Logo" />
          </button>
        </div>
        <div className="flex gap-16">
          <a className={linkClassName} href="#">
            QUEM SOMOS
          </a>
          <a className={linkClassName} href="#">
            NOSSAS POLÍTICAS
          </a>
          <a href="#" className={linkClassName}>
            NEWSLETTER
          </a>
          <a href="#" className={linkClassName}>
            SISTEMA
          </a>
        </div>
        <div className="flex gap-6">
          <button onClick={handlePerfilClick} className="ml-6">
            <img src={perfilSrc} alt="Ícone" className="h-[34px] w-[34px]" />
          </button>

          <button onClick={handleSettingsClick} className="ml-6">
            <img src={settingsSrc} alt="Ícone" className="h-[40px] w-[40px]" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default HeaderHome;
