'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Grid, GridItem, Flex, Box, Button} from '@chakra-ui/react';
import {Product} from '@/types';

export default function ProductCatalogue({data}: {data: Product[]}) {
  const itemsPerPage = 10;
  const initialProducts = data.slice(0, itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(initialProducts);

  const handleLoadmore = () => {
    const nextSkip = currentPage * itemsPerPage;
    const nextProducts = data.slice(nextSkip, nextSkip + itemsPerPage);
    setProducts([...products, ...nextProducts]);
    setCurrentPage(currentPage + 1);
  };

  const hasMore = data.length > currentPage * itemsPerPage;

  return (
    <>
      <Grid
        marginTop="16px"
        gap="1.5rem"
        templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
      >
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <GridItem
              flexDirection="column"
              rowGap="1.5rem"
              columnGap="4.5rem"
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

      {hasMore && (
        <Flex>
          <Button
            width="fit-content"
            marginInline="auto"
            marginTop="72px"
            as="button"
            fontWeight="500"
            onClick={handleLoadmore}
          >
            Load More
          </Button>
        </Flex>
      )}
    </>
  );
}
