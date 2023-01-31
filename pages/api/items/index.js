export default function handler(req, res) {
  const { q } = req.query;
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`)
    .then((response) => response.json())
    .then((data) => {
      const { filters, results } = data;
      const items = results.map((el) => {
        return {
          author: {
            name: "Roberto",
            lastName: "Zapata",
          },
          item: {
            id: el.id,
            title: el.title,
            price: {
              currency: el.currency_id,
              amount: el.price,
              decimals: 3,
            },
            picture: el.thumbnail,
            condition: el.condition,
            free_shipping: el.shipping.free_shipping,
            sold_quantity: el.sold_quantity,
            address: el.address,
          },
        };
      });
      res.status(200).json({ items, filters });
    });
}
