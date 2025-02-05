x = lambda a: a*a
print(x(5))

l = [5, 15, 8, 12]
cena = lambda a: str(a) + "Kč"
l2 = list(map(cena, l))
print(l2)
