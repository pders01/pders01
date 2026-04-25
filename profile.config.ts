import type { ProfileConfig } from "./src/types";

export default {
  name: "Paul Derscheid",
  title: "Full-Stack Engineer",
  about: [
    { emoji: "👷", text: "Working at LMSCloud GmbH" },
    {
      emoji: "✉️",
      text: "[me@paulderscheid.xyz](mailto:me@paulderscheid.xyz)",
    },
    { emoji: "🤝", text: "Come work with us on [Koha](https://chat.koha-community.org)!" },
  ],
  skills: {
    Languages: [
      { name: "Go", url: "https://go.dev/doc/", skilliconsId: "go" },
      { name: "Perl", url: "https://www.perl.org/", skilliconsId: "perl" },
      { name: "Python", url: "https://www.python.org/", skilliconsId: "py" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/", skilliconsId: "ts" },
      { name: "Bash", url: "https://www.gnu.org/software/bash/", skilliconsId: "bash" },
    ],
    Frameworks: [
      { name: "Vue", url: "https://vuejs.org/", skilliconsId: "vue" },
      { name: "Solid", url: "https://solidjs.com/", skilliconsId: "solidjs" },
      { name: "Lit", url: "https://lit.dev/" },
      { name: "Astro", url: "https://astro.build/", skilliconsId: "astro" },
      { name: "Express", url: "https://expressjs.com/", skilliconsId: "expressjs" },
      { name: "TailwindCSS", url: "https://tailwindcss.com/", skilliconsId: "tailwind" },
    ],
    "Build Tools": [
      { name: "Vite", url: "https://vitejs.dev/", skilliconsId: "vite" },
      { name: "Webpack", url: "https://webpack.js.org/", skilliconsId: "webpack" },
      { name: "Rspack", url: "https://rspack.dev/" },
      { name: "Babel", url: "https://babeljs.io/", skilliconsId: "babel" },
    ],
    Databases: [
      { name: "PostgreSQL", url: "https://www.postgresql.org/", skilliconsId: "postgres" },
      { name: "MySQL", url: "https://www.mysql.com/", skilliconsId: "mysql" },
      { name: "Supabase", url: "https://supabase.io/", skilliconsId: "supabase" },
    ],
    Tools: [
      { name: "Node.js", url: "https://nodejs.org/en/", skilliconsId: "nodejs" },
      { name: "Bun", url: "https://bun.sh/", skilliconsId: "bun" },
      { name: "Git", url: "https://git-scm.com/", skilliconsId: "git" },
      { name: "Docker", url: "https://www.docker.com/", skilliconsId: "docker" },
      { name: "Nix", url: "https://nixos.org/", skilliconsId: "nix" },
      { name: "Neovim", url: "https://neovim.io/", skilliconsId: "neovim" },
    ],
  },
  learningSkills: [
    { name: "Rust", url: "https://www.rust-lang.org/", skilliconsId: "rust" },
    { name: "C", url: "https://en.cppreference.com/w/c", skilliconsId: "c" },
  ],
  historicalSkills: {
    "Python Ecosystem": [
      { name: "Django", url: "https://www.djangoproject.com/", skilliconsId: "django" },
      { name: "Flask", url: "https://flask.palletsprojects.com/en/2.0.x/", skilliconsId: "flask" },
    ],
  },
  statsTheme: "transparent",
} satisfies ProfileConfig;
