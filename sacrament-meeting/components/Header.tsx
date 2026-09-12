import NavLinks from "./NavLinks";

export default function Header() {
  // get the current date and format it as "Month Day, Year"
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex flex-col justify-between items-center gap-2 md:flex-row md:gap-4">
        <div className="text-lg font-bold">Quebec Ward</div>
        <div className="text-sm text-gray-400">{formattedDate}</div>
        <NavLinks />
      </nav>
    </header>
  );
}
