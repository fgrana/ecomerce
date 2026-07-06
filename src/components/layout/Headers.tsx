import Link from "next/link";

const routes = [
  { href: "/", route: "Home" },
  { href: "/categories", route: "Categories" },
  { href: "/brands", route: "Brands" },
  { href: "/products", route: "Products" },
  { href: "/sale", route: "Sale" },
];

export default function Headers() {
  return (
    <header>
      <h1>Header</h1>
      {routes.map((route) => (
        <Link href={route.href} key={route.href}>
          {route.route}
        </Link>
      ))}
    </header>
  );
}
