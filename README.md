# Image-Steganalysis

A Web Application to hide secret messages inside images and retreive embedded data from images.

## Steganography
Steganography is the technique of hiding secret data within an ordinary, non-secret, file or message in order to avoid detection. The use of steganography can be combined with encryption as an extra step for hiding or protecting data. 

## How it works

1. Hide a secret message inside an Image
  * Open the image and look at its pixel in hexadecimal
  * If the blue pixel's channel falls in the range of 0-5 then 1 bit of information is stored
  * End the stream with a delimiter of 1111111111111110 to take up 2 bits
  
2. Extract embedded message from Image
  * Pull all the blue bits of 0 and 1s until the stream obtains the delimiter of 1111111111111110
  
## Quickstart

1. Starting the client
```bash
cd client
npm install
npm start
```

2. Starting the Server
```bash
cd server
pip install -r requirements.txt
python server.py
```
## Drawbacks
This app currently works only for PNG images.

## Resources 

1. https://en.wikipedia.org/wiki/Steganography
2. https://www.youtube.com/watch?v=TWEXCYQKyDc&t=459s
3. https://www.youtube.com/watch?v=q3eOOMx5qoo
