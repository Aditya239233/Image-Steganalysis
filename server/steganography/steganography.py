from server.steganography.utils import *
from PIL import Image

def hide(filename, message):
    img = Image.open(filename)
    binary = str2bin(message) + '1111111111111110'
    
    if img.mode in ('RGBA'):
        img = img.convert('RGBA')
        datas = img.getdata()
        
        newData = []
        digit = 0
        
        for item in datas:
            if digit < len(binary):
                newpix = encode(rgb2hex(item[0], item[1], item[2]), binary[digit])
				# print(newpix)
                if newpix == None:
                    newData.append(item)
                else:
                    r, g, b = hex2rgb(newpix)
                    newData.append((r, g, b, 255))
                    digit += 1
            else:
                newData.append(item) 
        
        img.putdata(newData)
        img.save(filename, "PNG")
        return newData
    
    return False # incorrect image mode, couldn't hide

def retrieve(filename):
    img = Image.open(filename)
    binary = ""
    
    if img.mode in ('RGBA'):
        img = img.convert('RGBA')
        datas = img.getdata()
        
        for item in datas:
            digit = decode(rgb2hex(item[0], item[1], item[2]))
            
            if digit == None:
                continue
            else:
                binary += digit
                if binary[-16:] == '1111111111111110':
                    return bin2str(binary[:-16])
        return bin2str(binary)
    return False
