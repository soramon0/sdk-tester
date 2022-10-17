import { Button, Card, Grid, Stack } from '@mui/material';
import { Product } from '../lib/products';

interface Props {
  products: Product[];
  onUpdateItem(item: Product): void;
}

function ProductsList({ onUpdateItem, products }: Props) {
  return (
    <Stack
      flexWrap='wrap'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      spacing={4}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid item xs={2} sm={4} md={3} key={product.id}>
            <Card variant='outlined'>
              <Button onClick={() => onUpdateItem(product)}>
                {product.symbol} ({product.price}) - {product.fiat} (
                {product.fiat_price})
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default ProductsList;
