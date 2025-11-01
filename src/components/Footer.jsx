import logoSrc from "../assets/img/logo.png";

const Footer = () => {
  const LinkClassName =
    "no-underline text-white text-[18px] transition-colors duration-300 hover:text-primary";
  return (
    <footer>
      <div className="box-border flex h-[312px] w-full items-center justify-around bg-[#000536] p-5 text-[24px] text-white">
        <div className="h-[114px] w-[208px]">
          <img src={logoSrc} alt="Logo" />
        </div>
        <div className="flex flex-col gap-[25px] pl-[100px]">
          <a href="#" className={LinkClassName}>
            Sobre Nós
          </a>
          <a href="#" className={LinkClassName}>
            Políticas de Privacidade
          </a>
          <a href="#" className={LinkClassName}>
            Termos de Uso
          </a>
          <a href="#" className={LinkClassName}>
            Entrar em Contato
          </a>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <p className="text-[28px] text-white">
            Inscreva-se na nossa Newsletter!
          </p>
          <div className="relative w-full max-w-[447px]">
            <input
              type="email"
              placeholder="seuemail@gmail.com"
              className="placeholder:text-gray-470 box-border h-[48px] w-[447px] rounded-[4px] border border-[#ccc] px-[10px] pb-[3px] placeholder:text-[15px] placeholder:leading-[28px]"
            />
            <button className="absolute right-[5px] top-1/2 h-[36px] w-[175px] -translate-y-1/2 cursor-pointer rounded-md border-none bg-[#FF8C40] px-[15px] text-[14px] text-white transition-colors duration-300 hover:opacity-80">
              ENVIAR
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[42px] w-full items-center justify-center border-t border-[#000536] bg-white text-[16px] font-bold text-[#000536]">
        <p>ACIC 2024 TODOS OS DIREITOS RESERVADOS</p>
      </div>
    </footer>
  );
};

export default Footer;
