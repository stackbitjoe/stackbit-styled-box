import dynamic from 'next/dynamic';

export function getComponent(key) {
    return components[key];
}

const components = {
    'Box': dynamic(() => import('./Box')),
    'TextBlock': dynamic(() => import('./TextBlock')),
    'ImageBlock': dynamic(() => import('./ImageBlock')),
    'PageLayout': dynamic(() => import('./PageLayout')),
    'Card': dynamic(() => import('./Card')),
    'Heading': dynamic(() => import('./Elements/Heading'))
};