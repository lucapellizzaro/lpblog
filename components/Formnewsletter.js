import Link from "next/link";

function Formnewsletter() {
  return (
    <div>
      <form>
        <div className="col-span-6 md:col-span-4 mb-2">
          <label for="email_address" className="block text-sm text-brand-600">
            Non ti invierò pubblicità, solo brevi aggiornamenti!
          </label>
          <input
            type="text"
            name="email_address"
            id="email_address"
            autocomplete="email"
            placeholder="la tua e-mail: user@mail.es"
            className="mt-1 focus:ring-brand-500 focus:border-brand-300 block w-full shadow-sm md:text-sm border-brand-100 rounded-md"
          />
        </div>
        <div className="flex mb-3">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 text-brand-400 focus:ring-brand-500 border-brand-100 rounded"
          />
          <label
            for="remember_me"
            className="ml-2 block text-xs text-brand-600"
          >
            Ho letto{" "}
            <Link href="/cookie-privacy-policy">
              <a className="text-brand-700 hover:text-brand-400 hover:underline">
                l'informativa privacy
              </a>
            </Link>{" "}
            e acconsento alla memorizzazione dei miei dati nel vostro archivio.
          </label>
        </div>
        <button
          type="submit"
          className="uppercase group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
        >
          Mi iscrivo!
        </button>
      </form>
    </div>
  );
}

export default Formnewsletter;
