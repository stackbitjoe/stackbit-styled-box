import * as React from 'react';
import { getDataAttrs } from '../../utils/get-data-attrs';
import { Markdown } from '../Markdown';

export default function TextSection(props) {

    return (
        <div {...getDataAttrs(props)}>
            {(props.text || showPlaceholders) && (
                <Markdown className="max-w-screen-md mx-auto sb-markdown" data-sb-field-path='.text' text={props.text} />
            )}
        </div>
    );
}