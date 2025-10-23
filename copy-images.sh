#!/bin/bash

# Copy images from source to destination
SOURCE_DIR="/Users/mcapace/Desktop/bib-tucker-campaign/images"
DEST_DIR="/Users/mcapace/Desktop/deutsch-bibb-tucker/public/images"

echo "Copying images from $SOURCE_DIR to $DEST_DIR"

# Copy each file individually with timeout
timeout 30 cp "$SOURCE_DIR/bib-tucker-logo.png" "$DEST_DIR/" 2>/dev/null || echo "Failed to copy bib-tucker-logo.png"
timeout 30 cp "$SOURCE_DIR/whisky-advocate-logo.png" "$DEST_DIR/" 2>/dev/null || echo "Failed to copy whisky-advocate-logo.png"
timeout 30 cp "$SOURCE_DIR/gold-roast-bottle.jpg" "$DEST_DIR/" 2>/dev/null || echo "Failed to copy gold-roast-bottle.jpg"
timeout 30 cp "$SOURCE_DIR/double-char-bottle.jpg" "$DEST_DIR/" 2>/dev/null || echo "Failed to copy double-char-bottle.jpg"
timeout 30 cp "$SOURCE_DIR/classic-six-bottle.jpg" "$DEST_DIR/" 2>/dev/null || echo "Failed to copy classic-six-bottle.jpg"

echo "Image copy process completed"
