import React from "react";

import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardOptionsNote,
    CardButton,
    CardLink
} from "./card.styles";

export default function Card(props) {
    return (<CardWrapper>
        <CardHeader>
            <CardHeading>Hello World!</CardHeading>
        </CardHeader>

        <CardBody>
            <CardFieldset>
                <CardOptionsNote>This is a card</CardOptionsNote>
            </CardFieldset>

            <CardFieldset>
                <CardButton type="button">Sign Up</CardButton>
            </CardFieldset>

            <CardFieldset>
                <CardLink>I already have an account</CardLink>
            </CardFieldset>
        </CardBody>
    </CardWrapper>
    );
}