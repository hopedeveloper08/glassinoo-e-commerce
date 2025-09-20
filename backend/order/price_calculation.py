from talq.models import Talq


def price_calculation(item):
    talqs = Talq.objects.filter(talq_type__id=item['talqID'], thickness=item['thickness']).order_by('width')

    length = item['length']
    width = item['width']
    
    if item['shape'] == 'دایره':
        length = width
        
    if length < width:
        length, width = width, length

    if length <= talqs.last().width:
        length, width = width, length

    for talq in talqs:
        if width <= talq.width:
            price = talq.price 
            break

    price = int(price * (length * 1.05) / 100)
    
    if item['shape'] == 'دایره':
        if width <= 60:
            price += 300_000
        elif width <= 120:
            price += 500_000
        elif width <= 160:
            price += 700_000
        else:
            price += 900_000
            
    return price
