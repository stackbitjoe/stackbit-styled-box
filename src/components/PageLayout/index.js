import * as React from 'react';
import { getComponent } from '../component-registry';
import { withTheme } from 'styled-components';

import Box from '../Box';

function PageLayout(props) {
    const { page, theme } = props;
    const freeform = page.Freeform || null;
    const pageMeta = page?.__metadata || {};

    return (
        <div data-sb-object-id={pageMeta.id}>
            <Box theme={theme} width={[1, .9, .9, .8]} margin={'0 auto'} id="main">
                <div data-sb-field-path="Freeform">
                    <Box data-sb-field-path="Boxes">
                        {freeform?.Boxes?.map((box, boxIndex) => {
                            return <BoxGrouping key={`${Math.floor(Math.random() * 1000000)}`}
                                box={box}
                                index={boxIndex} {...props} />
                        })}
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export const BoxGrouping = (props) => {
    let { box, index, depth = 0, theme } = props;

    return (
        <Box
            theme={theme}
            key={`${depth}_${index}`}
            data-sb-field-path={`.Boxes.${index}`}
            display={box.display}
            flexWrap={box.wrap}
            alignContent={box.align}
            justifyContent={box.justify}
            bg={colorDepthMap(depth)}
            border={'dashed 1px'}
            minHeight={'200px'}
            width={[box.smallWidth / 100, box.mediumWidth / 100, box.largeWidth / 100, box.extraLargeWidth / 100]}>

            {box.Boxes.map((childBox, childBoxIndex) => {
                if (childBox.Boxes) {
                    return <BoxGrouping box={childBox} index={childBoxIndex} parentIndex={index} depth={depth + 1} theme={theme} />
                } else {
                    return lookUpComponent(childBox, childBoxIndex);
                }
            })}
        </Box >
    )
}

function colorDepthMap(depth) {
    let colors = [
        '#e7f1e9',
        '#d0e4d3',
        '#b9d6bd',
        '#a2c9a7',
        '#8bbc91',
        '#74ae7b',
        '#5da166',
        '#508a57',
        '#427348',
        '#355c3a',
        '#28452b',
        '#1a2e1d',
        '#0d170e',
        '#000000'
    ]

    return colors[depth] ?? '#ccc'
}

function lookUpComponent(box, childBoxIndex) {
    const Component = getComponent(box.type);

    if (!Component) {
        throw new Error(`no component matching the page section's type: ${box.type}`);
    }

    return <div data-sb-field-path={`.Boxes.${childBoxIndex}`}><Component key={`${Math.floor(Math.random() * 1000000)}`} {...box} /></div>;
}

export default withTheme(PageLayout);