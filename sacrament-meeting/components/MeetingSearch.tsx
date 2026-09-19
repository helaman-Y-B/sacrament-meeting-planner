"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // always reset to page 1 on a new search
    if (term) {
      params.set("query", term); // Set the query in URL
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`); // Modifies the URL
  }, 300);

  return (
    <input
      className="w-full max-w-md border-2 border-solid border-black rounded bg-white p-2"
      type="search"
      placeholder="Search by speaker, leader, or meeting type..."
      defaultValue={searchParams.get("query")?.toString()} // Reads the query value on the URL EX:/meetings?page=1&query=regular
      onChange={(e) => handleSearch(e.target.value)} // Event
      aria-label="Search meetings"
    />
  );
}
