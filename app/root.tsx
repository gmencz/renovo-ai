import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "RenovoAI",
  viewport: "width=device-width,initial-scale=1",
  description: "Revamp your home with just a photo and AI.",
  author: "Gabriel Méndez",
  language: "en",
  robots: "index, follow",
  "twitter:card": "summary_large_image",
  "twitter:image": "https://renovo-ai.fly.dev/icon.png",
  "twitter:description": "Revamp your home with just a photo and AI.",
  "X-UA-Compatible": "IE=edge,chrome=1",
  "og:title": "RenovoAI",
  "og:type": "article",
  "og:url": "https://renovo-ai.fly.dev/",
  "og:image": "https://renovo-ai.fly.dev/icon.png",
  "og:description": "Revamp your home with just a photo and AI.",
});

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
