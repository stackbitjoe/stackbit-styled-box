import styled from '@emotion/styled'
import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
    compose,
    space,
    layout,
    typography,
    color,
    flexbox,
    border
} from 'styled-system'

const sx = props => css(props.sx)(props.theme)
const base = props => css(props.__css)(props.theme)
const variant = ({ theme, variant, tx = 'variants' }) => css(get(theme, tx + '.' + variant, get(theme, variant)))(theme)

const Box = styled('div', { shouldForwardProp })(
    { boxSizing: 'border-box', margin: 0, minWidth: 0 },
    base,
    variant,
    sx,
    props => props.css,
    compose(space, layout, typography, color, flexbox, border),
);

export default Box;