import openpyxl
import json
from openpyxl.styles import Font, PatternFill
from collections import Counter

with open('payments.json', encoding='utf-8') as data:
    data = json.load(data)

# Получаем значения client_id
client_ids = [payment['client_id'] for payment in data['payments']]

# Используем Counter для подсчета частоты повторения значений client_id
counter = Counter(client_ids)

# Получаем 10 наиболее повторяющихся client_id
most_common_ids = counter.most_common(10)

# Получаем только те id, у которых повторяется client_id из наиболее повторяющихся
repeated_ids = [payment['id'] for payment in data['payments'] if payment['client_id'] in [id for id, _ in most_common_ids]]

# Выводим только 10 id с наиболее повторяющимися client_id
for i, payment_id in enumerate(repeated_ids[:10]):
    print(payment_id)

# Чтение данных из файла clients.json
with open('clients.json', encoding='utf-8') as clients_file:
    clients_data = json.load(clients_file)

# Вывод информации о клиентах с ID, совпадающими с 10 наиболее повторяющимися client_id
for client in clients_data['clients']:
    if client['id'] in most_common_ids:
        print(client)