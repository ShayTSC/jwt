const jwt = require('jsonwebtoken');
const fs = require('fs');

// Load the private and public keys
const privateKey = fs.readFileSync('private.key', 'utf8');
const publicKey = fs.readFileSync('public.key', 'utf8');

// Define the payload to be encoded
const payload = {
  userId: 'user123',
  email: 'user@example.com',
  role: 'admin'
};

// Sign the token using the private key
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '1h' });
console.log('Encoded JWT:', token);

// Verify the token using the public key
try {
  const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
  console.log('Decoded payload:', decoded);
} catch (err) {
  console.error('Error decoding JWT:', err);
}
