type Child = string | number | boolean | null | undefined | Child[];
type Props = Record<string, unknown> & { children?: Child };

function flattenChildren(children: Child): string {
  if (children == null || typeof children === "boolean") return "";
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(flattenChildren).join("");
  return "";
}

function renderIntrinsic(tag: string, props: Props): string {
  const children = flattenChildren(props.children);

  switch (tag) {
    case "h1":
      return `# ${children}\n`;
    case "h2":
      return `## ${children}\n`;
    case "h3":
      return `### ${children}\n`;
    case "h4":
      return `#### ${children}\n`;
    case "p": {
      const align = props.align as string | undefined;
      const style = props.style as string | undefined;
      if (align || style) {
        const attrs: string[] = [];
        if (align) attrs.push(`align="${align}"`);
        if (style) attrs.push(`style="${style}"`);
        return `<p ${attrs.join(" ")}>\n${children}\n</p>\n`;
      }
      return `${children}\n`;
    }
    case "a": {
      const href = props.href as string;
      const target = props.target as string | undefined;
      const rel = props.rel as string | undefined;
      if (target || rel) {
        const attrs = [`href="${href}"`];
        if (target) attrs.push(`target="${target}"`);
        if (rel) attrs.push(`rel="${rel}"`);
        return `<a ${attrs.join(" ")}>${children}</a>`;
      }
      return `[${children}](${href})`;
    }
    case "img": {
      const src = props.src as string;
      const alt = (props.alt as string) || "";
      const width = props.width as string | number | undefined;
      const height = props.height as string | number | undefined;
      if (width || height) {
        const attrs = [`src="${src}"`];
        if (width) attrs.push(`width="${width}"`);
        if (height) attrs.push(`height="${height}"`);
        attrs.push(`alt="${alt}"`);
        return `<img ${attrs.join(" ")} />`;
      }
      return `![${alt}](${src})`;
    }
    case "ul":
      return `${children}\n`;
    case "li":
      return `* ${children}\n`;
    case "br":
      return "\n";
    case "hr":
      return "---\n";
    default:
      return children;
  }
}

export function jsx(
  type: string | ((...args: unknown[]) => string),
  props: Props,
): string {
  if (typeof type === "function") {
    return type(props) as string;
  }
  return renderIntrinsic(type, props);
}

export { jsx as jsxs, jsx as jsxDEV };

export function Fragment({ children }: Props): string {
  return flattenChildren(children);
}
