# Manual Image Setup Instructions

Due to file system timeout issues, please manually copy the images using Finder or Terminal.

## Quick Setup (Recommended)

### Option 1: Using Finder
1. Open Finder
2. Navigate to `/Users/mcapace/Desktop/bib-tucker-campaign/images/`
3. Select all image files (Cmd+A)
4. Copy them (Cmd+C)
5. Navigate to `/Users/mcapace/Desktop/deutsch-bibb-tucker/public/images/`
6. Paste them (Cmd+V)

### Option 2: Using Terminal
```bash
# Navigate to source directory
cd "/Users/mcapace/Desktop/bib-tucker-campaign/images"

# Copy all images to destination
cp * "/Users/mcapace/Desktop/deutsch-bibb-tucker/public/images/"
```

## Essential Images Needed
- `bib-tucker-logo.png` - Bibb & Tucker logo
- `whisky-advocate-logo.png` - Whisky Advocate logo  
- `gold-roast-bottle.jpg` - Bibb & Tucker Gold Roast
- `double-char-bottle.jpg` - Bibb & Tucker Double Char
- `classic-six-bottle.jpg` - Bibb & Tucker Classic 6

## After Copying Images
1. Run `git add .` to stage the new images
2. Run `git commit -m "Add campaign images"` to commit them
3. Run `git push origin main` to push to GitHub
4. The images will be automatically deployed to Vercel

## Git LFS Setup
Git LFS is already configured to handle large image files. The images will be stored efficiently in the repository.

## Testing
After copying images, you can test the site by running:
```bash
npm run dev
```

The site will automatically use the new images in the appropriate sections.
