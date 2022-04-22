import * as React from 'react';

export default function ImageBlock(props) {
    const { url, altText } = props;
    if (!url) {
        return null;
    }
    const cssId = props.elementId || null;
    const styles = props.styles?.self || {};
    const imageOpacity = styles.opacity || styles.opacity === 0 ? styles.opacity : 100;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@src`,
        `${annotationPrefix}.altText#@alt`,
        `${annotationPrefix}.elementId#@id`
    ];

    return (
        <img
            id={cssId}
            src={url}
            alt={altText || ''}
            style={{
                width: '100%',
                height: 'auto'
            }}
            data-sb-field-path={annotations.join(' ').trim()}
        />
    );
}
