import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ParallaxContainer = styled.div`
  height: 600px;
  overflow: hidden;
`

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "first.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      Welcome{' '}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A architecto
        tempora, nihil repudiandae at quisquam, expedita blanditiis inventore
        cupiditate numquam sint dicta porro. Assumenda dolore est non!
        Laboriosam reprehenderit obcaecati velit maiores earum ea maxime
        corporis, omnis ratione atque, quod soluta qui? Architecto eligendi
        commodi maxime incidunt delectus asperiores officiis quibusdam dolorum,
        animi accusamus sed aliquid modi temporibus ex voluptatem. Earum vitae
        repellendus quae atque, voluptates eligendi voluptatum! Reiciendis iusto
        iste pariatur modi obcaecati voluptas ipsum rem eum exercitationem.
        Saepe, iste impedit, eaque asperiores voluptates amet autem fugiat eos
        sapiente obcaecati tempore distinctio perspiciatis voluptate
        exercitationem facere nostrum! Eveniet, tenetur!
      </p>
      <ParallaxContainer>
        <Parallax y={[-20, 20]}>
          <Img fluid={data.image.childImageSharp.fluid} />
        </Parallax>
      </ParallaxContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora
        perferendis perspiciatis ducimus aperiam aliquid nam illum ratione quae
        quis ex cupiditate, voluptatem veniam repudiandae, dolorem ut reiciendis
        aliquam minus, maxime eum excepturi amet deleniti animi. Minima neque
        dolores, eveniet incidunt dolorum nulla reiciendis molestias omnis
        commodi officia esse corporis beatae illum iure est ullam quos
        voluptatibus aliquid quidem consequatur ratione quas laboriosam! Nostrum
        eos eaque quaerat dolorum quidem modi facere optio quasi harum excepturi
        vel ex necessitatibus neque nulla dignissimos itaque omnis, quibusdam
        corporis doloremque temporibus! Dolores vel illo dicta voluptatum,
        nostrum ipsum perferendis impedit explicabo incidunt nemo id possimus
        aspernatur culpa omnis eos cum error porro quasi quis corporis. Aliquam
        totam qui, fugiat tempora ipsum asperiores rerum voluptatem eaque fugit
        numquam quaerat minima amet, nisi beatae temporibus suscipit error
        expedita autem nesciunt quasi vitae impedit! Iste aut eveniet amet
        voluptates iure quidem aspernatur suscipit vitae, vel ducimus, veniam
        impedit deleniti praesentium cupiditate nulla modi recusandae numquam
        rem doloribus dolores ipsam officia delectus veritatis! Obcaecati
        reprehenderit earum doloremque at ipsum assumenda sint debitis delectus
        libero iusto expedita, ea ut magnam culpa? Eligendi obcaecati facere
        molestias, molestiae deleniti ab iste non voluptas praesentium
        cupiditate. Iure atque repudiandae inventore necessitatibus laudantium
        consequatur ipsum quod excepturi eius dolorum eum quo quaerat, tempore
        odio, rem unde quibusdam numquam impedit eos. Impedit consectetur
        doloribus minima recusandae ipsa, facilis beatae! Beatae deserunt
        nostrum, quidem, nam cumque laborum officia error, minus perspiciatis
        quod quos et vel eaque minima quis debitis sunt accusantium consequatur
        corrupti non perferendis aspernatur? Amet fugiat minus ad iste esse
        ratione praesentium distinctio qui, ipsa atque exercitationem. Veritatis
        culpa aliquid quam rem minus doloremque, maxime quod, consequatur quasi
        iusto eveniet officia quo ad ut fugit iure tempore alias eum a repellat
        repudiandae ab et! Nisi quis rem, sint fugit explicabo molestias
        perspiciatis aspernatur saepe eos blanditiis ea, ipsum nemo! Beatae
        accusantium officia sequi ipsum dignissimos voluptates deleniti
        repellat, soluta, placeat nobis atque corporis dolorum error reiciendis
        dolorem esse veniam quas? Eligendi cupiditate omnis, laborum aliquam
        possimus necessitatibus consequuntur sed iste, delectus soluta aut,
        facere reiciendis dignissimos et aliquid? Vitae corrupti placeat
        assumenda ipsum asperiores. Temporibus dolore distinctio culpa eligendi
        odio enim corporis ad tenetur asperiores, neque quos repellendus ea sit
        nulla possimus voluptate provident facere minima itaque accusamus?
        Maiores porro, repellendus doloribus veritatis dicta possimus
        perferendis quae iure quisquam atque ratione vel eum. Corporis porro
        odio, ipsa alias perspiciatis, dolor delectus, aliquid at suscipit
        similique exercitationem veniam ratione? Eius alias reiciendis, nostrum
        laborum ab maiores ut. Voluptas asperiores labore ipsam laudantium enim
        dolorem harum placeat reprehenderit omnis dignissimos alias, unde eum in
        rerum ipsum, perspiciatis temporibus voluptatibus itaque aut suscipit.
        Labore architecto sed nihil! Et accusamus repellat ipsum reprehenderit
        placeat saepe voluptatem, odio neque facere ab laudantium repellendus
        distinctio. Ipsam libero sed quod omnis delectus quisquam sit esse
        excepturi incidunt alias temporibus, doloremque rem quia pariatur minima
        culpa tempore, voluptatibus saepe aliquid veritatis ipsa mollitia?
        Suscipit incidunt autem quo nobis corporis eaque, illum vel facere
        corrupti blanditiis quas unde voluptatibus qui? Doloremque illo,
        repellendus, quaerat minus error tempora consectetur rerum aut eius
        commodi labore fuga placeat asperiores blanditiis officia quasi minima
        odit, libero alias atque quae laboriosam nisi! Modi nisi dolores optio
        iure nam itaque, iste distinctio explicabo incidunt expedita cum maiores
        similique voluptates repellendus quis, tempora nihil repellat illum
        autem ipsum quod nemo. Similique in voluptas consectetur sed temporibus
        eveniet perspiciatis quo ullam possimus et obcaecati quis quos nobis,
        voluptatem optio! Nobis maiores fugiat minima asperiores sequi. Quaerat,
        sit! Debitis qui quis doloribus suscipit necessitatibus praesentium
        natus commodi molestiae earum, veritatis, quidem, similique animi minima
        ullam quaerat sunt quos ad sed unde porro nisi provident ea vel aliquid.
        Dolor corrupti omnis aspernatur neque totam quibusdam necessitatibus,
        itaque velit accusamus dolores aut reprehenderit. Aliquam dolorum
        dignissimos nostrum, suscipit nobis, debitis quia cum voluptatum eum,
        omnis distinctio temporibus. Dolore praesentium pariatur ipsum illo
        nesciunt asperiores laudantium minus facere, facilis qui necessitatibus
        esse magnam dolorem expedita atque excepturi modi a. Dolor sequi ut
        libero quia dolores aut exercitationem, perferendis nobis quo facere
        excepturi inventore, quaerat neque eius vero id laborum sint totam ipsam
        obcaecati sit necessitatibus temporibus. Qui dignissimos, voluptatum
        quasi deleniti at veniam alias delectus ex! Quod ullam iste quas ratione
        exercitationem commodi. Incidunt, voluptatum debitis harum dignissimos
        dolorem ex ullam vitae libero magni expedita iste! Doloremque quae est
        laudantium aperiam perspiciatis nemo, optio sunt mollitia magni
        voluptates quidem error facere vitae, sit architecto facilis, dicta
        reprehenderit molestiae quis? Facere incidunt corporis dolores totam
        quisquam molestiae sit ipsa necessitatibus! Pariatur in quam velit
        voluptatem facilis ex sequi, necessitatibus ipsa quaerat sint blanditiis
        dignissimos dicta error quibusdam numquam veritatis asperiores deserunt,
        excepturi suscipit perferendis. Corporis et aspernatur, doloremque ipsum
        pariatur necessitatibus numquam iusto excepturi saepe temporibus
        eveniet, debitis laborum voluptas? Odit facere molestias reprehenderit?
        Cumque, ut omnis. Cumque, totam laborum officia, possimus nisi
        consequuntur iusto ullam doloremque ipsam autem maxime voluptates
        eligendi obcaecati voluptatibus magni tempore, eaque itaque architecto
        aut minus maiores veritatis commodi! Repudiandae unde autem soluta
        quaerat animi, porro officiis architecto hic impedit cum enim iure id
        nobis at dolorem maxime illum libero nam similique ut! Quia dolor
        tenetur sed ducimus delectus cupiditate ullam esse soluta libero vero
        minus, excepturi consequuntur doloribus, quasi ipsam dolores tempore
        suscipit rerum reiciendis, expedita voluptas fugiat. Odio unde quaerat,
        molestias distinctio neque numquam enim quia sit facere? Minima
        repudiandae reiciendis doloremque autem explicabo fugiat dolor
        perferendis enim expedita, eos minus beatae ab aliquam sapiente, ut sit
        ipsa magnam! Aliquam eos minus veritatis, quia inventore laborum, odit
        nobis, consequuntur sint esse corporis. Cum veniam nulla cumque impedit
        magni incidunt officia quod? Ratione quis facilis dolorem, sequi nemo,
        asperiores cum porro, quidem consequuntur modi perspiciatis vitae est
        dicta repudiandae eos illo? Inventore in porro vero. Sint doloremque,
        deserunt consequuntur consequatur aspernatur praesentium adipisci vitae,
        tempore, eum harum numquam quam amet debitis. Molestiae molestias
        excepturi voluptas quidem quae expedita corrupti iure voluptatem fugit,
        dicta tempore impedit velit quas, reprehenderit laboriosam hic in sint
        ullam eum. Doloribus earum quibusdam blanditiis id ea, libero esse sunt
        quam, ad nisi corrupti similique eaque?
      </p>
    </Layout>
  )
}

export default IndexPage
