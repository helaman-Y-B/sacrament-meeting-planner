"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav
      className="border-2 rounded p-2 ml-4 w-fit flex gap-6"
      aria-label="Pagination"
    >
      {currentPage > 1 && (
        <Link
          className="hover:text-yellow-600"
          href={createPageURL(currentPage - 1)}
        >
          Previous
        </Link>
      )}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          className="hover:text-yellow-600"
          href={createPageURL(currentPage + 1)}
        >
          Next
        </Link>
      )}
    </nav>
  );
}
