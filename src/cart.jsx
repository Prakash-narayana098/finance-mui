import "./App.css";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Paper, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const desserts = [
  { title: "Waffle with Berries", price: "$6.50", image: "/path-to-image1.jpg" },
  { title: "Vanilla Bean Crème Brûlée", price: "$7.00", image: "/path-to-image2.jpg" },
  { title: "Macaron Mix of Five", price: "$8.00", image: "/path-to-image3.jpg" },
  { title: "Classic Tiramisu", price: "$5.50", image: "/path-to-image4.jpg" },
  { title: "Pistachio Baklava", price: "$4.00", image: "/path-to-image5.jpg" },
  { title: "Lemon Meringue Pie", price: "$5.00", image: "/path-to-image6.jpg" },
  { title: "Red Velvet Cake", price: "$4.50", image: "/path-to-image7.jpg" },
  { title: "Salted Caramel Brownie", price: "$5.50", image: "/path-to-image8.jpg" },
  { title: "Vanilla Panna Cotta", price: "$6.50", image: "/path-to-image9.jpg" }
];

function DessertCard({ title, price, image }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{price}</Typography>
        <Button 
          variant="outlined" 
          startIcon={<ShoppingCartIcon />} 
          sx={{ mt: 2 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default function DessertShop() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {/* Dessert Grid */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Desserts
          </Typography>
          <Grid container spacing={3}>
            {desserts.map((dessert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <DessertCard title={dessert.title} price={dessert.price} image={dessert.image} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        {/* Cart Section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>Your Cart (0)</Typography>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/path-to-cart-image.jpg" alt="Cart" style={{ width: '100px' }} />
              <Typography variant="body1">Your added items will appear here</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
