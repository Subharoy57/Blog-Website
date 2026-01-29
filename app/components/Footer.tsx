"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">

        {/* Brand + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Tech Blog
          </h3>

          <p className="mt-4 text-sm font-medium text-slate-200">
            Subscribe to our newsletter
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Get the latest posts delivered to your inbox.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <h4 className="text-sm font-semibold text-white mb-3">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social + Meta */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">
            Follow
          </h4>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="text-slate-400 hover:text-white transition"
            >
              <Twitter size={20} />
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            © <time dateTime="2026">2026</time> Tech Blog. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}


