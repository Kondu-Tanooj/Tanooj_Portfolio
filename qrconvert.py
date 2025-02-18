import qrcode

# URL to be converted to QR Code
url = "https://kondu-tanooj.github.io/Tanooj_Portfolio/"
#url = "https://t.me/+SfLzEKtHb44wNTM9"

# Create a QR code object
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Add the URL to the QR code
qr.add_data(url)
qr.make(fit=True)

# Create an image from the QR code
img = qr.make_image(fill='black', back_color='white')

# Save the image
img.save("qr_code.png")

# Optionally, display the image
img.show()
