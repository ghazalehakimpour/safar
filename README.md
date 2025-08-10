# Safaryar

Safaryar is a travel planning application that allows users to request customized trip plans by specifying a destination and duration.  
It is built with **Cloudflare Workers** for the backend and uses **Google Firestore** for data storage.

## Features
- Request trip plans via API.
- Generate unique `jobId` for each request.
- Store trip requests in **Firestore**.
- Simple HTML frontend for testing API.

## Technologies Used
- **Node.js**
- **Cloudflare Workers**
- **Google Firestore**
- **HTML / JavaScript**

## Project Structure
```
safaryar/
│
├── index.ts              # Cloudflare Worker API
├── firestore.ts          # Firestore connection config
├── firebase-key.json     # Firestore credentials
├── test.html             # Frontend for testing
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ghazalehakimpour/safar
   cd safaryar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your **Firestore** credentials in `firebase-key.json`.

4. Run Cloudflare Worker locally:
   ```bash
   npx wrangler dev
   ```

5. Open `test.html` in your browser to test the API.

## API Endpoint

### POST `/`
**Request Body:**
```json
{
  "destination": "Shiraz",
  "durationDays": 3
}
```

**Response:**
```json
{
  "jobId": "generated-uuid"
}
```

