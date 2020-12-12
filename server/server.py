from flask import Flask 
from steganography.steganography import hide, retrieve

app = Flask(__name__)

@app.route("/encrypt/<image>/<message>", methods=["GET"])
def encrypt(image, message):
    image = hide(image, message)
    return image

@app.route("/decrypt/<image>", methods=["GET"])
def decrypt(image = None):
    message = retrieve(image)
    return message

@app.route("/")
def main():
    return "<b>Image Steganalysis</b>"

if __name__ == "__main__":
    app.run(debug=True)