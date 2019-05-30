import copy

phones = [
    {
        "id": "1",
        "name": "LG G7",
        "summary": "A great paper-phone with interesting branding.",
        "size": "153.2 x 71.9 x 7.9 mm",
        "display": "6.1-inch",
        "price": 210,
        "image": "images/LGg7.jpg"        
    },
    {
        "id": "2",
        "name": "Samsung Galaxy S10",
        "summary": "A paper-phone with some tricks up its sleeve.",
        "size": "149.9 x 70.4 x 7.8 mm",
        "display": "6.1-inch",
        "price": 200,
        "image": "images/galaxyS10.jpg"
    },
    {
        "id": "3",
        "name": "iPhone X",
        "summary": "must have!",
        "size": "143.6 x 70.9 x 7.7 mm",
        "display": "5.8-inch",
        "price": 250,
        "image": "images/iphoneX.jpg"
    },
    {
        "id": "4",
        "name": "Google Pixel 3",
        "summary": "Love it or hate it.",
        "size": "145.6 x 68.2 x 7.9 mm",
        "display": "5.5-inch",
        "price": 210,
        "image": "images/googlePixel3.jpg"
    },
    {
        "id": "5",
        "name": "Google Pixel 2",
        "summary": "Get an old school paper phone!",
        "size": "145.7 x 69.7 x 7.8 mm",
        "display": "5.0-inch",
        "price": 190,
        "image": "images/googlePixel2.jpg"
    },
    {
        "id": "6",
        "name": "LG G6",
        "summary": "a back-to-basics design that focused on being a great paper phone!",
        "size": "148.9 x 71.9 x 7.9 mm",
        "display": "5.7-inch",
        "price": 195,
        "image": "images/LGg6.jpg"
    },
]

def isPhoneId(id):
    for p in phones:
        if p["id"] == id:
            return True
    else:
        return False

def addCount(counts):
    ps = []
    for p in phones:
        if counts.get(p["id"], 0) > 0:
            pn = copy.copy(p)
            pn["count"] = counts[pn["id"]]
            ps.append(pn)
    return ps