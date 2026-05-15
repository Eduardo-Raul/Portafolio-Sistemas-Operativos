import { MDXRemote } from 'next-mdx-remote/rsc';
import type { ComponentProps } from 'react';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

type MarkdownContentProps = {
  source: string;
};

const components = {
  table: ({ children, ...props }: ComponentProps<'table'>) => (
    <div className="my-6 overflow-x-auto">
      <table {...props}>{children}</table>
    </div>
  ),
  code: ({ children, className, ...props }: ComponentProps<'code'>) => {
    const isBlock = Boolean(className?.startsWith('language-'));

    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="rounded bg-slate-200/80 px-1.5 py-0.5 font-mono text-[0.9em] font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100"
        {...props}
      >
        {children}
      </code>
    );
  },
};

export async function MarkdownContent({ source }: MarkdownContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
        },
      }}
    />
  );
}
