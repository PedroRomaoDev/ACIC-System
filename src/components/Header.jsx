import { useNavigate } from "react-router";

import logoSrc from "../assets/img/logo.png";
import perfilSrc from "../assets/img/perfil.png";
import settingsSrc from "../assets/img/settings.png";

const Header = () => {
  const { navigate } = useNavigate();
  // Funções de exemplo para os cliques
  const handleLogoClick = () => {
    navigate("/");
  };

  const handlePerfilClick = () => {
    alert("Ícone de perfil clicado!");
  };

  const handleSettingsClick = () => {
    alert("Ícone de configurações clicado!");
  };
  return (
    <header className="flex h-[100px] items-center justify-center bg-[#091057]">
      <button onClick={handleLogoClick}>
        <img src={logoSrc} alt="Logo" className="h-[61px] w-[118px]" />
      </button>
      <button onClick={handlePerfilClick}>
        <img
          src={perfilSrc}
          alt="Ícone"
          className="absolute right-[225px] top-[35px] h-[34px] w-[34px]"
        />
      </button>
      <button onClick={handleSettingsClick}>
        <img
          src={settingsSrc}
          alt="Ícone"
          className="absolute right-[110px] top-[33px] h-[40px] w-[40px]"
        />
      </button>
    </header>
  );
};
export default Header;
