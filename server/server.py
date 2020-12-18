from flask import Flask, request, send_file, jsonify
from steganography.steganography import hide, retrieve
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/encrypt", methods=["POST"])
def encrypt():
    f = request.files['image'] 
    message = request.form.get("message")
    filename = secure_filename("image.png")
    destination="/".join(["steganography", filename])
    f.save(destination)
    image = hide(destination, message)
    if type(image) == bool or image == None:
        return False
    return send_file(destination, mimetype='image/gif')

@app.route("/decrypt", methods=["POST"])
def decrypt():
    f = request.files['image']
    filename = secure_filename("image.png")
    destination="/".join(["steganography", filename])
    f.save(destination)
    message = retrieve(destination)
    message = message.decode("utf-8") 
    return jsonify(message)

@app.route("/")
def main():
    return "<b>Image Steganalysis</b>"

if __name__ == "__main__":
    app.run(debug=True)