import equipeSrc from "../assets/img/equipe.png";
import planetSrc from "../assets/img/planet.png";

const Section = () => {
  return (
    <section className="m-0 flex flex-wrap items-start justify-center gap-[20px] bg-[#f0f0f0] px-[30px] py-[40px] font-sans">
      <img
        src={equipeSrc}
        alt="Imagem Equipe"
        className="h-[393px] w-[417px] rounded-l-[20px]"
      />
      <div className="flex h-full max-w-[600px] flex-col justify-between">
        <div className="mb-5">
          <h2 className="mx-0 mb-[10px] mt-[0.83em] block font-sans text-[1.5em] font-bold text-[#10165f]">
            Quem somos?
          </h2>
          <p className="mx-0 mb-[1em] mt-[1em] block text-[#8b8b8b]">
            A Associação Comercial Empresarial e Industrial de Ceilândia (ACIC)
            é uma sociedade civil sem fins lucrativos, entidade representativa
            de caráter assistencial, cultural e social, com patrimônio e
            personalidade próprios e distintos de seus sócios. Fomos fundada em
            1977 por uma comissão de comerciantes que organizaram e criaram a
            ACIC.
          </p>
          <button className="mr-2.5 cursor-pointer rounded-lg border-none bg-[#f47320] px-4 py-2 text-[13.3px] font-semibold text-white transition-all duration-300 ease-in-out">
            JUNTE-SE
          </button>
        </div>
      </div>
      <div className="flex h-[467px] w-[297px] flex-col items-center rounded-l-[20px] bg-white p-[20px] text-justify text-[#333]">
        <img
          src={planetSrc}
          alt="Planet Logo"
          className="mb-[10px] h-auto max-h-[78px] max-w-[162px]"
        />
        <p className="items mx-0 mb-[1em] mt-[1em] block text-justify">
          A Planet é um parceiro incrível quando o assunto é sustentabilidade e
          inovação. Eles trazem soluções práticas e inteligentes, como sistemas
          que incentivam a reciclagem e promovem um impacto positivo no meio
          ambiente. Trabalhar com a Planet é garantia de colaborar com quem
          realmente entende a importância de cuidar do planeta e está
          comprometido em fazer a diferença.
        </p>
      </div>
    </section>
  );
};

export default Section;
