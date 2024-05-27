import Image from 'next/image';
import Link from 'next/link';
import {Box, Flex, Grid, GridItem} from '@chakra-ui/react';
import {promises as fs} from 'fs';
import path from 'path';
import {Product} from '@/types';
import Nav from '@/components/nav';
import ProductCatalogue from '@/components/product-catalogue';

export default async function Home() {
  const filePath = path.join(process.cwd(), 'public', 'products.json');
  const file = await fs.readFile(filePath, 'utf8');
  const data: Product[] = JSON.parse(file);

  const newCollections = data.slice(0, 3);
  const topDeals = data.slice(3, 7);
  const bestSellers = data.slice(7, 9);

  return (
    <>
      <Nav />

      <Flex
        marginTop="64px"
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent="space-between"
      >
        <Box as="p" textTransform="uppercase" fontSize="0.875rem">
          Shop From Our NEW Collections
        </Box>
        <Box
          as="p"
          textDecoration="underline"
          fontSize="0.875rem"
          fontWeight="500"
        >
          See all
        </Box>
      </Flex>

      <Grid
        marginTop="16px"
        gap="1.5rem"
        templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
      >
        {newCollections.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <GridItem
              flexDirection="column"
              gap="1.5rem"
              _hover={{
                '.product-image': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              <Image
                src={product.images[0]}
                alt="A pair of shoes"
                width={368}
                height={327}
                className="product-image"
              />
              <Flex marginTop="16px" flexDirection="column">
                <Box as="p" fontSize="1.5rem" fontWeight="500" noOfLines={1}>
                  {product.title}
                </Box>
                <Box as="p" fontSize="1rem" color="#535661" noOfLines={2}>
                  {product.description}
                </Box>
                <Box as="p" fontSize="1.25rem" fontWeight="600">
                  ${product.price.toFixed(2)}
                </Box>
              </Flex>
            </GridItem>
          </Link>
        ))}
      </Grid>

      <Flex
        marginTop="72px"
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent="space-between"
      >
        <Box as="p" textTransform="uppercase" fontSize="0.875rem">
          Top Deals
        </Box>
        <Box
          as="p"
          textDecoration="underline"
          fontSize="0.875rem"
          fontWeight="500"
        >
          See all
        </Box>
      </Flex>

      <Grid
        marginTop="16px"
        gap="1.5rem"
        templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
      >
        {topDeals.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <GridItem
              flexDirection="column"
              gap="1.5rem"
              _hover={{
                '.product-image': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              <Image
                src={product.images[0]}
                alt="A pair of shoes"
                width={270}
                height={260}
                className="product-image"
              />
              <Flex marginTop="16px" flexDirection="column">
                <Box as="p" fontSize="1.5rem" fontWeight="500" noOfLines={1}>
                  {product.title}
                </Box>
                <Box as="p" fontSize="1rem" color="#535661" noOfLines={2}>
                  {product.description === 'Not available'
                    ? '-'
                    : product.description}
                </Box>
                <Box as="p" fontSize="1.25rem" fontWeight="600">
                  ${product.price.toFixed(2)}
                </Box>
              </Flex>
            </GridItem>
          </Link>
        ))}
      </Grid>

      <Flex
        marginTop="72px"
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent="space-between"
      >
        <Box as="p" textTransform="uppercase" fontSize="0.875rem">
          Best sellers
        </Box>
        <Box
          as="p"
          textDecoration="underline"
          fontSize="0.875rem"
          fontWeight="500"
        >
          See all
        </Box>
      </Flex>

      <Grid
        marginTop="16px"
        gap="1.5rem"
        templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
      >
        {bestSellers.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <GridItem
              flexDirection="column"
              gap="1.5rem"
              _hover={{
                '.product-image': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              <Image
                src={product.images[0]}
                alt="A pair of shoes"
                width={564}
                height={455}
                className="product-image"
              />
              <Flex marginTop="16px" flexDirection="column">
                <Box as="p" fontSize="1.5rem" fontWeight="500" noOfLines={1}>
                  {product.title}
                </Box>
                <Box as="p" fontSize="1rem" color="#535661" noOfLines={2}>
                  {product.description}
                </Box>
                <Box as="p" fontSize="1.25rem" fontWeight="600">
                  ${product.price.toFixed(2)}
                </Box>
              </Flex>
            </GridItem>
          </Link>
        ))}
      </Grid>

      <Flex
        flexDirection={{base: 'column', md: 'row'}}
        marginTop="72px"
        justifyContent="space-between"
      >
        <Box as="p" textTransform="uppercase" fontSize="0.875rem">
          BROWSE OUR CATALOGUE
        </Box>
        <Box
          as="p"
          textDecoration="underline"
          fontSize="0.875rem"
          fontWeight="500"
        >
          See all
        </Box>
      </Flex>

      <ProductCatalogue data={data} />
    </>
  );
}
