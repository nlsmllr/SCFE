import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footerContainer">
      <a className="graphSubtitle hover:text-[#5bbd82] hover:opacity-60 pr-3" href="#imprint">imprint</a>
      <Link className="graphSubtitle hover:text-[#5bbd82] hover:opacity-60 pr-6" href="/Privacy">privacy</Link>
      <a href="https://scfe.vercel.app/">
        <h5 className="footerHeadline">Smart Cities</h5>
      </a>
    </footer>
  );
}