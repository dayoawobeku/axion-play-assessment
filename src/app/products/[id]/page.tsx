import {Metadata, ResolvingMetadata} from 'next';
import {promises as fs} from 'fs';
import path from 'path';
import {
  Box,
  Button,
  Divider,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import Nav from '@/components/nav';
import {Product} from '@/types';
import Carousel from '@/components/carousel';

export async function generateMetadata(
  {params}: {params: {id: string}},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;

  const filePath = path.join(process.cwd(), 'public', 'products.json');
  const file = await fs.readFile(filePath, 'utf8');
  const data: Product[] = JSON.parse(file);

  const product = data.find(
    product => Number(product.id) === Number(params.id),
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product?.title} - $${product?.price.toFixed(2)}`,
    description: `${product?.title} - $${product?.price.toFixed(2)}`,
    openGraph: {
      images: [product?.images[0] || '', ...previousImages],
      title: `${product?.title} - $${product?.price.toFixed(2)}`,
      description: `${product?.title} - $${product?.price.toFixed(2)}`,
      url: `https://axion-play-assessment.vercel.app/products/${id}`,
    },
    twitter: {
      title: `${product?.title} - $${product?.price.toFixed(2)}`,
      description: `${product?.title} - $${product?.price.toFixed(2)}`,
      images: product ? [{url: product.images[0]}] : [],
    },
  };
}

export default async function Products({params}: {params: {id: number}}) {
  const filePath = path.join(process.cwd(), 'public', 'products.json');
  const file = await fs.readFile(filePath, 'utf8');
  const data: Product[] = JSON.parse(file);

  const product = data.find(
    product => Number(product.id) === Number(params.id),
  );

  return (
    <>
      <Nav />
      <Flex
        marginTop="32px"
        basis="100%"
        gap="40px"
        justifyContent="space-between"
        flexDirection={{base: 'column', md: 'row'}}
      >
        {product && <Carousel images={product?.images || []} />}
        <Flex
          basis="50%"
          flexDirection="column"
          position="sticky"
          top="2.5rem"
          height="fit-content"
        >
          <Box as="h1" fontSize="2rem" lineHeight="initial">
            {product?.title}
          </Box>
          <Divider borderColor="#000" marginTop="24px" />
          <Flex marginTop="16px" gap="2.5rem" alignItems="center">
            <Box as="h1" fontSize="3rem" fontWeight="700" lineHeight="initial">
              ${product?.price.toFixed(2)}
            </Box>

            <Button
              width="100%"
              height="48px"
              textTransform={'uppercase'}
              rounded={'full'}
              bg={'black'}
              color={'white'}
              _hover={{
                bg: 'gray.800',
              }}
              _focus={{
                bg: 'gray.800',
              }}
              fontWeight="400"
            >
              Add to bag
            </Button>
          </Flex>
          <Accordion marginTop="24px" allowMultiple>
            <AccordionItem borderColor="#000">
              <h2>
                <AccordionButton paddingInline="0px">
                  <Box as="span" flex="1" textAlign="left" fontSize="1.25rem">
                    Product details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                borderColor="#000"
                pb={4}
                paddingInline="0px"
                _before={{
                  borderColor: '#000',
                }}
                _after={{
                  borderColor: '#000',
                }}
              >
                {product?.description}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <a
            href={`https://wa.me/+918787878787?text=Hey, I am interested in buying ${
              product?.title
            }-$${product?.price.toFixed(2)}.`}
            style={{
              color: 'white',
              fontWeight: '500',
              marginTop: '16px',
              textTransform: 'uppercase',
              width: 'fit-content',
              backgroundColor: '#25D366',
              padding: '12px 24px',
              borderRadius: '9999px',
            }}
            target="_blank"
            rel="noreferrer"
          >
            Inquire on WhatsApp
          </a>
        </Flex>
      </Flex>
    </>
  );
}
