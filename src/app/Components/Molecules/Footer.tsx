import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footerContainer">
      <Link className="graphSubtitle hover:text-[#5bbd82] hover:opacity-60 pr-3" href="#imprint">imprint</Link>
      <Link className="graphSubtitle hover:text-[#5bbd82] hover:opacity-60 pr-6" href="/Privacy">privacy</Link>
      <Link href="/">
        <h5 className="footerHeadline">Smart Cities</h5>
      </Link>
    </footer>
  );
}