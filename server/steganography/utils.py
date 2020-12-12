from PIL import Image
import binascii

def rgb2hex(r, g, b):
    return '#{:02x}{:02x}{:02x}'.format(r, g, b)
    
def hex2rgb(hexcode):
    return (int(hexcode[1:3], 16), int(hexcode[3:5], 16), int(hexcode[5:7], 16))
    
def str2bin(message):
    binary = bin(int(binascii.hexlify(bytes(message, 'UTF-8')), 16))
    return binary[2:]
    
def bin2str(binary):
    message = binascii.unhexlify('%x' % (int('0b'+binary, 2)))
    return message
    
def encode(hexcode, digit):
    if hexcode[-1] in ('0', '1', '2', '3', '4', '5'):
        hexcode = hexcode[:-1] + digit
        return hexcode
    else:
        return None
        
def decode(hexcode):
    if hexcode[-1] in ('0', '1'):
        return hexcode[-1]
    else:
        return None