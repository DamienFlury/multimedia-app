import styled from 'styled-components';
import React from 'react';
import Typography from '../styled-components/Typography';
import Layout from '../components/Layout';

// const ParallaxContainer = styled.div`
//   max-height: 400px;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Image = styled.img`
//   width: 150%;
// `;
const Main = styled.main`
  width: 80%;
  max-width: 920px;
  margin: auto;
`;

export default function Home() {
  return (
    <Layout title="Home">
      <div className="container">
        <Main>
          <Typography variant="h1">Home</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur, a quisquam! Illo nulla, velit illum nam architecto et
            distinctio minima ut? Culpa saepe recusandae esse maxime nam tenetur
            corrupti illum quia iusto. Animi vel placeat cupiditate quae earum
            maxime, blanditiis molestiae, atque officia doloremque, dolore
            temporibus. Voluptatum ipsam quis unde mollitia. Dolores magnam qui
            doloribus. Fugiat ea aut necessitatibus quaerat, neque pariatur.
            Officia ipsum quisquam voluptatum impedit odio,
          </Typography>
          {/* <ParallaxContainer>
          <Parallax y={[-10, 10]}>
            <Image src={Mountains} alt="mountains" />
          </Parallax>
        </ParallaxContainer> */}
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            dolorem consequuntur, blanditiis modi, libero minus iusto saepe
            error laudantium voluptas, magnam fugit ut beatae corrupti. Sapiente
            quibusdam quidem, consequatur amet ad in numquam ipsam est?
            Praesentium ab a laborum, cupiditate eum tenetur itaque aliquam
            libero magni nam commodi nisi ex ipsa sint dolor? Dolorem ut rerum
            deserunt ipsam corporis quis quos vitae! Voluptatem dolores aliquam
            vero asperiores atque nihil quo fuga autem officia laboriosam, quas
            nam consequuntur magni ducimus. Mollitia dolor consequatur numquam
            totam dignissimos odio, quidem sunt hic esse non recusandae,
            explicabo beatae incidunt laborum dicta adipisci sed unde? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Veritatis at
            itaque aut vel unde magni voluptate libero natus a? Eius non ad
            porro voluptates cumque, voluptate obcaecati. Magni quae aliquam ut
            nihil incidunt tempora at libero repellat, ipsum omnis cupiditate
            qui sit. Nulla minima cupiditate corporis rem iusto quae omnis
            possimus numquam ex voluptate! Quis, nobis quae. Quod qui ipsam quam
            aperiam similique? Amet quam quod odit. Facere, enim. Dolor
            praesentium magnam assumenda aliquid distinctio accusantium
            voluptates et quia tenetur harum unde odio deleniti nemo,
            voluptatibus iusto ab ipsum ipsam. Perspiciatis non ex rem
            architecto, vero nihil asperiores. Assumenda, reiciendis praesentium
            voluptatibus velit architecto vero tempora culpa a minima fugiat
            ducimus debitis perspiciatis dolorem neque, illo tempore officiis
            laborum? Repellendus earum eos odio maiores sed perferendis omnis
            illo harum, nulla expedita labore dolore cupiditate placeat sint
            quam quisquam vel fuga dolor recusandae obcaecati voluptas
            reiciendis nihil? Modi at optio placeat et, suscipit nihil
            consectetur quibusdam rem unde recusandae minima expedita facilis
            accusamus voluptatem commodi dicta distinctio reiciendis sunt atque
            cumque. Ad quis nihil sit laboriosam reprehenderit ducimus obcaecati
            aperiam doloremque delectus sapiente magni, minus excepturi
            doloribus omnis. Autem, itaque placeat veniam illum laborum,
            explicabo vero mollitia alias, soluta corrupti tempora quod!
            Voluptatibus omnis praesentium nihil sapiente incidunt voluptatem
            deserunt, enim placeat nulla, assumenda delectus amet esse mollitia,
            repellendus natus! Eligendi laborum commodi illum praesentium
            molestiae porro odit in accusamus, voluptatem repellat, dolorem eum
            adipisci? Cupiditate maiores labore voluptatibus expedita optio
            delectus quisquam unde velit quos similique reiciendis aspernatur
            autem laboriosam veritatis nesciunt ex cum, officia blanditiis
            magni! Neque dolorem, consequatur autem assumenda tempore quasi
            officia dolorum, rem sunt corporis sed! Neque, nostrum laboriosam
            porro aperiam earum sunt pariatur voluptatibus maiores nulla
            architecto unde deleniti facere adipisci sit, tempora animi esse
            explicabo saepe minus corporis accusamus exercitationem velit
            ratione. Velit, necessitatibus.
          </Typography>
        </Main>
      </div>
    </Layout>
  );
}
