export default function handler(req, res) {
  const { id } = req.query;

  const fetch1 = fetch(`https://api.mercadolibre.com/items/${id}`).then((res) =>
    res.json()
  );

  const fetch2 = fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  ).then((res) => res.json());

  Promise.all([fetch1, fetch2]).then(([data1, data2]) => {
    const data = {
      title: data1?.title,
      sold_quantity: data1?.sold_quantity,
      thumbnail: data1?.thumbnail,
      price: data1?.price,
      plain_text: data2?.plain_text,
    };

    res.status(200).json({ data });
  });
}
