#!/bin/bash

# Copy images using dd to avoid timeout issues
SOURCE_DIR="/Users/mcapace/Desktop/bib-tucker-campaign/images"
DEST_DIR="/Users/mcapace/Desktop/deutsch-bibb-tucker/public/images"

echo "Copying images with dd to avoid timeouts..."

# Function to copy file with dd
copy_file() {
    local src="$1"
    local dest="$2"
    local filename=$(basename "$src")
    
    echo "Copying $filename..."
    
    # Use dd with smaller block size to avoid timeouts
    if dd if="$src" of="$dest" bs=1024 2>/dev/null; then
        echo "✅ Successfully copied $filename"
    else
        echo "❌ Failed to copy $filename"
    fi
}

# Copy essential images
copy_file "$SOURCE_DIR/bib-tucker-logo.png" "$DEST_DIR/bib-tucker-logo.png"
copy_file "$SOURCE_DIR/whisky-advocate-logo.png" "$DEST_DIR/whisky-advocate-logo.png"
copy_file "$SOURCE_DIR/gold-roast-bottle.jpg" "$DEST_DIR/gold-roast-bottle.jpg"
copy_file "$SOURCE_DIR/double-char-bottle.jpg" "$DEST_DIR/double-char-bottle.jpg"
copy_file "$SOURCE_DIR/classic-six-bottle.jpg" "$DEST_DIR/classic-six-bottle.jpg"

echo "Image copy process completed"
