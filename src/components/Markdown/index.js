import MarkdownToJsx from 'markdown-to-jsx';
import { pickDataAttrs } from '@stackbit/annotations';

export const Markdown = ({ text, className, ...rest }) => {
    return (
        <MarkdownToJsx options={{ forceBlock: true, forceWrapper: true }} className={className} {...pickDataAttrs(rest)}>
            {text}
        </MarkdownToJsx>
    );
};
