import api from "../../server/api";

export default async (req, res) => {

  const response = await api('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    json: req.body,
    throwOnError: false,
  });

  res.statusCode = response.status;
  res.send(response.body)
};
