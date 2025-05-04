const express = require('express');
const cors = require('cors');
const { getBinDays } = require('wiltshire-bin-day-api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/bin-days', async (req, res) => {
  const { postcode, address } = req.body;

  try {
    const result = await getBinDays(postcode, address);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bin days' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
