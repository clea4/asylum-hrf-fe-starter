# Auth0 Setup Instructions 🔐

Congratulations on completing all 3 build sprints! Here's how to configure Auth0 for your application:

## Step 1: Create a Free Auth0 Account

1. Go to [https://auth0.com/signup](https://auth0.com/signup)
2. Sign up for a free account
3. Create a new tenant (or use the default one)

## Step 2: Create a Single Page Application

1. In the Auth0 Dashboard, go to **Applications** → **Applications**
2. Click **Create Application**
3. Name it: `Asylum HRF Tracker` (or your preferred name)
4. Select **Single Page Web Applications**
5. Click **Create**

## Step 3: Configure Application Settings

In your new application's **Settings** tab, add these URLs:

### Allowed Callback URLs
```
http://localhost:5173
```

### Allowed Logout URLs
```
http://localhost:5173
```

### Allowed Web Origins
```
http://localhost:5173
```

**Don't forget to click "Save Changes" at the bottom!**

## Step 4: Copy Your Credentials

From the same Settings page, copy:
- **Domain** (looks like: `dev-xyz123.us.auth0.com`)
- **Client ID** (looks like: `abc123xyz456...`)

## Step 5: Update Your .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
VITE_AUTH_DOMAIN=dev-xyz123.us.auth0.com
VITE_AUTH_CLIENT_ID=abc123xyz456def789ghi012...
```

## Step 6: Restart Your Dev Server

1. Stop your current dev server (Ctrl + C in terminal)
2. Run `npm run dev` again
3. Visit `http://localhost:5173`

## Step 7: Test Authentication

1. Click **Log In** in the navigation
2. Create an account or sign in with Google/other providers
3. After login, you should see:
   - "Log Out" button in nav
   - "Profile" link in nav (only when logged in)
4. Click **Profile** to see your user information
5. Click **Log Out** to test logout functionality

## Troubleshooting

### "Invalid state" or redirect errors
- Make sure your callback URLs are exactly `http://localhost:5173` (no trailing slash)
- Click "Save Changes" in Auth0 Dashboard

### Environment variables not loading
- Make sure your `.env` file is in the project root
- Restart your dev server after changing `.env`
- Check that variable names start with `VITE_`

### "Client credentials not found"
- Verify you copied the correct Domain and Client ID from Auth0
- Make sure there are no extra spaces in your `.env` file

## What You've Built ✨

✅ **Sprint 1**: Beautiful landing page with data visualization previews  
✅ **Sprint 2**: Live API integration with real asylum data  
✅ **Sprint 3**: Full Auth0 authentication with protected profile page  

## Next Steps for Graduation 🎓

1. Test all features (landing page, graphs, login/logout, profile)
2. Take screenshots or screen recording
3. Push your code to GitHub
4. Create your Loom video explaining:
   - Your implementation approach
   - Challenges you faced
   - How the features work
5. Submit your repo link and Loom video to Canvas

**You're ready to graduate! 🎉**
