
import styled from 'styled-components'
import { layout } from 'styled-system';

const H1 = styled.h1`
${layout}`;

const H2 = styled.h2`
${layout}`;

const H3 = styled.h3`
${layout}`;

const H4 = styled.h4`
${layout}`;

const H5 = styled.h5`
${layout}`;

const H6 = styled.h6`
${layout}`;

function getHeading(level) {
    switch (level) {
        case "h1": return H1
        case "h2": return H2
        case "h3": return H3
        case "h4": return H4
        case "h5": return H5
        case "h6": return H6
        default: return H1
    }
}

export default function Heading(props) {
    let { text, level } = props;

    const Tag = getHeading(level);
    return <Tag data-sb-field-path=".text">{text}</Tag>
}
