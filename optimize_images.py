import os
from PIL import Image

def optimize_images(directory):
    # Supported extensions
    extensions = ['.png', '.jpg', '.jpeg']
    
    for filename in os.listdir(directory):
        if any(filename.lower().endswith(ext) for ext in extensions):
            filepath = os.path.join(directory, filename)
            
            try:
                with Image.open(filepath) as img:
                    # Get original dimensions
                    width, height = img.size
                    
                    # Calculate new dimensions if image is too large (max width 1920)
                    max_width = 1920
                    if width > max_width:
                        ratio = max_width / width
                        new_width = max_width
                        new_height = int(height * ratio)
                        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized {filename} to {new_width}x{new_height}")
                    
                    # Save as WebP
                    filename_without_ext = os.path.splitext(filename)[0]
                    webp_filename = filename_without_ext + ".webp"
                    webp_filepath = os.path.join(directory, webp_filename)
                    
                    # optimized save
                    img.save(webp_filepath, "WEBP", quality=80, optimize=True)
                    print(f"Optimized: {filename} -> {webp_filename}")
                    
            except Exception as e:
                print(f"Failed to process {filename}: {e}")

if __name__ == "__main__":
    current_directory = os.getcwd()
    print(f"Scanning directory: {current_directory}")
    optimize_images(current_directory)
