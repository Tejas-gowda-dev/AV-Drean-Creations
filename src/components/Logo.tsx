
// Use require for image to avoid missing .webp type declaration errors in TS
// @ts-ignore
import logo from "../assets/AvDreamCreation.webp";

interface LogoProps {
  isScrolled?: boolean;
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  isScrolled,
  showTagline,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="AV Dream Creations"
        className="h-20 md:h-20 w-auto object-contain select-none"
        draggable={false}
      />
    </div>
  );
}