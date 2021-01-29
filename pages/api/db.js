import db from '../../db.json';

export default function dbHandler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  }

  res.setHeader('Acess-Control-Allow-Credentials', true);
  res.setHeader('Acess-Control-Allow-Origin', '*');
  res.setHeader('Acess-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');

  res.json(db);
}
