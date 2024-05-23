import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { promises as fs } from "fs";
import { Product } from "@/types";
import Nav from "@/components/nav";
import ProductCatalogue from "@/components/product-catalogue";

function getRandomProducts(data: Product[], numItems: number) {
  const shuffledData = [...data];

  return shuffledData.sort(() => Math.random() - 0.5).slice(0, numItems);
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/products.json", "utf8");
  const data: Product[] = JSON.parse(file);

  const newCollections = data.slice(0, 3);
  const topDeals = data.slice(3, 7);
  const bestSellers = data.slice(7, 9);
  const randomProducts = getRandomProducts(data, 6);

  return (
    <>
      <Nav />

      <Flex marginTop="64px" justifyContent="space-between">
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

      <Grid marginTop="16px" gap="1.5rem" templateColumns="repeat(3, 1fr)">
        {newCollections.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <GridItem flexDirection="column" gap="1.5rem">
              <Image
                src={product.images[0]}
                alt="A pair of shoes"
                width={368}
                height={327}
              />
              <Flex flexDirection="column">
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

      <Flex marginTop="72px" justifyContent="space-between">
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

      <Grid marginTop="16px" gap="1.5rem" templateColumns="repeat(4, 1fr)">
        {topDeals.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <GridItem flexDirection="column" gap="1.5rem">
              <Image
                src={product.images[0]}
                alt="A pair of shoes"
                width={270}
                height={260}
              />
              <Flex flexDirection="column">
                <Box as="p" fontSize="1.5rem" fontWeight="500" noOfLines={1}>
                  {product.title}
                </Box>
                <Box as="p" fontSize="1rem" color="#535661" noOfLines={2}>
                  {product.description === "Not available"
                    ? "-"
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
        marginBlock="104px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="column" maxW="628px">
          <Box as="h1" fontSize="3rem" lineHeight="56px">
            Fresh sneakers are important on a man. It&apos;s like a new pair of
            boxers or a new pair of socks.
          </Box>
          <Box marginTop="8px" as="p" fontSize="1.25rem" color="#535661">
            DJ Khaled
          </Box>
        </Flex>

        <Grid templateColumns="repeat(3, 1fr)">
          {randomProducts.map((product) => (
            <GridItem key={product.id} flexDirection="column" gap="1.5rem">
              <Image
                src={product.images[0]}
                alt="A pair of shoes"
                width={112}
                height={112}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>

      <Flex justifyContent="space-between">
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

      <Grid marginTop="16px" gap="1.5rem" templateColumns="repeat(2, 1fr)">
        {bestSellers.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <GridItem flexDirection="column" gap="1.5rem">
              <Image
                src={product.images[0]}
                alt="A pair of shoes"
                width={564}
                height={455}
              />
              <Flex flexDirection="column">
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

      <Flex marginTop="72px" justifyContent="space-between">
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
