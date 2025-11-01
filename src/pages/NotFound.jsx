// 1. Importe o Link do react-router-dom

import { Link } from "react-router";

const NotFound = () => {
  return (
    // Container principal que centraliza tudo
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="text-center">
        {/* O "404" em destaque */}
        <h1 className="mb-4 text-8xl font-bold dark:text-[#FF8C40]">404</h1>

        {/* Mensagem principal */}
        <p className="mb-4 text-2xl font-medium text-gray-800 dark:text-gray-200">
          Página não encontrada
        </p>

        {/* Mensagem secundária */}
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        {/* 2. Botão para voltar à Home */}
        <Link
          to="/" // Aponta para a sua rota principal
          className="rounded-md bg-[#FF8C40] px-6 py-3 font-medium text-white shadow-md transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
