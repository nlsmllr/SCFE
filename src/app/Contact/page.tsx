"use client"
import { Footer } from "../Components/Molecules/Footer";
import { TopBar } from "../Components/Molecules/Header";
import './../globals.css'

export default function Contact() {
  return (
    <html className='html text-white'>
      <body>
        <TopBar />
        <main className="flex flex-col items-center justify-center pt-12">
          <h1 className="text-4xl font-thin uppercase mb-8">Kontakt</h1>
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-sm font-thin uppercase mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                id="name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-thin uppercase mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                id="email"
                type="email"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-thin uppercase mb-2" htmlFor="message">
                Nachricht
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                id="message"
                rows={4}
                placeholder=""
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="hover:bg-white hover:text-black text-white font-thin uppercase border py-2 px-4 rounded"
                type="submit"
              >
                Senden
              </button>
            </div>
          </form>
        </main>
        <Footer />
      </body>
    </html>
  );
}