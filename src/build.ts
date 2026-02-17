import { compile } from "@mdx-js/mdx";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import config from "../profile.config";
import * as runtime from "./jsx-runtime";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";

const __dirname = import.meta.dirname ?? dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const MDX_PATH = resolve(__dirname, "profile.mdx");

async function build() {
  const source = readFileSync(MDX_PATH, "utf-8");

  const compiled = await compile(source, {
    outputFormat: "function-body",
    development: false,
  });

  const code = String(compiled);

  // MDX function-body format uses arguments[0] for the JSX runtime
  // and returns { default: MDXContent }. We inject `config` via arguments[1].
  const wrappedCode = `const config = arguments[1];\n${code}`;
  const factory = new Function(wrappedCode);

  const mod = factory(runtime, config);

  if (!mod?.default || typeof mod.default !== "function") {
    throw new Error("MDX compilation did not produce a valid default export");
  }

  const MDXContent = mod.default as (props: Record<string, unknown>) => string;

  const result = MDXContent({
    components: { Header, About, Skills, Stats },
  });

  writeFileSync(resolve(ROOT, "README.md"), result.trim() + "\n");
  console.log("✓ README.md generated");
}

build().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
