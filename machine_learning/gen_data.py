import csv
import random


with open('wine.csv', 'w', encoding='utf-8', newline='') as file:
    writer = csv.writer(file, delimiter=',')
    header = ['Grade', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12', 'P13']
    writer.writerow(header)
    for _ in range(1000):
        D = {
            'Grade': '1',
            'P1': random.randint(13, 14) + round(random.uniform(0, 1), 2),
            'P2': random.randint(1, 2) + round(random.uniform(0, 1), 2),
            'P3': random.randint(2, 2) + round(random.uniform(0, 1), 2),
            'P4': random.randint(15, 21) + round(random.uniform(0, 1), 2),
            'P5': random.randint(100, 130),
            'P6': random.randint(2, 3) + round(random.uniform(0, 1), 2),
            'P7': random.randint(2, 3) + round(random.uniform(0, 1), 2),
            'P8': round(random.uniform(0, 1), 2),
            'P9': random.randint(1, 2) + round(random.uniform(0, 1), 2),
            'P10': random.randint(4, 7) + round(random.uniform(0, 1), 2),
            'P11': random.randint(0, 1) + round(random.uniform(0, 1), 2),
            'P12': random.randint(2, 3) + round(random.uniform(0, 1), 2),
            'P13': random.randint(725, 1250)
        }
        fake_data = [
            D['Grade'], D['P1'], D['P2'], D['P3'], D['P4'], D['P5'], D['P6'], D['P7'], D['P8'], D['P9'], D['P10'], D['P11'], D['P12'], D['P13']
        ]
        writer.writerow(fake_data)
