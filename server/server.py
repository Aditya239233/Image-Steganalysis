from flask import Flask, request, send_file
from steganography.steganography import hide, retrieve
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/encrypt", methods=["POST"])
def encrypt():
    f = request.files['image'] 
    message = "Hello world"
    filename = secure_filename("image.png")
    destination="/".join(["steganography", filename])
    f.save(destination)
    image = hide(destination, message)
    if type(image) == bool:
        return image
    return send_file(image, mimetype='image/gif')

@app.route("/decrypt/<image>", methods=["GET"])
def decrypt(image = None):
    message = retrieve(image)
    return message

@app.route("/")
def main():
    return "<b>Image Steganalysis</b>"

if __name__ == "__main__":
    app.run(debug=True)