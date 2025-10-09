# Deploying to Cloudflare Pages

This project is configured to deploy to Cloudflare Pages using the `@cloudflare/next-on-pages` adapter for full Next.js support.

## Prerequisites

1. A Cloudflare account
2. Cloudflare API Token with Pages permissions
3. Your Cloudflare Account ID

## Deployment Options

### Option 1: Automatic Deployment via GitHub Actions

1. Add the following secrets to your GitHub repository:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

2. Push to the `main` branch, and the GitHub Action will automatically deploy

### Option 2: Manual Deployment via CLI

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Build the project with @cloudflare/next-on-pages:
   \`\`\`bash
   npm run pages:build
   \`\`\`

3. Deploy to Cloudflare Pages:
   \`\`\`bash
   npm run deploy
   \`\`\`

### Option 3: Deploy via Cloudflare Dashboard

1. Build the project locally:
   \`\`\`bash
   npm run pages:build
   \`\`\`

2. Go to the Cloudflare Dashboard > Pages
3. Create a new project
4. Upload the `.vercel/output/static` directory

## Build Configuration

- **Build command**: `npm run pages:build`
- **Build output directory**: `.vercel/output/static`
- **Node version**: 20.x

## Environment Variables

No environment variables are required for this static site.

## Custom Domain

To add a custom domain:
1. Go to your Cloudflare Pages project
2. Navigate to Custom domains
3. Add your domain and follow the DNS configuration steps
