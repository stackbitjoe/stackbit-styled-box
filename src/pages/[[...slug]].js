
import React from 'react';

import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getComponent } from '../components/component-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';

export function Page(props) {
    const { page, site } = props;
    const { modelName } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no layout, page '${props.path}'`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page layout matching the page model: ${modelName}`);
    }
    return <PageLayout page={page} site={site} />;
}

export async function getStaticPaths() {
    const data = await sourcebitDataClient.getData();
    const paths = resolveStaticPaths(data);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = await sourcebitDataClient.getData();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default withRemoteDataUpdates(Page);


// import { Box } from '../components/Box'
// import { Flex } from '../components/Flex'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// export default function Home() {
//   return <div><Title>My page</Title>
//     <Flex flexWrap={'wrap'}>
//       <Box width={[1, 1, 1 / 2]} p={4} mb={3} bg="tomato">
//         This is a tomato box, with responsive width, some padding, and margin bottom
//       </Box>
//       <Box width={[1, 1, 1 / 2]} p={4} mb={3} bg="green">
//         This is a green box, with responsive width, some padding, and margin bottom
//       </Box>
//     </Flex>
//   </div>


